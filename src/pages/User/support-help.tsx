import Breadcrumb from "../../components/user-breadcrums";
import Header from "../../layouts/User-Layouts/user-header";
import Sidemenu from "../../layouts/User-Layouts/user-sidemenu";
import { Link } from "react-router-dom";

function SupportHelp() {
  return (
    <>
      <Header />
      <Sidemenu />
      <div className="main-content app-content">
        <div className="container-fluid">
          <Breadcrumb title="Support & Help" active="Support & Help" />
          <div className="box-body p-5">
            <div className="flex-1 flex justify-center items-center backdrop-blur-md">
              <div className="w-full max-w-2xl mx-4 p-6 rounded-lg shadow-lg border bg-white bg-opacity-50 backdrop-blur-lg flex gap-6">
                {/* Contact Us Section */}
                <div className="w-1/2">
                  <h2 className="text-center mb-4 text-2xl font-bold text-gray-800">
                    Contact Us
                  </h2>
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="flex items-center mb-2 text-sm font-medium gap-2 text-gray-900"
                      >
                        <i className="bi bi-person-circle text-black"></i>
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
                      <label
                        htmlFor="email"
                        className="flex items-center mb-2 text-sm font-medium gap-2 text-gray-900"
                      >
                        <i className="bi bi-envelope text-black"></i>
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
                      <label
                        htmlFor="message"
                        className="flex items-center mb-2 text-sm font-medium gap-2 text-gray-900"
                      >
                        <i className="bi bi-chat-dots text-black"></i>
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Type your message here"
                        className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        rows={4}
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full p-2 text-white bg-red-600 rounded-lg focus:ring-red-500"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Need Help Section */}
                <div className="w-1/2">
                  <h2 className="text-center mb-4 text-xl font-semibold text-gray-800">
                    Need Help?
                  </h2>
                  <div className="mt-4 p-4 rounded-lg shadow-md border border-gray-300 bg-gray-50">
                    <div className="text-center">
                      <p className="mb-2">
                        <i className="bi bi-phone"></i> Call Us:{" "}
                        <span className="text-gray-800 font-medium">
                          (+63) 9173077038
                        </span>
                      </p>
                      <p className="mb-2">
                        <i className="bi bi-envelope"></i> Email Us:{" "}
                        <Link to="mailto:support@premio.ph"
                          className="text-blue-500 hover:underline"
                        >
                          support@premio.ph
                        </Link>
                      </p>
                      <p>
                        <i className="bi bi-geo-alt"></i> Location:{" "}
                        <span className="text-gray-800 font-medium">
                         Tagoloan.<br />
                          Cagayan de Oro City, 9000 Misamis Oriental
                        </span>
                      </p>
                      <p className="mt-2">
                        <i className="bi bi-chat-dots"></i> Reach out via Live
                        Chat:{" "}
                        <Link to="#" className="text-blue-500 hover:underline">
                          Start Chat
                        </Link>
                      </p>
                      <p className="mt-2">
                        <i className="bi bi-question-circle"></i> Check our{" "}
                        <Link to="#" className="text-blue-500 hover:underline">
                          FAQs
                        </Link>{" "}
                        for quick answers.
                      </p>
                    </div>
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

export default SupportHelp;
