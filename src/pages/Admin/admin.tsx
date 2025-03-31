import Breadcrumb from "../../components/admin-breadcrums";
import Header from "../../layouts/Admin-Layouts/admin-header";
import Sidemenu from "../../layouts/Admin-Layouts/admin-sidemenu";
import User_avatar1 from '../../assets/images/faces/11.jpg';


function AdminDashboard() {
    return (
        <>
            <Header />
            <Sidemenu />
            <div className="main-content app-content">
                <div className="container-fluid">
                    <Breadcrumb />

                    {/* Welcome & Metrics Section */}
                    <div className="grid grid-cols-12 gap-6 mb-6">
                        {/* Welcome Section */}
                        <div className="col-span-3 md:col-span-2">
                            <div className="box overflow-hidden main-content-card">
                                <div className="box-body text-center p-6">
                                    <img 
                                        src={User_avatar1} 
                                        alt="User Profile" 
                                        className="transparent-logo avatar-rounded mx-auto mb-4"
                                    />
                                    <p className="font-medium text-gray-700">
                                        <i>Welcome Back!</i><br />
                                        <span className="font-bold text-gray-900">Administrator</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-span-30 md:col-span-10">
  <div className="box overflow-hidden main-content-card">
    <div className="box-body p-4 bg-gray-100 rounded-lg shadow-lg">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-gray-700">
        {/* New Orders Box */}
        <li className="flex">
          <div className="info-box bg-blue-500 shadow-lg rounded p-4 flex items-center w-full">
            <i className="bi bi-bag display-4 text-white me-3"></i> {/* Shopping Bag Icon */}
            <div>
              <h4 className="fw-bold text-white mb-1">150 New Orders</h4>
              <a href="#" className="text-white text-decoration-none fw-semibold">
                More info <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </li>

        {/* Bounce Rate Box */}
        <li className="flex">
          <div className="info-box bg-green-500 shadow-lg rounded p-4 flex items-center w-full">
            <i className="bi bi-graph-up display-4 text-white me-3"></i> {/* Bar Chart Icon */}
            <div>
              <h4 className="fw-bold text-white mb-1">53% Bounce Rate</h4>
              <a href="#" className="text-white text-decoration-none fw-semibold">
                More info <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </li>

        {/* User Registrations Box */}
        <li className="flex">
          <div className="info-box bg-yellow-500 shadow-lg rounded p-4 flex items-center w-full">
            <i className="bi bi-person-plus display-4 text-white me-3"></i> {/* User Icon */}
            <div>
              <h4 className="fw-bold text-white mb-1">44 User Registrations</h4>
              <a href="#" className="text-white text-decoration-none fw-semibold">
                More info <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </li>

        {/* Unique Visitors Box */}
        <li className="flex">
          <div className="info-box bg-red-500 shadow-lg rounded p-4 flex items-center w-full">
            <i className="bi bi-pie-chart display-4 text-white me-3"></i> {/* Pie Chart Icon */}
            <div>
              <h4 className="fw-bold text-white mb-1">65 Unique Visitors</h4>
              <a href="#" className="text-white text-decoration-none fw-semibold">
                More info <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>





                        {/* Metrics Section */}
                        <div className="col-span-9 md:col-span-10">
                            <div className="box overflow-hidden main-content-card">
                                <div className="box-body p-6 bg-gray-100 rounded-lg shadow-lg">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                                        {[
                                            { icon: "bi bi-people-fill", label: "Total Users", details: "Active (1), Pending (1), Delete (0)" },
                                            { icon: "bi bi-speedometer2", label: "Total Motorcycles Listed", details: "8" },
                                            { icon: "bi bi-file-earmark-text-fill", label: "New Application Requests", details: "1" },
                                            { icon: "bi bi-clock-fill", label: "Pending Approvals", details: "1" },
                                        ].map((metric) => (
                                            <li key={metric.label} className="flex items-center gap-3 border p-4 rounded-lg bg-white shadow-md">
                                                <i className={`${metric.icon} text-blue-500 text-xl`}></i>
                                                <div>
                                                    <b>{metric.label}:</b> {metric.details}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Content Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                        {/* Recent Registrations */}
                        <div className="box bg-blue-100 rounded-lg shadow-lg p-6 border border-black">
                            <h3 className="text-lg font-semibold text-blue-800 mb-4">Recent Registrations</h3>
                            <ul className="list-disc pl-6 text-blue-600 space-y-2">
                                <li>John Doe - Registered on 2025-03-15</li>
                            </ul>
                        </div>

                        {/* Pre-registration Summary */}
                        <div className="box bg-yellow-100 rounded-lg shadow-md p-6 border border-black">
                            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Pre-registration Summary</h3>
                            <p className="text-yellow-600">
                                A total of 30 users have initiated pre-registration, awaiting verification.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
