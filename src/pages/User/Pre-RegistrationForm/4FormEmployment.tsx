import Breadcrumb from "../../../components/UserBreadcrums"
import Header from "../../../layouts/UserLayouts/UserHeader"
import { Link } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";


interface FormData {
    applicantEmployer: string;
    position: string;
    blockStreet: string;
    zonePurok: string;
    barangay: string;
    municipalityCity    : string;
    province: string;
    telno: string;
    dateStarted: Date;
    nameImmediate: string;
    mobileNo: string;
    salaryGross: number;
    spouseEmployer: string;
    spousePosition: string;
    spouseBlockStreet: string;
    spouseZonePurok: string;
    spouseBarangay: string;
    spouseMunicipality: string;
    spouseProvince: string;
    spouseTelno: string;
    spouseDateStarted: string;
    spouseNameImmediate: string;
    spouseMobileNo: string;
    spouseSalaryGross: number;

}
const initialFormData: FormData = {
    applicantEmployer: "",
    position: "",
    blockStreet: "",
    zonePurok: "",
    barangay: "",
    municipalityCity: "",
    province: "",
    telno: "",
    dateStarted: new Date(),
    nameImmediate: "",
    mobileNo: "",
    salaryGross: 0,
    spouseEmployer: "",
    spousePosition: "",
    spouseBlockStreet: "",
    spouseZonePurok: "",
    spouseBarangay: "",
    spouseMunicipality: "",
    spouseProvince: "",
    spouseTelno: "",
    spouseDateStarted: "",
    spouseNameImmediate: "",
    spouseMobileNo: "",
    spouseSalaryGross: 0,
};
function Apply4() {
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };
    return (
        <>
            <Header />
            <div className="main-content">
                <div className="container-fluid">
                <Breadcrumb
                        title="Credit Application Form  "
                        links={[{ text: "Parental & Credit Information", link: "/3FormCreditInformation" }]}
                        active="Credit & Reference Information"/>
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
                                                        step === 1 || step === 2 || step === 3 || step === 4
                                                        ? "bg-green-500 text-white"
                                                        : "border border-black text-black"
                                                    }`}
                                                    >
                                                    {step}
                                                </div>
                                                <p
                                                    className={`text-center text-black text-xs mt-1 px-2 py-1 rounded-lg shadow-sm ${
                                                        step === 1 || step === 2 || step === 3 || step === 4
                                                        ? "bg-green-500 text-white"
                                                        : "bg-gray-300"
                                                        }`}>
                                                    {label}
                                                </p>
                                            </div>
                                            ))}
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                      {/* Personal References Section */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Applicant Employer Information</h3>
                                            <hr className="mt-4 mb-3" />
                                            <div className="grid grid-cols-5 md:grid-cols-4 gap-2">
                                                {[ 
                                                    ["Applicant's Employer/Business Name/Business Type", "applicantEmployer", "bi bi-person-circle"],
                                                    ["Position", "position", "bi bi-geo-alt"],
                                                    ["Block Street", "blockStreet", "bi bi-geo-alt"],
                                                    ["Zone/Purok", "zonePurok", "bi bi-geo-alt"],
                                                    ["Barangay", "barangay", "bi bi-geo-alt"],
                                                    ["Municipality/City", "municipalityCity", "bi bi-geo-alt"],
                                                    ["Province", "province", "bi bi-geo-alt"],
                                                    ["Tel. No.", "telno", "bi bi-telephone"],
                                                    ["Date Started", "dateStarted", "bi bi-calendar",],
                                                    ["Name of Immediate Supervisor", "nameImmediate", "bi bi-person-circle"],
                                                    ["Mobile No.", "mobileNo", "bi bi-telephone"],
                                                    ["Salary Gross", "salaryGross", "bi bi-currency-dollar", "number"]
                                                ].map(([label, name, icon, type = "text"]) => (
                                                    <div key={name} className="relative">
                                                        <label className="block font-medium mb-1" htmlFor={name}>{label}</label>
                                                        <div className="relative">
                                                            <input
                                                                type={type}
                                                                id={name}
                                                                name={name}
                                                                onChange={handleChange}
                                                                className="ti-form-input rounded-sm ps-11 focus:z-10"
                                                                placeholder={`Enter ${label}`}
                                                            />
                                                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                                                <i className={icon}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <hr className="mt-2 mb-4" />
                                            <h3 className="text-lg font-semibold">Spouse Employer Information</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="grid grid-cols-5 md:grid-cols-2 gap-2">
                                                {[ 
                                                    ["Spouse Employer/Business Name/Business Type", "spouseEmployer", "bi bi-person-circle"],
                                                    ["Position", "spousePosition", "bi bi-geo-alt"],
                                                    ["Block Street", "spouseBlockStreet", "bi bi-geo-alt"],
                                                    ["Zone/Purok", "spouseZonePurok", "bi bi-geo-alt"],
                                                    ["Barangay", "spouseBarangay", "bi bi-geo-alt"],
                                                    ["Municipality/City", "spouseMunicipality", "bi bi-geo-alt"],
                                                    ["Province", "spouseProvince", "bi bi-geo-alt"],
                                                    ["Tel. No.", "spouseTelno", "bi bi-telephone"],
                                                    ["Date Started", "spouseDateStarted", "bi bi-calendar","date"],
                                                    ["Name of Immediate Supervisor", "spouseNameImmediate", "bi bi-person-circle"],
                                                    ["Mobile No.", "spouseMobileNo", "bi bi-telephone"],
                                                    ["Salary Gross", "spouseSalaryGross", "bi bi-currency-dollar", "number"]
                                                ].map(([label, name, icon, type = "text"]) => (
                                                    <div key={name} className="relative">
                                                        <label className="block font-medium mb-1" htmlFor={name}>{label}</label>
                                                        <div className="relative">
                                                            <input
                                                                type={type}
                                                                id={name}
                                                                name={name}
                                                                onChange={handleChange}
                                                                className="ti-form-input rounded-sm ps-11 focus:z-10"
                                                                placeholder={`Enter ${label}`}
                                                            />
                                                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                                                <i className={icon}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                    
                                        </div>

                                        {/* UNIT TO BE USED FOR */}
                                        <hr className="mt-2 mb-4" />
                                        <h3 className="text-lg font-semibold">UNIT TO BE USED FOR</h3>
                                        <div className="border border-gray-400 p-4 rounded-sm w-1/2">
                                            <div className="flex flex-wrap gap-4">
                                                {[ 
                                                    { label: "Personal Use", value: "personalUse" },
                                                    { label: "Business Use", value: "businessUse" },
                                                    { label: "Git", value: "git" },
                                                    { label: "Used by Relative/Friend", value: "usedByRelative" },

                                                ].map(({ label, value }) => (
                                                    <div key={value} className="flex items-center border border-gray-400 rounded-md px-4 py-2 hover:bg-gray-300 cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            id={value}
                                                            name="unitToBeUsedFor"
                                                            value={value}
                                                            onChange={handleChange}
                                                            className="mr-2"
                                                        />
                                                        <label htmlFor={value} className="text-sm font-medium">
                                                            {label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* MODE OF PAYMENT */}
                                        <hr className="mt-2 mb-4" />
                                        <h3 className="text-lg font-semibold">MODE OF PAYMENT</h3>
                                        <div className="border border-gray-400 p-4 rounded-sm w-1/2">
                                            <div className="flex flex-wrap gap-4">
                                                {[ 
                                                    { label: "Post Dated Checks", value: "postdatedChecks" },
                                                    { label: "Cash Paid to Office", value: "cashPaidToOffice" },
                                                    { label: "Cash for Colection", value: "cashForColection" },
                                                    { label: "Credit Card", value: "creditCard" },

                                                ].map(({ label, value }) => (
                                                    <div key={value} className="flex items-center border border-gray-400 rounded-md px-4 py-2 hover:bg-gray-300 cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            id={value}
                                                            name="modeOfPayment"
                                                            value={value}
                                                            onChange={handleChange}
                                                            className="mr-2"
                                                        />
                                                        <label htmlFor={value} className="text-sm font-medium">
                                                            {label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Form Action Buttons */}
                                        <div className="mt-4 flex justify-end gap-4">
                                            <button
                                                type="reset"
                                                className="bg-gray-300 px-4 py-2 rounded"
                                                onClick={() => setFormData(initialFormData)}
                                            >
                                                Reset
                                            </button>
                                            <Link to="/5FormCo-Maker" className="bg-green-500 text-white px-4 py-2 rounded flex items-center" onClick={() => window.scrollTo({ top: 1})}>
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
};
export default Apply4;