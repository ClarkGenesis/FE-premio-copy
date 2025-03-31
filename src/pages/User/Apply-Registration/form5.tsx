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
function Apply5() {
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
                        links={[{ text: "Credit & Reference Information", link: "/form4" }]}
                        active="Employment Details and References"/>
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
                                                        step === 1 || step === 2 || step === 3 || step === 4 || step === 5
                                                        ? "bg-green-500 text-white"
                                                        : "border border-black text-black"
                                                    }`}
                                                    >
                                                    {step}
                                                </div>
                                                <p
                                                    className={`text-center text-black text-xs mt-1 px-2 py-1 rounded-lg shadow-sm ${
                                                        step === 1 || step === 2 || step === 3 || step === 4 || step === 5
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
                                        {/* Applicant’s Employer/Business Section */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Applicant’s Employer/Business Information</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                ["Employer/Business Name", "applicantEmployerBusinessName", "bi bi-building"],
                                                ["Business Type", "applicantBusinessType", "bi bi-briefcase-fill"],
                                                ["Position", "applicantPosition", "bi bi-person-workspace"],
                                                ["Tel No", "applicantTelNo", "bi bi-telephone"],
                                                ["Date Started", "applicantDateStarted", "bi bi-calendar-event", "date"],
                                                ["Name of Immediate Superior (First/Middle/Last)", "applicantSuperiorName", "bi bi-person-fill"],
                                                ["Mobile No.", "applicantMobileNo", "bi bi-phone"],
                                                ["Salary/Gross Income", "applicantSalary", "bi bi-cash"]
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

                                        {/* Spouse’s Employer/Business Section */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Spouse’s Employer/Business Information</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                ["Employer/Business Name", "spouseEmployerBusinessName", "bi bi-building"],
                                                ["Business Type", "spouseBusinessType", "bi bi-briefcase-fill"],
                                                ["Position", "spousePosition", "bi bi-person-workspace"],
                                                ["Tel No", "spouseTelNo", "bi bi-telephone"],
                                                ["Date Started", "spouseDateStarted", "bi bi-calendar-event", "date"],
                                                ["Name of Immediate Superior (First/Middle/Last)", "spouseSuperiorName", "bi bi-person-fill"],
                                                ["Mobile No.", "spouseMobileNo", "bi bi-phone"],
                                                ["Salary/Gross Income", "spouseSalary", "bi bi-cash"],
                                                ["Address", "address", "bi bi-geo-alt"]
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

                                        {/* Unit to Be Used Section */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Unit To Be Used For</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="flex flex-wrap gap-4">
                                            {[
                                                { label: "Personal Use", value: "personal-use", icon: "bi bi-person" },
                                                { label: "Business Use", value: "business-use", icon: "bi bi-briefcase" },
                                                { label: "Gift", value: "gift", icon: "bi bi-gift" },
                                                { label: "Used by Relative / Friend", value: "used-by-relative", icon: "bi bi-people" }
                                            ].map(({ label, value, icon }) => (
                                                <div key={value} className="flex items-center border border-gray-400 rounded-md px-4 py-2">
                                                <input
                                                    type="radio"
                                                    id={value}
                                                    name="unitToBeUsedFor"
                                                    value={value}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                />
                                                <i className={`${icon} mr-2`}></i>
                                                <label htmlFor={value} className="text-sm font-medium">{label}</label>
                                                </div>
                                            ))}
                                            </div>
                                        </div>

                                        {/* Mode of Payment Section */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Mode of Payment</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="flex flex-wrap gap-4">
                                            {[
                                                { label: "Post Dated Checks", value: "post-dated-checks", icon: "bi bi-calendar-check" },
                                                { label: "Cash Paid to Office", value: "cash-office", icon: "bi bi-cash" },
                                                { label: "Cash for Collection", value: "cash-collection", icon: "bi bi-box" },
                                                { label: "Credit Card", value: "credit-card", icon: "bi bi-credit-card" }
                                            ].map(({ label, value, icon }) => (
                                                <div key={value} className="flex items-center border border-gray-400 rounded-md px-4 py-2">
                                                <input
                                                    type="radio"
                                                    id={value}
                                                    name="modeOfPayment"
                                                    value={value}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                />
                                                <i className={`${icon} mr-2`}></i>
                                                <label htmlFor={value} className="text-sm font-medium">{label}</label>
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
                                            <Link to="/form6" className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
export default Apply5;