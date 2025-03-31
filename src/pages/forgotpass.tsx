import Header from '../layouts/home-header';
import Footer from "../layouts/home-footer";
import Background from "../assets/photos/bg2.png";
import Key1 from "../assets/photos/key.png";
import { Link } from 'react-router-dom';

function ForgotPassword () {
  return (
    <>
      <div
        className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}>
        <Header />
        <div className="flex-1 flex justify-center items-center">
          <div className="max-w-md w-full p-4 rounded-lg shadow-lg border border-black bg-white">
            <h2 className="text-center mb-4 text-2xl font-bold text-gray-800">Forgot Password</h2>
            <p className="text-center mb-4 text-sm text-gray-700">Enter your email to recover your account</p>
            <div className="flex justify-center mb-4">
              <img src={Key1} alt="Key Icon" className="h-28 w-28" />
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
              </div>
              <button
                type="button"
                className="w-full py-2 text-white bg-red-600 rounded-lg focus:ring-red-500 mt-4">
                Send Reset Link
              </button>
            </form>
            <p className="text-center mt-4 text-sm">
              Remember your password?{' '}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
