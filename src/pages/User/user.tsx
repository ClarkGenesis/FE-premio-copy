import Breadcrumb from "../../components/UserBreadcrums";
import Header from "../../layouts/UserLayouts/UserHeader";
import Sidemenu from "../../layouts/UserLayouts/UserSidemenu";
import User_avatar from "../../assets/photos/user-avatar.png";
import Featured1 from "../../layouts/UserLayouts/FeaturedMotorcycles";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();

  const Pending = "Pending";


return (
  <>
  <Header />
  <Sidemenu />
  <div className="main-content app-content">
    <div className="container-fluid p-2">
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Welcome Section */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="box overflow-hidden main-content-card shadow-lg bg-white rounded-lg">
            <div className="box-body text-center p-6 bg-gray-100 border">
              <img
                src={User_avatar}
                alt="User Profile"
                className="transparent-logo avatar-rounded mx-auto mb-4 w-24 h-24 object-cover" // Adjusted image size and object-cover
              />
              <p className="text-gray-700 font-medium">
                <i>Welcome back!</i>
                <br />
                <span className="font-bold text-gray-900">{user?.name}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Pre-Registration Status Section */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <div className="box overflow-hidden main-content-card shadow-lg bg-white rounded-lg ">
            <div className="box-body p-4 bg-gray-200">
              <div className="status-section p-5 rounded-lg bg-gray-50 shadow-md border border-gray-800">
                <h5 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                  <i className="bi bi-info-circle text-blue-500"></i>
                  <span>Pre-Registration Status</span>
                </h5>
                <p className="text-gray-700 mb-3 flex items-center space-x-2">
                  <i className="bi bi-check-circle text-green-500"></i>
                  <span>
                    Status:{" "}
                    {Pending === "Pending" && (
                      <span className="text-yellow-600 font-semibold inline-flex items-center gap-2">
                        <i className="bi bi-clock-fill text-yellow-500"></i>
                        Pending
                        <span className="text-gray-500 font-normal">
                           (Under Review)
                        </span>
                      </span>
                    )}
                  </span>
                </p>
                <p className="text-gray-700 mb-3 flex items-center space-x-2">
                  <i className="bi bi-calendar-check text-blue-500"></i>
                  <span>
                    Submitted On:{" "}
                    <span className="text-blue-600 font-semibold">
                      March 12, 2025
                    </span>
                  </span>
                </p>
                <p className="text-gray-700 flex items-center space-x-2">
                  <i className="bi bi-hourglass-split text-purple-500"></i>
                  <span>
                    Estimated Approval:{" "}
                    <span className="text-purple-600 font-semibold">
                      3-5 Business Days
                    </span>
                    <span className="text-gray-500 font-normal">
                       (March 16 - March 18, 2025)
                    </span>
                  </span>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="box-body p-4 bg-gray-200">
              <div className="status-section bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200 ">
                <h6 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2 ">
                  <i className="bi bi-gear text-blue-500"></i>
                  <span>Actions</span>
                </h6>
                <p className="text-gray-700 mb-3 flex items-center space-x-2">
                  <i className="bi bi-question-circle text-blue-500"></i>
                  <span>
                    Need help?{" "}
                    <Link
                      to="/support"
                      className="text-blue-500 hover:underline"
                    >
                      Contact Support
                    </Link>
                  </span>
                </p>
                <p className="text-gray-700 flex items-center space-x-2">
                  <i className="bi bi-arrow-clockwise text-green-500"></i>
                  <span>
                    Want to update?{" "}
                    <Link
                      to="/modify-registration"
                      className="text-blue-500 hover:underline"
                    >
                      Modify Registration
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Featured1 />
  </div>
</>
);
}

export default Dashboard;