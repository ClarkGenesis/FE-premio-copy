import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import LogoutConfirmationModal from '../components/LogoutConfirmationModal';

// Define more comprehensive types
interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface LoginResponse {
  token: string;
  user: User;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role?: 'user' | 'admin'; // Optional, can be set default on backend
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<User>;
  register: (data: RegisterData) => Promise<User>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
  showLogoutModal: boolean;
  setShowLogoutModal: (show: boolean) => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Initialize axios defaults and load user on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  const loadUser = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get<User>('http://localhost:8000/api/user');
        setUser(response.data);
      }
    } catch (err) {
      const error = err as AxiosError;
      console.error('Failed to load user', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const login = useCallback(async (email: string, password: string): Promise<User> => {
    try {
      setLoading(true);
      setError(null);
      
      // Get CSRF cookie first if using Sanctum's web guard
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
      
      const response = await axios.post<LoginResponse>('http://localhost:8000/api/login', {
        email,
        password,
      }, {
        withCredentials: true,
      });
      
      localStorage.setItem('token', response.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      setUser(response.data.user);
      return response.data.user;
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (data: RegisterData): Promise<User> => {
    try {
      setLoading(true);
      setError(null);
      
      // Verify password match on client side first
      if (data.password !== data.password_confirmation) {
        throw new Error("Passwords don't match");
      }

      // Get CSRF cookie first if using Sanctum's web guard
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
      
      const response = await axios.post<LoginResponse>('http://localhost:8000/api/register', {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
        // role: 'user' // Can be set here or default on backend
      }, {
        withCredentials: true,
      });
      
      localStorage.setItem('token', response.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      setUser(response.data.user);
      return response.data.user;
    } catch (err) {
      const error = err as AxiosError<{ message?: string }> | Error;
      const errorMessage = error instanceof AxiosError 
        ? error.response?.data?.message || 'Registration failed. Please try again.'
        : error.message;
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      setLoading(true);
      await axios.post('http://localhost:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      setUser(null);
      setLoading(false);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await logout();
      setShowLogoutModal(false);
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }
  }, [logout]);

  const clearError = useCallback(() => setError(null), []);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      loading,
      error,
      showLogoutModal,
      setShowLogoutModal,
      clearError,
    }}>
      {children}
      <LogoutConfirmationModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
        loading={loading}
      />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
