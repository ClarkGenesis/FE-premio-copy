import Breadcrumb from "../../components/UserBreadcrums";
import Header from "../../layouts/UserLayouts/UserHeader";
import Sidemenu from "../../layouts/UserLayouts/UserSidemenu";

function SupportHelp() {
  return (
    <>
      <Header />
      <Sidemenu />
      <div className="main-content app-content">
        <div className="container-fluid">
          <Breadcrumb title="Support & Help" active="Support & Help" />
          <div className="box-body p-5">
            <div className="flex justify-center items-center min-h-[50vh] py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4 text-center">
                    Contact Us
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-gray-50">
                      <i className="bi bi-phone text-red-600 text-xl"></i>
                      <div>
                        <p className="text-sm text-gray-700">Call Us:</p>
                        <p className="font-bold text-gray-900">(+63) 9173077038</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-gray-50">
                      <i className="bi bi-envelope text-red-600 text-xl"></i>
                      <div>
                        <p className="text-sm text-gray-700">Email Us:</p>
                        <a
                          href="mailto:support@premio.ph"
                          className="text-blue-500 hover:underline font-bold text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          support@premio.ph
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-gray-50">
                      <i className="bi bi-geo-alt text-red-600 text-xl"></i>
                      <div>
                        <p className="text-sm text-gray-700">Location:</p>
                        <p className="font-bold text-gray-900">
                          Tagoloan, Cagayan de Oro City, <br /> 9000 Misamis
                          Oriental
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4 text-center">
                    Quick Links
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                      <i className="bi bi-chat-dots text-red-600 text-xl"></i>
                      <div>
                        <p className="text-sm text-gray-700">Live Chat:</p>
                        <a
                          href="#"
                          className="text-blue-500 hover:underline font-bold text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Start Chat
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                      <i className="bi bi-question-circle text-red-600 text-xl"></i>
                      <div>
                        <p className="text-sm text-gray-700">FAQs:</p>
                        <a
                          href="#"
                          className="text-blue-500 hover:underline font-bold text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Check FAQs
                        </a>
                      </div>
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
