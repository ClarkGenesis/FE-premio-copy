import Breadcrumb from "../../components/admin-breadcrums";
import Header from "../../layouts/Admin-Layouts/admin-header";
import Sidemenu from "../../layouts/Admin-Layouts/admin-sidemenu";
import User_avatar4 from '../../assets/images/faces/11.jpg';

function Profiles2() {
  return (
    <>
      <Header />
      <Sidemenu />
      <div className="main-content app-content">
        <div className="container-fluid">
          <Breadcrumb title="Profile" active="Profile" />
          <div className="xxl:col-span-9 col-span-12">
            <div className="box overflow-hidden main-content-card">
              <div className="box-body p-5 mt-2 pt-3">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 pt-4">Profile Details</h2>
                <div className="grid grid-cols-12 gap-6 mt-3 pt-4">
                  <div className="xxl:col-span-3 col-span-12">
                    <div className="bg-gray-200 pt-4 rounded-lg shadow-md">
                      <div className="box-body text-center pt-1">
                      <img
                        src={User_avatar4}
                        alt="User Profile"
                        className="mx-auto w-28 h-28 rounded-full border border-black" />
                      <div className="text-center mt-2">
                        <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                        <p className="text-sm text-gray-500">johndoe@example.com</p>
                      </div>
                      <div className="mt-2 pt-3">
                          <button
                            type="button"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg m-3 hover:bg-blue-700 focus:ring-blue-500 focus:border-blue-500 mr-2">
                            Upload
                          </button>
                          <button
                              type="button"
                              className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-red-500 focus:border-red-500">
                              Remove
                          </button>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="xxl:col-span-9 col-span-12">
                    <form>
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value="John Doe"
                          placeholder="Enter your name"
                          className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value="johndoe@example.com"
                          placeholder="Enter your email address"
                          className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
  
                      <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-800">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          value="123 Main Street, City, Country"
                          placeholder="Enter your address"
                          className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-800">
                          Gender
                        </label>
                        <select
                          id="gender"
                          className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          defaultValue="male"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-800">
                          Bio
                        </label>
                          <textarea
                            id="bio"
                            placeholder="Tell us about yourself"
                            value="I am a software developer with a passion for creating user-friendly web applications."
                            className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          />
                      </div>
                      <button
                        type="button"
                        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-red-500 focus:border-red-500"
                      >
                        Save
                      </button>
                    </form>
                    <p className="mt-8"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profiles2;
