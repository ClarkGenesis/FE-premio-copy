import Breadcrumb from "../../components/admin-breadcrums";
import Header from "../../layouts/Admin-Layouts/admin-header";
import Sidemenu from "../../layouts/Admin-Layouts/admin-sidemenu";
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

function CreateDetail() {
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
            title="Add New Motorcycle"
            links={[{ text: "Motorcycles", link: "/admin-motorcycles" }]}
            active="Add New Motorcycle"
          />
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12">
              <div className="box overflow-hidden main-content-card">
                <div className="box-body p-5">
                  <form onSubmit={handleSubmit}>
                    {/* Section Title */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold">Add New Motorcycle</h4>
                    </div>

                    {/* Input Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {[
                        { label: "Model Name", name: "modelName", icon: "bi bi-box", type: "text", placeholder: "Honda CBR500R" },
                        { label: "Brand Name", name: "brandName", icon: "bi bi-briefcase", type: "text", placeholder: "Honda" },
                        { label: "Price", name: "price", icon: "bi bi-currency-dollar", type: "number", placeholder: "7000" },
                        { label: "Specifications", name: "specifications", icon: "bi bi-tools", type: "text", placeholder: "Engine: 471cc, Transmission: 6-speed, Fuel: Gasoline" },
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
                              value={(formData as any)[name] || ""}
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
                          placeholder="type."
                          className="ti-form-input rounded-sm ps-4 focus:z-10 w-full"
                        />
                      </div>

                      {/* Upload and Trash Buttons */}
                      <div className="relative">
                        <label className="block font-medium mb-1">Upload Image</label>
                        <button type="button" className="btn btn-primary">
                          <i className="bi bi-upload"></i> Upload
                        </button>
                      </div>
                      <div className="relative">
                        <label className="block font-medium mb-1">Remove</label>
                        <button type="button" className="btn btn-danger">
                          <i className="bi bi-trash"></i> Trash
                        </button>
                      </div>

                      {/* Related Products */}
                      <div className="relative">
                        <label className="block font-medium mb-1">Related Products</label>
                        <div className="flex gap-2">
                          <button type="button" className="btn btn-secondary">
                            <i className="bi bi-upload"></i> Upload
                          </button>
                          <button type="button" className="btn btn-danger">
                            <i className="bi bi-trash"></i> Trash
                          </button>
                        </div>
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
                        <span className="ml-2">Add</span>
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

export default CreateDetail;
