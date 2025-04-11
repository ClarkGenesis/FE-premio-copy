import Breadcrumb from "../../../components/user-breadcrums"
import Header from "../../../layouts/User-Layouts/user-header"
import Sidemenu from "../../../layouts/User-Layouts/user-sidemenu"
import { Link } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";


interface FormData {
    firstName: string;
    middleName: string;
    lastName: string;
    nb_rb: string;
    sex: string;
    age: number;
    citizenship: string;
    birthdate: Date | null;
    religion: string;
    civil_status: string;
    tin_no: string;
    res_cert_no: string;
    date_issued: Date | null;
    place_issued: string;
    block_street: string;
    zone_purok: string;
    barangay: string;
    municipality_city: string;
    province: string;
    length_of_stay: string;
}
const initialFormData: FormData = {
    firstName: "",
    middleName: "",
    lastName: "",
    nb_rb: "",
    sex: "",
    age: 0,
    citizenship: "",
    birthdate: null,
    religion: "",
    civil_status: "",
    tin_no: "",
    res_cert_no: "",
    date_issued: null,
    place_issued: "",
    block_street: "",
    zone_purok: "",
    barangay: "",
    municipality_city: "",
    province: "",
    length_of_stay: "", 
};
function Apply() {
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
                        active="Personal Information"/>
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
                                                step === 1
                                                ? "bg-green-500 text-white"
                                                : "border border-black text-black"
                                            }`}
                                            >
                                            {step}
                                            </div>
                                        
                                            <p
                                            className={`text-center text-black text-xs mt-1 px-2 py-1 rounded-lg shadow-sm ${
                                                step === 1 ? "bg-green-500 text-white" : "bg-gray-300"
                                            }`}
                                            >
                                            {label}
                                            </p>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4 flex items-start gap-4">
                                        </div>
                                        <hr className="mt-3 mb-4" />
                                            <div className="mb-4 flex items-start gap-4">
                                                <h4 className="text-lg font-semibold">Personal Information</h4>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                                {[
                                                      ["First Name", "firstName", "bi bi-person", "text"],
                                                      ["Middle Name", "middleName", "bi bi-person", "text"],
                                                      ["Last Name", "lastName", "bi bi-person", "text"],
                                                      ["NB or RB", "nb_rb", "bi bi-person", "text"],
                                                      ["Age", "age", "bi bi-person-fill", "number"],
                                                      ["Citizenship", "citizenship", "bi-person-badge", "text"],
                                                      ["Birth Date", "birthdate", "bi bi-calendar", "date"],
                                                      ["Religion", "religion", "bi bi-book", "text"]
                                                ].map(([label, name, icon, type="text"]) => (
                                                    <div key={name} className="relative">
                                                        <label className="block font-medium mb-1" htmlFor={name}>{label}</label>
                                                        <div className="relative">
                                                            <input type={type} id={name} name={name}
                                                                onChange={handleChange}
                                                                className="ti-form-input rounded-sm ps-11 focus:z-10"
                                                                placeholder={` ${label}`} />
                                                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                                                <i className={icon}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}


                                                {[  
                                                    ["Sex", "sex", ["Male", "Female"]],
                                                    ["Civil Status", "civil_status", ["Single", "Married", "Separated", "Widowed"]],
                                                ].map(([label, name, options]) => (
                                                    <div key={String(name)}>
                                                        <label className="block font-medium mb-1">{label}</label>
                                                        <select 
                                                            id={String(name)} 
                                                            name={String(name)} 
                                                            onChange={handleChange} 
                                                            className="ti-form-input rounded-sm border border-gray-400 focus:z-10">
                                                            <option value="">Select {label}</option>
                                                            {(options as string[]).map((option: string, index: number) => (
                                                                <option key={index} value={option}>{option}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    
                                                ))}
                                                {[
                                                    ["TIN No", "tin_no", "bi bi-file-earmark-text", "text"],
                                                    ["Res Cert No", "res_cert_no", "bi bi-card-heading", "text"],
                                                    ["Date Issued", "date_issued", "bi bi-calendar-event", "date"],
                                                    ["Place Issued", "place_issued", "bi bi-geo-alt", "text"]
                                                ].map(([label, name, icon, type="text"]) => (
                                                    <div key={name} className="relative">
                                                        <label className="block font-medium mb-1" htmlFor={name}>{label}</label>
                                                        <div className="relative">
                                                            <input type={type} id={name} name={name}
                                                                onChange={handleChange}
                                                                className="ti-form-input rounded-sm ps-11 focus:z-10"
                                                                placeholder={` ${label}`} />
                                                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                                                <i className={icon}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                        <hr className="mt-3 mb-4" />
                                            <div className="mb-4 flex items-start gap-2">
                                                <h4 className="text-lg font-semibold">Present Address</h4>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                                
                                                {[
                                                      ["Block/Street", "block_street", "bi bi-signpost"],
                                                      ["Zone/Purok", "zone_purok", "bi bi-diagram-3"],
                                                      ["Barangay", "barangay", "bi bi-house-door"],
                                                      ["Municipality/City", "municipality_city", "bi bi-building"],
                                                      ["Province", "province", "bi bi-map"],
                                                      ["Length of Stay", "length_of_stay", "bi bi-clock-history"],
                                                ].map(([label, name, icon, type="text"]) => (
                                                    <div key={name} className="relative">
                                                        <label className="block font-medium mb-1" htmlFor={name}>{label}</label>
                                                        <div className="relative">
                                                            <input type={type} id={name} name={name}
                                                                onChange={handleChange}
                                                                className="ti-form-input rounded-sm ps-11 focus:z-10"
                                                                placeholder={` ${label}`} />
                                                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                                                <i className={icon}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        

                                        <hr className="mt-2 mb-4" />
                                            
                                        <div className="p-3 rounded-md bg-gray-100 border w-3/4">
                                            <h3 className="text-lg font-semibold mb-1">HOME</h3>
                                            <div className="flex flex-wrap gap-4">
                                                {[
                                                    { label: "Owned", value: "owned" },
                                                    { label: "Rented", value: "rented" },
                                                    { label: "Mortgaged", value: "allotment" },
                                                    { label: "Provided By", value: "provided" },
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
                                                        {value === "provided" && (
                                                            <input
                                                                type="text"
                                                                name="providedByInput"
                                                                placeholder="Enter provider"
                                                                className="ml-3 border border-gray-300 rounded-md px-1 py-0.5 text-sm"
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-3 rounded-md bg-gray-100 border w-3/4">
                                            <h3 className="text-lg font-semibold mb-1">LOT</h3>
                                            <div className="flex flex-wrap gap-4">
                                                {[
                                                    { label: "Owned", value: "owned" },
                                                    { label: "Rented", value: "rented" },
                                                    { label: "Mortgaged", value: "allotment" },
                                                    { label: "Provided By", value: "provided" },
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
                                                        {value === "provided" && (
                                                            <input
                                                                type="text"
                                                                name="providedByInput"
                                                                placeholder="Enter provider"
                                                                className="ml-3 border border-gray-300 rounded-md px-1 py-0.5 text-sm"
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                            
                                        <div className="mt-4 flex justify-end gap-4">
                                            <button type="reset" className="bg-gray-300 px-4 py-2 rounded" onClick={() => setFormData(initialFormData)}>Reset</button>
                                            <Link to="/form2" type="submit" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
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
};
export default Apply;