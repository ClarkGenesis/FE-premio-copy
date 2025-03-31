import Breadcrumb from "../../../components/user-breadcrums"
import Header from "../../../layouts/User-Layouts/user-header"
import Sidemenu from "../../../layouts/User-Layouts/user-sidemenu"
import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";


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
function Apply6() {
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
                        links={[{ text: "Employment & Payment Details Form", link: "/form5" }]}
                        active="Co-Maker & Employment Details"/>
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
                                                        step === 1 || step === 2 || step === 3 || step === 4 || step === 5 || step === 6
                                                        ? "bg-green-500 text-white"
                                                        : "border border-black text-black"
                                                    }`}
                                                    >
                                                    {step}
                                                </div>
                                                <p
                                                    className={`text-center text-black text-xs mt-1 px-2 py-1 rounded-lg shadow-sm ${
                                                        step === 1 || step === 2 || step === 3 || step === 4 || step === 5 || step === 6
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
                                        {/* Co-Maker Information Section */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Co-Maker Information</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                ["Name (First/Middle/Last)", "coMakerName", "bi bi-person-circle"],
                                                ["Age", "coMakerAge", "bi bi-calendar2-week"],
                                                ["Sex", "coMakerSex", "bi bi-gender-ambiguous"],
                                                ["Relationship w/ Applicant", "coMakerRelationship", "bi bi-heart"],
                                                ["Birthday (mm/dd/yyyy)", "coMakerBirthday", "bi bi-gift", "date"],
                                                ["TIN", "coMakerTIN", "bi bi-file-earmark-text"],
                                                ["Mobile No.", "coMakerMobileNo", "bi bi-phone"],
                                                ["Present Address", "coMakerPresentAddress", "bi bi-geo-alt"],
                                                ["Provincial Address", "coMakerProvincialAddress", "bi bi-map"],
                                                ["Length of Stay", "coMakerLengthOfStay", "bi bi-clock-history"]
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

                                        {/* Employment Details Section */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Employment Details</h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                ["Present Employer", "coMakerEmployer", "bi bi-building"],
                                                ["Date Hired", "coMakerDateHired", "bi bi-calendar-check", "date"],
                                                ["Position", "coMakerPosition", "bi bi-person-badge"],
                                                ["Gross Income", "coMakerIncome", "bi bi-cash"],
                                                ["Employer’s Address", "coMakerEmployerAddress", "bi bi-geo-alt"]
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
                                            <div className="mt-4">
                                            <h4 className="text-md font-semibold">Employment Status</h4>
                                            <div className="flex flex-wrap gap-4 mt-2">
                                                {[
                                                { label: "Contractual", value: "contractual" },
                                                { label: "Probationary", value: "probationary" },
                                                { label: "Regular", value: "regular" }
                                                ].map(({ label, value }) => (
                                                <div key={value} className="flex items-center border border-gray-400 rounded-md px-4 py-2">
                                                    <input
                                                    type="radio"
                                                    id={value}
                                                    name="coMakerEmploymentStatus"
                                                    value={value}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                    />
                                                    <label htmlFor={value} className="text-sm font-medium">{label}</label>
                                                </div>
                                                ))}
                                            </div>
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
                                            <Link to="/pending" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                                            <i className="bi bi-check-square"></i>
                                            <span className="px-3">Submit</span>
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
export default Apply6;