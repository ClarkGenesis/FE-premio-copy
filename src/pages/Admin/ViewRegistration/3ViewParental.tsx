import Breadcrumb from "../../../components/AdminBreadcrums";
import Header from "../../../layouts/AdminLayouts/AdminHeader";
import { Link } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  storeBank: string;
  itemLoanAmount: string;
  term: string;
  date: Date;
  balance: number;
  name: string;
  relationship: string;
  telno: string;
  address: string;
  selfEmployed: string;
  employed: string;
  allotment: string;
  providedBy: string;
}
const initialFormData: FormData = {
  storeBank: "",
  itemLoanAmount: "",
  term: "",
  date: new Date(),
  balance: 0,
  name: "",
  relationship: "",
  telno: "",
  address: "",
  selfEmployed: "",
  employed: "",
  allotment: "",
  providedBy: "",
};
function View3() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleViewClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="container-fluid">
          <Breadcrumb
            title="View Credit Application Form  "
            links={[{ text: "Personal & Family Profile", link: "/2ViewFamilyProfile" }]}
            active="Parental & Credit Information"
          />
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-12 col-span-12">
              <div className="box overflow-hidden main-content-card">
                <div className="box-body p-5">

                  <div className="col-span-12 mb-6">
                      <div className="flex items-center justify-between relative">
                        {[
                          { step: 1, label: "Personal & Address Info" },
                          { step: 2, label: "Personal & Family Profile" },
                          { step: 3, label: "Parental & Credit Information" },
                          { step: 4, label: "Employment & Payment Details Form" },
                          { step: 5, label: "Co-Maker & Employment Details" },
                          { step: 6, label: "Credit Inquiry Authorization" },
                        ].map(({ step, label }) => (
                          <div key={step} className="flex flex-col items-center">
                            <div
                              className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                                step === 1 || step === 2 || step === 3
                                  ? "bg-gray-500 text-white"
                                  : "border border-black text-black"
                              }`}
                            >
                              {step}
                            </div>
                            <p
                              className={`text-center text-black text-xs mt-1 px-2 py-1 rounded-lg shadow-sm ${
                                step === 1 || step === 2 || step === 3 
                                  ? "bg-gray-500 text-white"
                                  : "bg-gray-200"
                              }`}
                            >
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>


                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <h6 className="text-md font-semibold">
                        CERDIT REFERENCES(Preferably Purchase/Cash Loan)
                      </h6>
                      <hr className="mt-2 mb-4" />
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                          ["STORE/BANK", "storeBank", "bi bi-person", "text"],
                          ["ITEM/LOAN AMOUNT", "itemLoanAmount", "bi bi-person", "text"],
                          ["TERM", "term", "bi bi-person", "text"],
                          ["DATE", "date", "bi bi-person", "date"],
                          ["BALANCE", "balance", "bi bi-person", "number"],
                        ].map(([label, name, icon, type]) => (
                          <div key={name} className="relative">
                            <label className="block font-medium mb-1" htmlFor={name}>
                              {label}
                            </label>
                            <div className="relative">
                              <input
                                type={type}
                                id={name}
                                name={name}
                                onChange={handleChange}
                                className="ti-form-input rounded-sm ps-11 focus:z-10"
                                disabled={!isEditing}
                              />
                              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                <i className={icon}></i>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="text-md font-semibold">PERSONAL REFERENCES </h6>
                      <hr className="mt-2 mb-4" />
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                          ["NAME", "name", "bi bi-person", "text"],
                          ["RELATIONSHIP", "relationship", "bi bi-person", "text"],
                          ["TEL NO", "telno", "bi bi-person", "text"],
                          ["ADDRESS", "address", "bi bi-person", "date"],
                        ].map(([label, name, icon, type]) => (
                          <div key={name} className="relative">
                            <label className="block font-medium mb-1" htmlFor={name}>
                              {label}
                            </label>
                            <div className="relative">
                              <input
                                type={type}
                                id={name}
                                name={name}
                                onChange={handleChange}
                                className="ti-form-input rounded-sm ps-11 focus:z-10"
                                disabled={!isEditing}
                              />
                              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                <i className={icon}></i>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-md bg-gray-100 border w-1/2">
                      <h6 className="text-md font-semibold mb-1">Source of Income</h6>
                      <div className="flex flex-wrap gap-4">
                        {[
                          { label: "Self-Employed/Business", value: "selfEmployed" },
                          { label: "Employed", value: "employed" },
                          { label: "Allotment", value: "allotment" },
                        ].map(({ label, value }) => (
                          <div
                            key={value}
                            className="flex items-center border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-200"
                          >
                            <input
                              type="checkbox"
                              id={value}
                              name="houseAndLotOwnershipStatus"
                              value={value}
                              onChange={handleChange}
                              className="mr-2"
                              disabled={!isEditing}
                            />
                            <label htmlFor={value} className="text-sm font-medium">
                              {label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-4">
                      {isEditing ? (
                        <button
                          type="button"
                          onClick={handleViewClick}
                          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                        >
                          <i className="bi bi-eye"></i>
                          <span className="px-3">View</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleEditClick}
                          className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center"
                        >
                          <i className="bi bi-pencil"></i>
                          <span className="px-3">Edit</span>
                        </button>
                      )}
                      <Link
                        to="/4ViewEmployment"
                        className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
                        onClick={() => window.scrollTo({ top: 1 })}
                      >
                        <i className="bi bi-arrow-right"></i>
                        <span className="px-3">Next</span>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default View3;
