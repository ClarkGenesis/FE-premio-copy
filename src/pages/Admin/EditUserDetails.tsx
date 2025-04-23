import Breadcrumb from "../../components/AdminBreadcrums";
import Header from "../../layouts/AdminLayouts/AdminHeader";
import Sidemenu from "../../layouts/AdminLayouts/AdminSidemenu";
import ProfileImage from "../../assets/photos/user-avatar.png";
import { Link } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  birthdate: Date;
  photo?: File | null;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  birthdate: new Date(),
  photo: null,
};

function EditUser() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, photo: file });
    }
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, photo: null });
  };

  return (
    <>
      <Header />
      <Sidemenu />
      <div className="main-content app-content">
        <div className="container-fluid">
          <Breadcrumb title="Edit Details" active="Edit Details" />
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-12 col-span-12">
              <div className="box overflow-hidden main-content-card">
                <div className="box-body p-5">
                  <form onSubmit={handleSubmit}>
                    <div className="flex items-start gap-4">
                      <span className="avatar avatar-xl">
                        <img src={ProfileImage} alt="Profile" id="profile-img" />
                      </span>
                      <div className="mt-2">
                        <label className="block font-medium mb-2">Profile Picture</label>
                        <div className="flex gap-2">
                          <label className="bg-gray-200 text-dark px-4 py-2 rounded cursor-pointer">
                            <span className="bi bi-upload p-2"></span>
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                            Upload
                          </label>
                          <button
                            type="button"
                            className="bg-gray-300 px-4 py-2 rounded"
                            onClick={handleRemoveImage}
                          >
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-2 mb-2" />
                    <div className="mb-2 flex items-start gap-4">
                      <h4 className="text-lg font-semibold">Personal Information</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { label: "Name", name: "firstName", icon: "bi bi-person", value: "John Doe" },
                        { label: "Email", name: "email", icon: "bi bi-envelope", value: "john.doe@example.com" },
                        { label: "Birth Date", name: "birthdate", icon: "bi bi-calendar", value: "1990-01-01" },
                      ].map(({ label, name, icon, value }) => (
                        <div key={name} className="relative">
                          <label className="block font-medium mb-1" htmlFor={name}>
                            {label}
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id={name}
                              name={name}
                              value={value}
                              onChange={handleChange}
                              className="ti-form-input rounded-sm ps-11 focus:z-10"
                              placeholder={` ${label}`}
                            />
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                              <i className={icon}></i>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div>
                        <label className="block font-medium mb-1">Role:</label>
                        <select
                          id="gender"
                          name="gender"
                          onChange={handleChange}
                          className="ti-form-input rounded-sm border border-gray-400 focus:z-10"
                          value="Male"
                        >
                          <option value="Male">Admin</option>
                          <option value="Female">User</option>
                        </select>
                      </div>

                      <div className="mt-2">
                        <label className="block font-medium mb-3" htmlFor="biography">
                          Biographical Info
                        </label>
                        <textarea
                          id="biography"
                          name="biography"
                          rows={3}
                          className="w-full px-2 py1 border rounded focus:outline-none"
                          placeholder="Write a short bio..."
                        >
                          Kaya ra boi
                        </textarea>
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
                      <Link
                        to="/user-management"
                        className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
                      >
                        <i className="bi bi-save"></i>
                        <span className="px-3">Save</span>
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
export default EditUser;
