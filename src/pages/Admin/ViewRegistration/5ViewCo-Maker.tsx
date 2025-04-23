import Breadcrumb from "../../../components/AdminBreadcrums";
import Header from "../../../layouts/AdminLayouts/AdminHeader";
import { Link } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  age: number;
  company: string;
  sex: string;
  blockStreet: string;
  zonePurok: string;
  barangay: string;
  municipality: string;
  province: string;
  lengthOfstay: string;
  provincialBlockStreet: string;
  provincialZonePurok: string;
  provincialBarangay: string;
  provincialMunicipality: string;
  provincialProvince: string;
  civilStatus: string;
  relationApplicant: string;
  birthday: Date;
  tin: string;
  mobileNo: string;
  presentEmployer: string;
  dateHired: Date;
  position: string;
  grossIncome: number;
  employerAddress: string;
  employmentStatus: string;
  creditReferences: string;
  residenceType?: string; // Added residenceType property (optional)
}

const initialFormData: FormData = {
  name: "",
  age: 0,
  company: "",
  sex: "",
  blockStreet: "",
  zonePurok: "",
  barangay: "",
  municipality: "",
  province: "",
  lengthOfstay: "",
  provincialBlockStreet: "",
  provincialZonePurok: "",
  provincialBarangay: "",
  provincialMunicipality: "",
  provincialProvince: "",
  civilStatus: "",
  relationApplicant: "",
  birthday: new Date(),
  tin: "",
  mobileNo: "",
  presentEmployer: "",
  dateHired: new Date(),
  position: "",
  grossIncome: 0,
  employerAddress: "",
  employmentStatus: "",
  creditReferences: "",
};

function View5() {
  const [coMaker, setCoMaker] = useState<FormData>(initialFormData);
  const [isEditing, setIsEditing] = useState(false);

  const handleCoMakerChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCoMaker({ ...coMaker, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with Co-Maker:", coMaker);
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
            links={[
              { text: "Employment & Payment Details Form", link: "/4ViewEmployment" },
            ]}
            active="Co-Maker & Employment Details"/>

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
                              step === 1 ||
                              step === 2 ||
                              step === 3 ||
                              step === 4 ||
                              step === 5
                                ? "bg-gray-500 text-white"
                                : "border border-black text-black"
                            }`}
                          >
                            {step}
                          </div>
                          <p
                            className={`text-center text-black text-xs mt-1 px-2 py-1 rounded-lg shadow-sm ${
                              step === 1 ||
                              step === 2 ||
                              step === 3 ||
                              step === 4 ||
                              step === 5
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
                    <div className="co-maker-section border p-4 mb-4">
                      <h4 className="text-lg font-semibold border p-2 w-1/2">Co-Maker Information</h4>
                      <hr className="mt-2 mb-4" />

                      {/* Co-Maker Information */}
                      <div className="mb-4">
                        <h6 className="text-lg font-semibold">
                          Co-Maker Information(First/Middle/Last)
                        </h6>
                        <div className="grid grid-cols-10 md:grid-cols-4 gap-4">
                          {[
                            ["Name", "name", "bi bi-person-fill"],
                            ["Age", "age", "bi bi-calendar", "number"],
                          ].map(([label, name, icon, type = "text"]) => (
                            <div key={name} className="relative">
                              <label
                                className="block font-medium mb-1"
                                htmlFor={name}
                              >
                                {label}
                              </label>
                              <div className="relative">
                                <input
                                  type={type}
                                  id={name}
                                  name={name}
                                  value={coMaker[name as keyof FormData] as string}
                                  onChange={handleCoMakerChange}
                                  className="ti-form-input rounded-sm ps-11 focus:z-10"
                                  disabled={!isEditing}
                                />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                  <i className={icon}></i>
                                </div>
                              </div>
                            </div>
                          ))}
                          {[["Sex", "sex", ["Male", "Female"]]].map(
                            ([label, name, options]) => (
                              <div key={String(name)}>
                                <label className="block font-medium mb-1">
                                  {label}
                                </label>
                                <select
                                  id={String(name)}
                                  name={String(name)}
                                  value={coMaker[name as keyof FormData] as string}
                                  onChange={handleCoMakerChange}
                                  className="ti-form-input rounded-sm border border-gray-400 focus:z-10"
                                  disabled={!isEditing}
                                >
                                  <option value="">Select {label}</option>
                                  {(options as string[]).map(
                                    (option: string, index: number) => (
                                      <option key={index} value={option}>
                                        {option}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Present Address */}
                      <div className="mb-4">
                        <h6 className="text-lg font-semibold">Present Address</h6>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          {[
                            ["Block/Street", "blockStreet", "bi bi-house-fill"],
                            ["Zone/Purok", "zonePurok", "bi bi-diagram-3-fill"],
                            ["Barangay", "barangay", "bi bi-geo-alt-fill"],
                            ["Municipality/City", "municipality", "bi bi-building-fill"],
                            ["Province", "province", "bi bi-geo-fill"],
                            ["Length of Stay", "lengthOfstay", "bi bi-clock-fill"],
                          ].map(([label, name, icon, type = "text"]) => (
                            <div key={name} className="relative">
                              <label
                                className="block font-medium mb-1"
                                htmlFor={name}
                              >
                                {label}
                              </label>
                              <div className="relative">
                                <input
                                  type={type}
                                  id={name}
                                  name={name}
                                  value={coMaker[name as keyof FormData] as string}
                                  onChange={handleCoMakerChange}
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

                      {/* Provincial Address */}
                      <div className="mb-4">
                        <h6 className="text-lg font-semibold">Provincial Address</h6>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          {[
                            [
                              "Block/Street",
                              "provincialBlockStreet",
                              "bi bi-house-fill",
                            ],
                            [
                              "Zone/Purok",
                              "provincialZonePurok",
                              "bi bi-diagram-3-fill",
                            ],
                            [
                              "Barangay",
                              "provincialBarangay",
                              "bi bi-geo-alt-fill",
                            ],
                            [
                              "Municipality/City",
                              "provincialMunicipality",
                              "bi bi-building-fill",
                            ],
                            ["Province", "provincialProvince", "bi bi-geo-fill"],
                          ].map(([label, name, icon, type = "text"]) => (
                            <div key={name} className="relative">
                              <label
                                className="block font-medium mb-1"
                                htmlFor={name}
                              >
                                {label}
                              </label>
                              <div className="relative">
                                <input
                                  type={type}
                                  id={name}
                                  name={name}
                                  value={coMaker[name as keyof FormData] as string}
                                  onChange={handleCoMakerChange}
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

                      {/* Residence Type */}
                      <div className="p-3 rounded-md bg-gray-100 border w-1/2 mb-4">
                        <h6 className="text-lg font-semibold mb-1">Residence</h6>
                        <div className="flex flex-wrap gap-4">
                          {[
                            { label: "Owned", value: "owned" },
                            { label: "Rented", value: "rented" },
                            { label: "Mortgaged", value: "mortgaged" },
                          ].map(({ label, value }) => (
                            <div
                              key={value}
                              className="flex items-center border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-200"
                            >
                              <input
                                type="radio"
                                id={value}
                                name="residenceType"
                                value={value}
                                checked={coMaker["residenceType" as keyof FormData] === value}
                                onChange={handleCoMakerChange}
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

                      {/* Civil Status */}
                      <div className="mb-4">
                        <h6 className="text-lg font-semibold">Civil Status</h6>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          {[
                            [
                              "Civil Status",
                              "civilStatus",
                              ["Single", "Married", "Separated", "Widowed"],
                            ],
                          ].map(([label, name, options]) => (
                            <div key={String(name)}>
                              <label className="block font-medium mb-1">
                                {label}
                              </label>
                              <select
                                id={String(name)}
                                name={String(name)}
                                value={coMaker[name as keyof FormData] as string}
                                onChange={handleCoMakerChange}
                                className="ti-form-input rounded-sm border border-gray-400 focus:z-10"
                                disabled={!isEditing}
                              >
                                <option value="">Select {label}</option>
                                {(options as string[]).map(
                                  (option: string, index: number) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div className="mt-4 mb-4">
                        <h6 className="text-lg font-semibold">Additional Information</h6>
                        <hr className="mt-1 mb-1" />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          {[
                            [
                              "Relationship w/ Applicant",
                              "relationApplicant",
                              "bi bi-person-fill",
                            ],
                            ["Birthday", "birthday", "bi bi-diagram-3-fill", "date"],
                            ["TIN", "tin", "bi bi-geo-alt-fill"],
                            ["Mobile No.", "mobileNo", "bi bi-phone-fill"],
                            ["Present Employer", "presentEmployer", "bi bi-geo-fill"],
                            [
                              "Date Hired",
                              "dateHired",
                              "bi bi-clock-fill",
                              "date",
                            ],
                            ["Position", "position", "bi bi-house-fill"],
                            ["Gross Income", "grossIncome", "bi bi-diagram-3-fill"],
                            [
                              "Employer Address",
                              "employerAddress",
                              "bi bi-diagram-3-fill",
                            ],
                            [
                              "Employment Status",
                              "employmentStatus",
                              "bi bi-diagram-3-fill",
                            ],
                          ].map(([label, name, icon, type = "text"]) => (
                            <div key={name} className="relative">
                              <label
                                className="block font-medium mb-1"
                                htmlFor={name}
                              >
                                {label}
                              </label>
                              <div className="relative">
                                <input
                                  type={type}
                                  id={name}
                                  name={name}
                                  value={coMaker[name as keyof FormData] as string}
                                  onChange={handleCoMakerChange}
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

                      {/* Credit References */}
                      <div className="mb-4">
                        <h6 className="text-lg font-semibold">Credit References</h6>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                          {[
                            [
                              "(Installment/Banking Institutions)",
                              "creditReferences",
                              "bi bi-person-fill",
                            ],
                          ].map(([label, name, icon, type = "text"]) => (
                            <div key={name} className="relative">
                              <label
                                className="block font-medium mb-1"
                                htmlFor={name}
                              >
                                {label}
                              </label>
                              <div className="relative">
                                <input
                                  type={type}
                                  id={name}
                                  name={name}
                                  value={coMaker[name as keyof FormData] as string}
                                  onChange={handleCoMakerChange}
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
                    </div>

                    {/* Form Action Buttons */}
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
                        to="/6ViewCreditInquiry"
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
                        onClick={() => window.scrollTo({ top: 1, behavior: "smooth" })}
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
export default View5;