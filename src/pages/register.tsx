import Header from '../layouts/home-header';
import Footer from "../layouts/home-footer";
import Background from "../assets/photos/bg2.png";
import { Link } from 'react-router-dom';

function Register () {
  return (
    <>
      <div
        className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat pt-8"
        style={{ backgroundImage: `url(${Background})` }}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 flex justify-center items-center">
            <div className="max-w-md w-full p-4 rounded-lg shadow-lg border-black bg-white">
              <h2 className="text-center mb-6 text-2xl font-bold text-gray-800">Register</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="birthdate" className="block mb-2 text-sm font-medium text-gray-900">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    />
                    <i className="absolute right-2 top-2 cursor-pointer fa fa-eye-slash"></i>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      placeholder="Confirm your password"
                      className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    />
                    <i className="absolute right-2 top-2 cursor-pointer fa fa-eye-slash"></i>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-4 text-white bg-red-600 rounded-lg focus:ring-red-500 mt-2">
                  REGISTER
                </button>
              </form>
              <p className="text-center mt-4 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
