import Breadcrumb from "../../components/user-breadcrums";
import Header from "../../layouts/User-Layouts/user-header";
import Sidemenu from "../../layouts/User-Layouts/user-sidemenu";
import { Link } from "react-router-dom";

function PreRegistrations() {
  const Approved = "Approved";
  const Disapproved = "Disapproved";
  const Pending = "Pending";

  return (
    <>
      <Header />
      <Sidemenu />
      <div className="main-content app-content">
        <Breadcrumb title="Pre-Registrations" active="Pre-Registrations" />

        <div className="xxl:col-span-9 col-span-12">
          <div className="box overflow-hidden main-content-card">
            <div className="box-body p-3">
              <h3 className="text-lg font-semibold text-black">Pre-Registration Status</h3>
              <div className="bg-gray-100 p-4 mt-4 rounded-lg shadow-md">
                <p className="mt-3">
                  Status:{" "}
                  {Approved === "Approved" && (
                    <span className="text-black font-bold">
                      <i className="bi bi-check-circle-fill text-success"></i> Approved
                      <span className="text-black font-normal">
                        &nbsp;(Congratulations! Your registration has been approved.)
                      </span>
                    </span>
                  )}
                </p>
                <p className="mt-2">
                  Submitted On:{" "}
                  <span className="text-black font-bold">
                    <i className="bi bi-calendar-check text-blue-500"></i> March 12, 2025
                  </span>
                </p>
                <p className="mt-2">
                  Approval Date:{" "}
                  <span className="text-black font-bold">
                    <i className="bi bi-calendar text-blue-500"></i> March 15, 2025
                  </span>
                </p>
                <p className="mt-2">
                <div className="text-blue-600 font-medium">
                  Next Steps: Please visit our office at Tagoloan St., Premio Motorcycles & Appliances with the necessary documents to complete the process,<br />
                  bring the creditrequirements, and print the pre-registration.
                </div>
                </p>
                <button
                  onClick={() => console.log("Download PDF functionality pending implementation.")}
                  className="mt-2 p-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-900">
                  <i className="bi bi-file-earmark-pdf"></i> Print Pre-Registration
                </button>
                <p className="mt-2">
                  <i className="bi bi-question-circle"></i> Need help? <Link to="#" className="text-blue-500 hover:underline">Contact Support</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="xxl:col-span-9 col-span-12">
          <div className="box overflow-hidden main-content-card">
            <div className="box-body p-3">
              <h3 className="text-lg font-semibold text-black">
                <i className="bi bi-journal-text"></i> Credit Requirements
              </h3>
              <div className="bg-gray-300 p-4 mt-4 rounded-lg shadow-md">
                <ul className="list-disc ml-5 mt-2 text-black">
                  <li className="flex items-center gap-2">
                    <i className="bi bi-person-fill"></i>
                    <b>2x2 ID Picture</b> (For both Buyer and Co-maker)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-cash-stack"></i>
                    <b>Proof of Income</b> (Payslips, Certificate of Employment, or Income Tax Return)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-house-door-fill"></i>
                    <b>Residence Certificate / Cedula</b> (Issued by your local government unit)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-receipt"></i>
                    <b>Proof of Billing</b> (Latest utility bill showing your current address)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-geo-alt-fill"></i>
                    <b>Driver's License</b> (if applicable)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-card-checklist"></i>
                    <b>Government-Issued IDs</b> (e.g., Passport, Voter’s ID, or UMID)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="xxl:col-span-9 col-span-12">
          <div className="box overflow-hidden main-content-card">
            <div className="box-body p-3">
              <h3 className="text-lg font-semibold text-black">Pre-Registration Status</h3>
              <div className="bg-gray-100 p-2 mt-2 rounded-lg shadow-md">
                  Status:{" "}
                  {Disapproved === "Disapproved" && (
                    <span className="text-black font-bold">
                      <i className="bi bi-x-circle-fill text-danger"></i> Disapproved
                      <span className="text-black font-normal">
                        &nbsp;(Unfortunately, your registration has been disapproved.)
                      </span>
                    </span>
                  )}
                <p className="mt-2">
                  Submitted On:{" "}
                  <span className="text-black font-bold">
                    <i className="bi bi-calendar-check text-blue-500"></i> March 12, 2025
                  </span>
                </p>
                <p className="mt-2">
                  Disapproval Date:{" "}
                  <span className="text-black font-bold">
                    <i className="bi bi-calendar text-blue-500"></i> March 18, 2025
                  </span>
                </p>
                <button
                  onClick={() => console.log("Download PDF functionality pending implementation.")}
                  className="mt-2 p-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-900"
                >
                  <i className="bi bi-file-earmark "></i> View Submission Details
                </button>
                <p className="mt-2">
                  <i className="bi bi-question-circle"></i> Need help? <Link to="#" className="text-blue-500 hover:underline">Contact Support</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="box-body p-4">
          <div className="status-section p-3 rounded-lg bg-gray-100 shadow-md border">
            <h5 className="text-lg font-bold text-gray-800 mb-4">Pre-Registration Status</h5>
            
            <p className="text-gray-700 mb-3">
              Status:{" "}
              {Pending === "Pending" && (
                <span className="text-yellow-500 font-bold inline-flex items-center gap-2">
                  <i className="bi bi-clock-fill text-blue-500"></i> Pending 
                  <span className="text-gray-500 font-normal">&nbsp;(Under Review)</span>
                </span>
              )}
            </p>
            <p className="text-gray-700 mb-3">
              Submitted On:{" "}
              <span className="text-yellow-500 font-bold inline-flex items-center gap-2">
                <i className="bi bi-hourglass-split text-blue-500"></i> March 12, 2025
              </span>
            </p>
            <p className="text-gray-700">
              Estimated Approval:{" "}
              <span className="text-yellow-500 font-bold inline-flex items-center gap-2">
                <i className="bi bi-hourglass-split text-blue-500"></i> 3-5 Business Days 
                <span className="text-gray-500 font-normal">&nbsp;(March 16 - March 18, 2025)</span>
              </span>
            </p>
            <button
              onClick={() => console.log("Download PDF functionality pending implementation.")}
              className="mt-2 p-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-900"
              >
              <i className="bi bi-file-earmark "></i> View Submission Details
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
export default PreRegistrations;