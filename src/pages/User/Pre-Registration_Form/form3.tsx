import Breadcrumb from "../../../components/user-breadcrums"
import Header from "../../../layouts/User-Layouts/user-header"
import Sidemenu from "../../../layouts/User-Layouts/user-sidemenu"
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
function Apply3() {
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
                        links={[{ text: "Contact, Spouse Information", link: "/form2" }]}
                        active="Parental & Credit Information"/>
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
                                                        step === 1 || step === 2 || step === 3
                                                        ? "bg-green-500 text-white"
                                                        : "border border-black text-black"
                                                    }`}
                                                    >
                                                    {step}
                                                </div>
                                                <p
                                                    className={`text-center text-black text-xs mt-1 px-2 py-1 rounded-lg shadow-sm ${
                                                        step === 1 || step === 2 || step === 3
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
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Applicant's Parents Information</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                                {[ 
                                                    ["Name of Father (First)", "fatherFirstName", "bi bi-person"],
                                                    ["Name of Father (Middle)", "fatherMiddleName", "bi bi-person"],
                                                    ["Name of Father (Last)", "fatherLastName", "bi bi-person"],
                                                    ["Name of Mother (First)", "motherFirstName", "bi bi-person"],
                                                    ["Name of Mother (Middle)", "motherMiddleName", "bi bi-person"],
                                                    ["Name of Mother (Last)", "motherLastName", "bi bi-person"],
                                                    ["Occupation", "parentsOccupation", "bi bi-briefcase"],
                                                    ["Mobile Number", "parentsMobileNumber", "bi bi-phone"],
                                                    ["Address", "parentsAddress", "bi bi-house-door"]
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

                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Spouse's Parents Information</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                                {[ 
                                                    ["Name of Father-in-law (First)", "fatherInLawFirstName", "bi bi-person"],
                                                    ["Name of Father-in-law (Middle)", "fatherInLawMiddleName", "bi bi-person"],
                                                    ["Name of Father-in-law (Last)", "fatherInLawLastName", "bi bi-person"],
                                                    ["Name of Mother-in-law (First)", "motherInLawFirstName", "bi bi-person"],
                                                    ["Name of Mother-in-law (Middle)", "motherInLawMiddleName", "bi bi-person"],
                                                    ["Name of Mother-in-law (Last)", "motherInLawLastName", "bi bi-person"],
                                                    ["Occupation", "spouseParentsOccupation", "bi bi-briefcase"],
                                                    ["Mobile Number", "spouseParentsMobileNumber", "bi bi-phone"],
                                                    ["Address", "spouseParentsAddress", "bi bi-house-door"]
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

                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Credit References</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                                {[ 
                                                    ["Store/Bank Name", "storeBankName", "bi bi-building"],
                                                    ["Item/Loan Amount", "loanAmount", "bi bi-currency-dollar"],
                                                    ["Term", "loanTerm", "bi bi-clock"],
                                                    ["Date", "loanDate", "bi bi-calendar", "date"],
                                                    ["Balance", "loanBalance", "bi bi-calculator"]
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

                                        <div className="mt-4 flex justify-end gap-4">
                                            <button
                                                type="reset"
                                                className="bg-gray-300 px-4 py-2 rounded"
                                                onClick={() => setFormData(initialFormData)}
                                            >
                                                Reset
                                            </button>
                                            <Link to="/form4" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
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
export default Apply3;