import { useState } from "react";
import ProfIcon from '../../assets/images/faces/11.jpg';
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext.tsx';


function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const { setShowLogoutModal  } = useAuth();


  return (
    <header className="app-header sticky bg-red-600" id="header">
      <div className="main-header-container container-fluid">
        <div className="header-content-left">
          <div className="header-element">
            <div className="horizontal-logo">
              <a href="index.html" className="header-logo">
                <img
                  src="/assets/images/brand-logos/desktop-logo.png"
                  alt="logo"
                  className="desktop-logo"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <i
              className="bi bi-bell-fill text-white"
              style={{ fontSize: "1rem", cursor: "pointer" }}
              onClick={() => setNotifOpen(!notifOpen)}
            ></i>
            {notifOpen && (
              <div
                className="absolute right-0 mt-6 w-48 bg-white shadow-lg rounded-lg py-1">
                <p className="px-2 py-1 text-gray-700">
                  You have 0 notification(s)
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center focus:outline-none p-3"
            >
              <img
                src={ProfIcon}
                alt="Profile"
                className="w-11 h-11 rounded-full border border-black"
              />
            </button>

            {profileOpen && (
              <div
                className="absolute right-0 mt-1 w-48 bg-white shadow-lg rounded-lg py-1">
                <Link
                  to="/admin-profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-300">
                  Profile
                </Link>
                <Link
                  to="/admin-setting"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-300">
                  Settings
                </Link>
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-300">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
