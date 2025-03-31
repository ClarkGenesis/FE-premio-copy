import Breadcrumb from "../../components/admin-breadcrums";
import Header from "../../layouts/Admin-Layouts/admin-header";
import Sidemenu from "../../layouts/Admin-Layouts/admin-sidemenu";
import { useState } from "react";

function AdminSettings() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const enableDarkMode = () => {
    setDarkMode(true);
    const root = window.document.documentElement;
    root.classList.add("dark");
  };

  const enableLightMode = () => {
    setDarkMode(false);
    const root = window.document.documentElement;
    root.classList.remove("dark");
  };

  return (
    <>
      <Header />
      <Sidemenu />
      <div className={`main-content app-content ${darkMode ? "dark:bg-gray-900" : ""}`}>
        <div className="container-fluid">
          <Breadcrumb title="Settings" active="Settings" />
          <div className="xxl:col-span-9 col-span-12">
            <div className="box overflow-hidden main-content-card">
              <div className="box-body p-5">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Settings</h2>
                <div className="mb-4">
                  <button
                    onClick={enableDarkMode}
                    className="m-3 px-4 py-2 bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-900 hover:dark:bg-gray-600 focus:ring-gray-500 focus:border-gray-500"
                  >
                    Enable Dark Mode
                  </button>
                  <button
                    onClick={enableLightMode}
                    className="m-3 px-4 py-2 bg-gray-300 text-gray-800 dark:bg-gray-200 dark:text-gray-900 rounded-lg hover:bg-gray-400 hover:dark:bg-gray-300 focus:ring-gray-400 focus:border-gray-400"
                  >
                    Enable Light Mode
                  </button>
                </div>
                <div className="mb-4">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="m-3 px-4 py-2 bg-green-600 text-white dark:bg-gray-700 dark:text-gray-200 rounded-lg hover:bg-green-700 hover:dark:bg-gray-600 focus:ring-green-500 focus:border-green-500"
                    >
                      Change Password
                    </button>
                    {isOpen && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white dark:bg-gray-800 p-6 w-96 rounded-lg shadow-lg">
                          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Change Password</h2>
                          <div className="flex flex-col gap-3">
                            <input
                              type="password"
                              placeholder="Current Password"
                              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                            />
                            <input
                              type="password"
                              placeholder="New Password"
                              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                            />
                            <input
                              type="password"
                              placeholder="Confirm Password"
                              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
                            />
                          </div>
                          <div className="mt-4 flex justify-between">
                            <button
                              onClick={() => setIsOpen(false)}
                              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                            >
                              Cancel
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSettings;
