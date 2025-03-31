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

function View2() {
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
                        title="Credit Application Form"
                        links={[{ text: "Personal Information", link: "/aform" }]}
                        active="Contact, Spouse Information"
                    />
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
                                                    <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${step === 1 || step === 2 ? "bg-green-500 text-white" : "border border-black text-black"}`}>
                                                        {step}
                                                    </div>
                                                    <p className={`text-center text-black text-xs mt-1 px-2 py-1 rounded-lg shadow-sm ${step === 1 || step === 2 ? "bg-green-500 text-white" : "bg-gray-300"}`}>
                                                        {label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <h3 className="text-lg font-semibold">Contact Information</h3>
                                        <hr className="mt-3 mb-4" />
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                            {[
                                                ["Home Phone Number", "homePhoneNumber", "bi bi-telephone"],
                                                ["Office Phone Number", "officePhoneNumber", "bi bi-telephone"],
                                                ["Mobile Phone Number", "mobilePhoneNumber", "bi bi-phone"],
                                                ["Email Address", "emailAddress", "bi bi-envelope"],
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
                                        <h3 className="text-lg font-semibold mt-6">Spouse Information</h3>
                                        <hr className="mt-3 mb-4" />
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                            {[
                                                ["Spouse First Name", "spouseFirstName", "bi bi-person"],
                                                ["Spouse Middle Name", "spouseMiddleName", "bi bi-person"],
                                                ["Spouse Last Name", "spouseLastName", "bi bi-person"],
                                                ["Spouse Age", "spouseAge", "bi bi-person-fill"],
                                                ["Number of Dependents", "numberOfDependents", "bi bi-people"],
                                                ["Provincial Address", "provincialAddress", "bi bi-geo-alt"],
                                                ["Spouse Mobile Number", "spouseMobileNumber", "bi bi-phone"],
                                                ["Spouse Email Address", "spouseEmailAddress", "bi bi-envelope"],
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
                                        <div className="mt-4 flex justify-end gap-4">
                                            <button type="reset" className="bg-gray-300 px-4 py-2 rounded" onClick={() => setFormData(initialFormData)}>Reset</button>
                                            <Link to="/aform3" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
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

export default View2;
