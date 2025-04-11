import Breadcrumb from "../../../components/admin-breadcrums";
import Header from "../../../layouts/Admin-Layouts/admin-header";
import Sidemenu from "../../../layouts/Admin-Layouts/admin-sidemenu";
import { useState, ChangeEvent, FormEvent } from "react";

// Interface for form data structure
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

function Details() {
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
            title="Edit Details"
            links={[{ text: "Motorcycles", link: "/admin-motorcycles" }]}
            active="Details"
          />
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12">
              <div className="box overflow-hidden main-content-card">
                <div className="box-body p-5">
                <form onSubmit={handleSubmit}>
                  {/* Section Title */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">Motorcycles Details</h4>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { label: "Model Name", name: "modelName", icon: "bi bi-box", type: "text", placeholder: "Honda CBR500R" },
                      { label: "Brand Name", name: "brandName", icon: "bi bi-briefcase", type: "text", placeholder: "Honda" },
                      { label: "Price", name: "price", icon: "bi bi-currency-dollar", type: "number", placeholder: "7000" },
                      { label: "Downpayment", name: "price", icon: "bi bi-currency-dollar", type: "number", placeholder: "7000" },
                      { label: "Monthly", name: "price", icon: "bi bi-currency-dollar", type: "number", placeholder: "7000" },
                    ].map(({ label, name, icon, type }) => (
                      <div key={name} className="relative">
                        <label htmlFor={name} className="block font-medium mb-1">
                          {label}
                        </label>
                        <div className="relative">
                          <input
                            type={type}
                            id={name}
                            name={name}
                            placeholder={`Enter ${label}`}
                            value={typeof formData[name as keyof FormData] === "string" || typeof formData[name as keyof FormData] === "number"
                              ? String(formData[name as keyof FormData] ?? "")
                              : ""}
                            onChange={handleChange}
                            className="ti-form-input rounded-sm ps-11 focus:z-10"
                          />
                          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                            <i className={icon}></i>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Description */}
                    <div className="relative col-span-2">
                      <label htmlFor="description" className="block font-medium mb-1">
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        placeholder="A sporty and efficient motorcycle with a 471cc parallel-twin engine."
                        className="ti-form-input rounded-sm ps-4 focus:z-10 w-full"
                      />
                    </div>
                  </div>

                  <hr className="my-4" />
                  
                  {/* Upload Motorcycle Image */}
                  <div className="relative">
                    <label className="block font-medium mb-1">Upload Motorcycle Image</label>
                    <div className="flex gap-2">
                      <input 
                        type="file" 
                        accept=".jpg, .jpeg, .png, .gif, .bmp" 
                        className="hidden"
                        id="motorcycle-image-upload"
                      />
                      <label htmlFor="motorcycle-image-upload" className="btn btn-secondary">
                        <i className="bi bi-upload"></i> Upload
                      </label>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-x-circle"></i> Remove
                      </button>
                    </div>
                  </div>

                  <hr className="my-4" />

                  {/* Upload Specification Table Image */}
                  <div className="relative">
                    <label className="block font-medium mb-1">Upload Specification Table Image</label>
                    <div className="flex gap-2">
                      <input 
                        type="file" 
                        accept=".jpg, .jpeg, .png, .gif, .bmp" 
                        className="hidden"
                        id="specification-table-image-upload"
                      />
                      <label htmlFor="specification-table-image-upload" className="btn btn-secondary">
                        <i className="bi bi-upload"></i> Upload
                      </label>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-x-circle"></i> Remove
                      </button>
                    </div>
                  </div>

                  <hr className="my-4" />

                  {/* Upload Related Motorcycle Image */}
                  <div className="relative">
                    <label className="block font-medium mb-1">Upload Related Motorcycle Image</label>
                    <div className="flex gap-2">
                      <input 
                        type="file" 
                        accept=".jpg, .jpeg, .png, .gif, .bmp" 
                        className="hidden"
                        id="related-motorcycle-image-upload"
                      />
                      <label htmlFor="related-motorcycle-image-upload" className="btn btn-secondary">
                        <i className="bi bi-upload"></i> Upload
                      </label>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-x-circle"></i> Remove
                      </button>
                    </div>
                  </div>


                  {/* Action Buttons */}
                  <div className="mt-4 flex justify-end gap-4">
                    <button
                      type="reset"
                      className="bg-gray-300 px-4 py-2 rounded"
                      onClick={() => setFormData(initialFormData)}
                    >
                      Reset
                    </button>
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                      <i className="bi bi-save"></i>
                      <span className="ml-2">Save</span>
                    </button>
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

export default Details;
