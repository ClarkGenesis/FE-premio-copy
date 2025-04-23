import Breadcrumb from "../../../components/UserBreadcrums";
import Header from "../../../layouts/UserLayouts/UserHeader";
import { Link } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";

interface Dependent {
    name: string;
    age: string;
    gradeOccupation: string;
    schoolCompany: string;
}

interface FormData {
    homePhoneNumber: string;
    officePhoneNumber: string;
    mobilePhoneNumber: string;
    emailAddress: string;
    nameSpouse: string;
    age: string;
    numberDependents: string;
    provincialSpouse: string;
    mobileNo: string;
    email: string;
    applicantFatherName?: string;
    applicantMotherName?: string;
    applicantOccupation?: string;
    applicantMobileNo?: string;
    applicantAddress?: string;
    spouseFatherName?: string;
    spouseMotherName?: string;
    spouseOccupation?: string;
    spouseMobileNo?: string;
    spouseAddress?: string;

}

const initialFormData: FormData = {
    homePhoneNumber: "",
    officePhoneNumber: "",
    mobilePhoneNumber: "", 
    emailAddress: "",
    nameSpouse: "",
    age: "", 
    numberDependents: "",
    provincialSpouse: "",
    mobileNo: "",
    email: "",
    applicantFatherName: "",
    applicantMotherName: "",
    applicantOccupation: "",
    applicantMobileNo: "",
    applicantAddress: "",
    spouseFatherName: "",
    spouseMotherName: "",
    spouseOccupation: "",
    spouseMobileNo: "",
    spouseAddress: "",
};

function Apply2() {
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    const [dependents, setDependents] = useState<Dependent[]>([
        { name: "", age: "", gradeOccupation: "", schoolCompany: "" },
    ]);

    const handleDependentChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const list = [...dependents];
        list[index][name as keyof Dependent] = value;

        setDependents(list);
    };

    const handleAddDependent = () => {
        setDependents((prevDependents) => [
            ...prevDependents,
            { name: "", age: "", gradeOccupation: "", schoolCompany: "" },
        ]);
    };

    const handleRemoveDependent = (index: number) => {
        const list = [...dependents];
        list.splice(index, 1);
        setDependents(list);
    };

    return (
        <>
            <Header />
            <div className="main-content">
                <div className="container-fluid">
                    <Breadcrumb
                        title="Credit Application Form"
                        links={[{ text: "Personal Information", link: "/1FormAddressInfo" }]}
                        active="Contact, Spouse Information"
                    />
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 col-span-12">
                            <div className="box overflow-hidden main-content-card">
                                <div className="box-body p-5">
                                    <div className="col-span-12 mb-6">
                                        {/* Forms Layouts 1 - 6*/} 
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
                                        {/* Contanct informt*/} 
                                        <h3 className="text-lg font-semibold">Contact Information</h3>
                                        <hr className="mt-3 mb-4" />
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                            {[
                                                ["Home Phone Number", "homePhoneNumber", "bi bi-telephone"],
                                                ["Office Phone Number", "officePhoneNumber", "bi bi-telephone"],
                                                ["Mobile Phone Number", "mobilePhoneNumber", "bi bi-phone"],
                                                ["Email Address", "emailAddress", "bi bi-envelope"],
                                                ["Name of Spouse", "nameSpouse", "bi bi-people-fill"],
                                                ["Age", "age", "bi bi-calendar"],
                                                ["Number of Dependents", "numberDependents", "bi bi-people"],
                                                ["Provincial Spouse", "provincialSpouse", "bi bi-geo-alt"],
                                                ["Mobile No", "mobileNo", "bi bi-phone"],
                                                ["Email Address", "email", "bi bi-envelope"],

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

                                        <hr className="mt-3 mb-4" />
                                        <div>
                                            {dependents.map((dependent, index) => (
                                                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                                                    <div className="col-span-1 md:col-span-4">
                                                        <h5 className="font-semibold">Dependents Information {index + 1}</h5>
                                                    </div>
                                                    <div className="relative">
                                                        <label className="block font-medium mb-1" htmlFor={`name-${index}`}>
                                                            Name of Dependents/Children (First/Middle/Last)
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id={`name-${index}`}
                                                            name="name"
                                                            value={dependent.name}
                                                            onChange={(event) => handleDependentChange(index, event)}
                                                            className="ti-form-input rounded-sm ps-11 focus:z-10"
                                                            placeholder="Enter Name"
                                                        />
                                                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                                            <i className="bi bi-person-fill mt-6 "></i>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <label className="block font-medium mb-1" htmlFor={`age-${index}`}>
                                                            Age
                                                        </label>
                                                        <input
                                                            type="number"
                                                            id={`age-${index}`}
                                                            name="age"
                                                            value={dependent.age}
                                                            onChange={(event) => handleDependentChange(index, event)}
                                                            className="ti-form-input  rounded-sm ps-11 focus:z-10 "
                                                            placeholder="Enter Age"
                                                        />
                                                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                                            <i className="bi bi-hourglass-split mt-6"></i>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <label className="block font-medium mb-1" htmlFor={`gradeOccupation-${index}`}>
                                                            Grade/Occupation
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id={`gradeOccupation-${index}`}
                                                            name="gradeOccupation"
                                                            value={dependent.gradeOccupation}
                                                            onChange={(event) => handleDependentChange(index, event)}
                                                            
                                                            className="ti-form-input rounded-sm ps-11 focus:z-10"
                                                            placeholder="Enter Grade/Occupation"
                                                        />
                                                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                                            <i className="bi bi-briefcase-fill mt-6"></i>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <label className="block font-medium mb-1" htmlFor={`schoolCompany-${index}`}>
                                                            School/Company Employed
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id={`schoolCompany-${index}`}
                                                            name="schoolCompany"
                                                            value={dependent.schoolCompany}
                                                            onChange={(event) => handleDependentChange(index, event)}
                                                            className="ti-form-input rounded-sm ps-11 focus:z-10"
                                                            placeholder="Enter School/Company"
                                                        />
                                                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                                            <i className="bi bi-building mt-6"></i>
                                                        </div>
                                                    </div>
                                                    {dependents.length > 1 && (
                                                        <div className="col-span-1 md:col-span-4">
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveDependent(index)}
                                                                className="bg-red-500 text-white px-4 py-2 rounded"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                            <button type="button" onClick={handleAddDependent} className="bg-gray-500 text-white px-4 py-2 rounded">
                                                Add Dependent
                                            </button>
                                            <hr className="mt-3 mb-4" />
                                            <h3 className="text-lg font-semibold">Applicant's Parents (First/Middle/Last)</h3>
                                            <hr className="mt-3 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                                                {[
                                                    ["Name of Father", "applicantFatherName", "bi bi-person-fill"],
                                                    ["Name of Mother", "applicantMotherName", "bi bi-person-fill"],
                                                    ["Occupation", "applicantOccupation", "bi bi-briefcase-fill"],
                                                    ["Mobile No.", "applicantMobileNo", "bi bi-telephone-fill"],
                                                    ["Address", "applicantAddress", "bi bi-house-door-fill"],
                                                ].map(([label, name, icon, type = "text"]) => (
                                                    <div key={name} className="relative">
                                                        <label className="block font-medium mb-1" htmlFor={name}>{label}</label>
                                                        <div className="relative">
                                                            <input
                                                                type={type}
                                                                id={name}
                                                                name={name}
                                                                value={formData[name as keyof FormData] || ""}
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

                                            <hr className="mt-3 mb-4" />
                                            <h3 className="text-lg font-semibold">Spouse's Parents (First/Middle/Last)</h3>
                                            <hr className="mt-3 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                                                {[
                                                    ["Name of Father", "spouseFatherName", "bi bi-person-fill"],
                                                    ["Name of Mother", "spouseMotherName", "bi bi-person-fill"],
                                                    ["Occupation", "spouseOccupation", "bi bi-briefcase-fill"],
                                                    ["Mobile No.", "spouseMobileNo", "bi bi-telephone-fill"],
                                                    ["Address", "spouseAddress", "bi bi-house-door-fill"],
                                                ].map(([label, name, icon, type = "text"]) => (
                                                    <div key={name} className="relative">
                                                        <label className="block font-medium mb-1" htmlFor={name}>{label}</label>
                                                        <div className="relative">
                                                            <input
                                                                type={type}
                                                                id={name}
                                                                name={name}
                                                                value={formData[name as keyof FormData] || ""}
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
                                            <button type="reset" className="bg-gray-300 px-4 py-2 rounded" onClick={() => setFormData(initialFormData)}>Reset</button>
                                            <Link to="/3FormCreditInformation" type="submit" className="bg-green-500 text-white px-4 py-2 rounded flex items-center" onClick={() => window.scrollTo({ top: 1})}>
                                                <i className="bi bi-arrow-right"></i>
                                                <span className="px-3">Next </span>
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

export default Apply2;