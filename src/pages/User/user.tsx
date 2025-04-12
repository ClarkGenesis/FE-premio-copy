import Breadcrumb from "../../components/user-breadcrums";
import Header from "../../layouts/User-Layouts/user-header";
import Sidemenu from "../../layouts/User-Layouts/user-sidemenu";
import User_avatar from "../../assets/photos/user-avatar.png";
import Featured1 from "../../layouts/User-Layouts/featured";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  const Pending = "Pending";
  const Approved = "Approved";
  const Disapproved = "Disapproved";
  const showStatus = false;

return (
  <>
    <Header />
    <Sidemenu />
    <div className="main-content app-content">
      <div className="container-fluid p-2">
        <Breadcrumb />
        {/* Welcome & Pre-Registration Section */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          {/* Welcome Section */}
          <div className="col-span-3 md:col-span-2">
            <div className="box overflow-hidden main-content-card shadow-lg bg-white rounded-lg">
              <div className="box-body text-center p-6">
                <img
                  src={User_avatar}
                  alt="User Profile"
                  className="transparent-logo avatar-rounded mx-auto mb-4"
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
          <div className="col-span-9 md:col-span-10">
            <div className="box overflow-hidden main-content-card shadow-lg bg-white rounded-lg">
              <div className="box-body p-4x">
                <div className="status-section p-3 rounded-lg bg-gray-100 shadow-md border">
                  <h5 className="text-lg font-bold text-gray-800 mb-4">
                    Pre-Registration Status
                  </h5>
                  <p className="text-gray-700 mb-3">
                    Status:{" "}
                    {Pending === "Pending" && (
                      <span className="text-yellow-500 font-bold inline-flex items-center gap-2">
                        <i className="bi bi-clock-fill text-blue-500"></i>{" "}
                        Pending
                        <span className="text-gray-500 font-normal">
                          &nbsp;(Under Review)
                        </span>
                      </span>
                    )}
                  </p>
                  <p className="text-gray-700 mb-3">
                    Submitted On:{" "}
                    <span className="text-yellow-500 font-bold inline-flex items-center gap-2">
                      <i className="bi bi-hourglass-split text-blue-500"></i>{" "}
                      March 12, 2025
                    </span>
                  </p>
                  <p className="text-gray-700">
                    Estimated Approval:{" "}
                    <span className="text-yellow-500 font-bold inline-flex items-center gap-2">
                      <i className="bi bi-hourglass-split text-blue-500"></i> 3-5
                      Business Days
                      <span className="text-gray-500 font-normal">
                        &nbsp;(March 16 - March 18, 2025)
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Approved */}
              {showStatus && (
                <div className="box-body p-4">
                  <div className="status-section p-3 rounded-lg bg-gray-100 shadow-md border">
                    <h5 className="text-lg font-bold text-gray-800 mb-4">
                      Pre-Registration Status
                    </h5>
                    <p className="mt-2">
                      Status:{" "}
                      {Approved === "Approved" && (
                        <span className="text-black font-bold">
                          <i className="bi bi-check-circle-fill text-success"></i>{" "}
                          Approved
                          <span className="text-black font-normal">
                            &nbsp;(Congratulations! Your registration has been
                            approved.)
                          </span>
                        </span>
                      )}
                    </p>
                    <p className="mt-2">
                      Submitted On:{" "}
                      <span className="text-black font-bold">
                        <i className="bi bi-calendar-check text-blue-500"></i>{" "}
                        March 12, 2025
                      </span>
                    </p>
                    <p className="mt-2">
                      Approval Date:{" "}
                      <span className="text-black font-bold">
                        <i className="bi bi-calendar text-blue-500"></i> March
                        15, 2025
                      </span>
                    </p>
                    <p className="mt-2">
                      <div className="text-blue-600 font-medium">
                        Next Steps: Please visit our office at Tagoloan St.,
                        Premio Motorcycles & Appliances with the necessary
                        documents to complete the process, bring the Credit
                        Requirements, and print the pre-registration.
                      </div>
                    </p>
                    <button
                      onClick={() =>
                        console.log(
                          "Download PDF functionality pending implementation."
                        )
                      }
                      className="mt-2 p-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-900"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Print
                      Pre-Registration
                    </button>
                  </div>
                </div>
              )}

              {/* Credit Requirements */}
              {showStatus && (
                <div className="box-body p-4 mt-1">
                  <div className="bg-gray-200 p-4 mt-1 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-black">
                      <i className="bi bi-journal-text"></i> Credit Requirements
                    </h3>
                    <ul className="list-disc ml-5 mt-2 text-black">
                      <li className="flex items-center gap-2">
                        <i className="bi bi-person-fill"></i>
                        <b>2x2 ID Picture</b> (For both Buyer and Co-maker)
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="bi bi-cash-stack"></i>
                        <b>Proof of Income</b> (Payslips, Certificate of
                        Employment, or Income Tax Return)
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="bi bi-house-door-fill"></i>
                        <b>Residence Certificate / Cedula</b> (Issued by your
                        local government unit)
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="bi bi-receipt"></i>
                        <b>Proof of Billing</b> (Latest utility bill showing
                        your current address)
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="bi bi-geo-alt-fill"></i>
                        <b>Driver's License</b> (if applicable)
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="bi bi-card-checklist"></i>
                        <b>Government-Issued IDs</b> (e.g., Passport, Voter’s
                        ID, or UMID)
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Disapproved */}
              {showStatus && (
                <div className="box-body p-4">
                  <div className="status-section p-3 rounded-lg bg-gray-100 shadow-md border">
                    <h5 className="text-lg font-bold text-gray-800 mb-4">
                      Pre-Registration Status
                    </h5>
                    <p className="mt-2">
                      Status:{" "}
                      {Disapproved === "Disapproved" && (
                        <span className="text-black font-bold">
                          <i className="bi bi-x-circle-fill text-danger"></i>{" "}
                          Disapproved
                          <span className="text-black font-normal">
                            &nbsp;(Unfortunately, your registration has been
                            disapproved.)
                          </span>
                        </span>
                      )}
                    </p>
                    <p className="mt-2">
                      Submitted On:{" "}
                      <span className="text-black font-bold">
                        <i className="bi bi-calendar-check text-blue-500"></i>{" "}
                        March 12, 2025
                      </span>
                    </p>
                    <p className="mt-2">
                      Disapproval Date:{" "}
                      <span className="text-black font-bold">
                        <i className="bi bi-calendar text-blue-500"></i> March
                        18, 2025
                      </span>
                    </p>
                    <button
                      onClick={() =>
                        console.log(
                          "Download PDF functionality pending implementation."
                        )
                      }
                      className="mt-2 p-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-900"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Review
                      Pre-Registration
                    </button>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="box-body p-6">
                <div className="status-section bg-gray-100 p-3 rounded-lg shadow-md border">
                  <h6 className="font-bold text-gray-800 mb-4">Actions</h6>
                  <p className="text-gray-700 mb-3">
                    <i className="bi bi-question-circle text-blue-500"></i> Need
                    help?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Contact Support
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <i className="bi bi-arrow-repeat text-blue-500"></i> Want to
                    update?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Modify Registration
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Featured1 />
      </div>
    </div>
  </>
);
}

export default Dashboard;