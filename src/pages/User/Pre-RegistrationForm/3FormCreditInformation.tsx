import Breadcrumb from "../../../components/UserBreadcrums"
import Header from "../../../layouts/UserLayouts/UserHeader"
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
    allotment:string;
    providedBy:string;

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
    allotment:"",
    providedBy:""
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
            <div className="main-content">
                <div className="container-fluid">
                <Breadcrumb
                        title="Credit Application Form  "
                        links={[{ text: "Contact, Spouse Information", link: "/2FormFamilyProfile" }]}
                        active="Parental & Credit Information"/>
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
                                            <h3 className="text-lg font-semibold">CERDIT REFERENCES(Preferably Purchase/Cash Loan)</h3>
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
                                            <h3 className="text-lg font-semibold">PERSONAL REFERENCES </h3>
                                            <hr className="mt-2 mb-4" />
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                                {[ 
                                                    ["NAME", "name", "bi bi-person", "text"],
                                                    ["RELATIONSHIP", "relationship", "bi bi-person", "text"],
                                                    ["TEL NO", "telno", "bi bi-person", "text"],
                                                    ["ADDRESS", "address", "bi bi-person", "date"],

                                                ].map(([label, name, icon, type]) => (
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


                                        <div className="p-3 rounded-md bg-gray-100 border w-1/2">
                                            <h3 className="text-lg font-semibold mb-1">Source of Income</h3>
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
                                                        />
                                                        <label htmlFor={value} className="text-sm font-medium">
                                                            {label}
                                                        </label>
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
                                            <Link to="/4FormEmployment" className="bg-green-500 text-white px-4 py-2 rounded flex items-center" onClick={() => window.scrollTo({ top: 1})}>
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