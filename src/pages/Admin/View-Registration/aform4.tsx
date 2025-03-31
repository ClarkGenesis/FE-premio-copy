import Breadcrumb from "../../../components/admin-breadcrums"
import Header from "../../../layouts/Admin-Layouts/admin-header"
import Sidemenu from "../../../layouts/Admin-Layouts/admin-sidemenu"
import { Link } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";


interface FormData {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string;
    region: string;
    province: string;
    city: string;
    barangay: string;
    postalCode: string;
    photo?: File | null;
}
const initialFormData: FormData = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    region: "",
    province: "",
    city: "",
    barangay: "",
    postalCode: "",
    photo: null,
};
function View4() {
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
            <Sidemenu />
            <div className="main-content app-content">
                <div className="container-fluid">
                <Breadcrumb
                        title="Credit Application Form  "
                        links={[{ text: "Parental & Credit Information", link: "/aform3" }]}
                        active="Credit & Reference Information"/>
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 col-span-12">
                            <div className="box overflow-hidden main-content-card">
                                <div className="box-body p-5">  
                                <div className="col-span-12 mb-6">
                                    <div className="flex items-center justify-between relative">
                                        {[
                                        { step: 1, label: "Personal Information" },
                                        { step: 2, label: "Contact, Spouse Information" },
                                        { step: 3, label: "Parental & Credit Information" },
                                        { step: 4, label: "Credit & Reference Information" },
                                        { step: 5, label: "Employment & Payment Details Form" },
                                        { step: 6, label: "Co-Maker & Employment Details" },
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
                                        {/* Credit References Section */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Credit References</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                                {[ 
                                                    ["Store/Bank Name", "storeBankName", "bi bi-bank"],
                                                    ["Loan Amount", "loanAmount", "bi bi-cash"],
                                                    ["Term", "loanTerm", "bi bi-clock-history"],
                                                    ["Date", "loanDate", "bi bi-calendar-event", "date"],
                                                    ["Balance", "loanBalance", "bi bi-graph-up"]
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

                                        {/* Personal References Section */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Personal References</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                                {[ 
                                                    ["Name", "referenceName", "bi bi-person-circle"],
                                                    ["Relationship", "referenceRelationship", "bi bi-heart"],
                                                    ["Telephone Number", "referenceTelephone", "bi bi-telephone"],
                                                    ["Address", "referenceAddress", "bi bi-geo-alt"]
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

                                        {/* Source of Income Section */}
                                        <h3 className="text-lg font-semibold">Source of Income</h3>
                                        <hr className="mt-2 mb-4" />
                                        <div className="border border-gray-400 p-4 rounded-sm">
                                            <div className="flex flex-wrap gap-4">
                                                {[ 
                                                    { label: "Self-Employed", value: "self-employed" },
                                                    { label: "Employed", value: "employed" },
                                                    { label: "Allotment", value: "allotment" },
                                                    { label: "Other", value: "other" }
                                                ].map(({ label, value }) => (
                                                    <div key={value} className="flex items-center border border-gray-400 rounded-md px-4 py-2">
                                                        <input
                                                            type="radio"
                                                            id={value}
                                                            name="sourceOfIncome"
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
                                            <Link to="/aform5" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
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
export default View4;