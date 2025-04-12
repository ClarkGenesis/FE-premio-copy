import Header from '../layouts/home-header';
import Footer from "../layouts/home-footer";
import Background from "../assets/photos/bg2.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';


function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await login(email, password);

      if (user?.role === 'admin') {
        navigate('/admin', { replace: true });
      }
      else if (user?.role === 'user') {
        navigate('/user');
      }
      else {
        navigate(from, { replace: true });
      }
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <>
      <div
        className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}>
        <Header />
        <div className="flex-1 flex justify-center items-center">
          <div className="max-w-md w-full mx-auto p-4 rounded-lg shadow-lg border border-black bg-white">
            <h2 className="text-center text-2xl mb-4 font-bold text-gray-800">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900" 
                  onClick={() => window.scrollTo({ top: 0})}>
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  id="password"
                  placeholder="Enter your password"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div className="flex justify-center mt-2">
                <Link to="/forgotpassword" className="text-blue-600 hover:underline"
                  onClick={() => window.scrollTo({ top: 0})}>
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-white bg-red-600 rounded-lg focus:ring-red-500 focus:border-red-500 mt-4">
                LOGIN
              </button>
            </form>

            <p className="text-center mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline font-medium"
                onClick={() => window.scrollTo({ top: 100})}>
                Register
              </Link>
            </p>

            <hr className="my-6 border-gray-300" />
            {error && <div style={{ color: 'red' }}>{error}</div>}

            <div className="mt-4">
              <button
                type="button"
                className="w-full py-2 flex items-center justify-center bg-white border border-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <i className="bi bi-google px-4"></i>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
