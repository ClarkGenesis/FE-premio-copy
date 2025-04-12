import Breadcrumb from "../../../components/user-breadcrums";
import Header from "../../../layouts/User-Layouts/user-header";
import Sidemenu from "../../../layouts/User-Layouts/user-sidemenu";
import { Link } from "react-router-dom";

function Pendings() {
    const preRegistrationStatus = "Pending";

  return (
    <>
      <Header />
      <Sidemenu />
      <div className="main-content app-content">
        <Breadcrumb title="Pre-Registrations" active="Pre-Registrations" />
        <div className="xxl:col-span-9 col-span-12">
          <div className="box overflow-hidden main-content-card">
            <div className="box-body p-3">
              <h3 className="text-lg font-semibold text-black">Pre-Registration</h3>
              <div className="bg-gray-200 p-4 mt-4 rounded-lg shadow-md">
                <p className="mt-3">
                <span className="font-bold">
                    <i className="bi bi-check-circle-fill"></i> Your Pre-Registration has been submitted successfully.
                </span>
                </p>
                <p className="mt-3">
                     Status:{" "}
                     {preRegistrationStatus === "Pending" && (
                     <span className="text-yellow-500 font-bold">
                         <i className="bi bi-clock-fill"></i>  Awaiting Approval  
                     <span className="text-gray-500 font-normal">&nbsp;(Under Review)</span>
                    </span>
                    )}
                </p>
                <p className="mt-2">
                  Submitted On:{" "}
                  <span className="text-black font-bold">
                    <i className="bi bi-calendar-check"></i> March 12, 2025
                  </span>
                </p>
                    <p className="mt-2">
                        Estimated Approval:{" "}
                         <span className="text-yellow-500 font-bold">
                            <i className="bi bi-hourglass-split"></i> 3-5 Business Days 
                        <span className="text-gray-500 font-normal">&nbsp;(March 16 - March 18, 2025)</span>
                        </span>
                    </p>
                    <Link
                        to="/form"
                        className="mt-2 inline-block px-4 py-2 p-1 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-900">
                        Review Registration
                    </Link>
                <p className="mt-2">
                  <i className="bi bi-question-circle"></i> Need help? <Link to="#" className="text-blue-500 hover:underline">Contact Support</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pendings;