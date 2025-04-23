import Breadcrumb from "../../../components/UserBreadcrums";
import Header from "../../../layouts/UserLayouts/UserHeader";
import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";

interface FormData {
  sketchApplicant: File | null;
  sketchCoMaker: File | null;
  applicantSig: File | null;
  spouseSig: File | null;
  coMakerSig: File | null;
}

const initialFormData: FormData = {
  sketchApplicant: null,
  sketchCoMaker: null,
  applicantSig: null,
  spouseSig: null,
  coMakerSig: null,
};

function Apply6() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // State to hold the image URLs for display
  const [applicantSketchImage, setApplicantSketchImage] = useState<string | null>(null);
  const [coMakerSketchImage, setCoMakerSketchImage] = useState<string | null>(null);
  const [applicantSigImage, setApplicantSigImage] = useState<string | null>(null);
  const [spouseSigImage, setSpouseSigImage] = useState<string | null>(null);
  const [coMakerSigImage, setCoMakerSigImage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  // Generic image upload handler
  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>,
    setImageState: (image: string | null) => void,
    formKey: keyof FormData
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setImageState(imageUrl); // Update the image display state

        // Update the form data with the File object
        setFormData((prev) => ({ ...prev, [formKey]: file }));
      };

      reader.readAsDataURL(file);
    }
  };

  // Reset image handler
  const handleImageReset = (setImageState: (image: string | null) => void, formKey: keyof FormData) => {
    setImageState(null); // Clear the image display
    setFormData((prev) => ({ ...prev, [formKey]: null })); // Clear the file in form data
  };

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="container-fluid">
          <Breadcrumb
            title="Credit Application Form  "
            links={[{ text: "Employment & Payment Details Form", link: "/5FormCo-Maker" }]}
            active="Co-Maker & Employment Details"
          />
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
                              step === 1 ||
                              step === 2 ||
                              step === 3 ||
                              step === 4 ||
                              step === 5 ||
                              step === 6
                                ? "bg-green-500 text-white"
                                : "border border-black text-black"
                            }`}
                          >
                            {step}
                          </div>
                          <p
                            className={`text-center text-black text-xs mt-1 px-2 py-1 rounded-lg shadow-sm ${
                              step === 1 ||
                              step === 2 ||
                              step === 3 ||
                              step === 4 ||
                              step === 5 ||
                              step === 6
                                ? "bg-green-500 text-white"
                                : "bg-gray-300"
                            }`}
                          >
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                        <label className="text-sm font-medium text-gray-400 mx-auto text-center mb-2">
                        Accepted file types: JPG, PNG.
                        </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Sketch of Residence/or Business Address: (Applicant) */}
                      <div className="mb-4 p-4 border rounded-md shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mx-auto text-center mb-2">
                        Upload Sketch of Residence or Business Address (Applicant)
                        </label>
                        <ImageUploadComponent
                          imageUrl={applicantSketchImage}
                          onImageChange={(e) =>
                            handleImageUpload(e, setApplicantSketchImage, "sketchApplicant")
                          }
                          onImageReset={() =>
                            handleImageReset(setApplicantSketchImage, "sketchApplicant")
                          }
                        />
                      </div>

                      {/* Sketch of Residence: (Co-Maker) */}
                      <div className="mb-4 p-4 border rounded-md shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mx-auto text-center mb-2">
                          Upload Sketch of Residence: (Co-Maker)
                        </label>
                        <ImageUploadComponent
                          imageUrl={coMakerSketchImage}
                          onImageChange={(e) =>
                            handleImageUpload(e, setCoMakerSketchImage, "sketchCoMaker")
                          }
                          onImageReset={() =>
                            handleImageReset(setCoMakerSketchImage, "sketchCoMaker")
                          }
                        />
                        
                      </div>
                    </div>
                    <h6>This is to authorize Premio and its representative to perform the credit inquiries and verify data written above. </h6>

                <div className="mb-4">
                    <hr className="mt-2 mb-4" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Applicant's Signature */}
                      <div className="mb-4 p-4 border rounded-md shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mx-auto text-center mb-2">
                          Applicant's Signature
                        </label>
                        <ImageUploadComponent
                          imageUrl={applicantSigImage}
                          onImageChange={(e) =>
                            handleImageUpload(e, setApplicantSigImage, "applicantSig")
                          }
                          onImageReset={() =>
                            handleImageReset(setApplicantSigImage, "applicantSig")
                          }
                        />
                      </div>

                      {/* Spouse's Signature */}
                      <div className="mb-4 p-4 border rounded-md shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mx-auto text-center mb-2">
                          Spouse's Signature
                        </label>
                        <ImageUploadComponent
                          imageUrl={spouseSigImage}
                          onImageChange={(e) =>
                            handleImageUpload(e, setSpouseSigImage, "spouseSig")
                          }
                          onImageReset={() =>
                            handleImageReset(setSpouseSigImage, "spouseSig")
                          }
                        />
                      </div>

                      {/* Co-maker's Signature */}
                      <div className="mb-4 p-4 border rounded-md shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mx-auto text-center mb-2">
                          Co-maker's Signature
                        </label>
                        <ImageUploadComponent
                          imageUrl={coMakerSigImage}
                          onImageChange={(e) =>
                            handleImageUpload(e, setCoMakerSigImage, "coMakerSig")
                          }
                          onImageReset={() =>
                            handleImageReset(setCoMakerSigImage, "coMakerSig")
                          }
                        />
                      </div>
                    </div>
                </div>


                    {/* Form Action Buttons */}
                    <div className="mt-4 flex justify-end gap-4">
                      <button
                        type="reset"
                        className="bg-gray-300 px-4 py-2 rounded"
                        onClick={() => {
                          setFormData(initialFormData);
                          setApplicantSketchImage(null);
                          setCoMakerSketchImage(null);
                          setApplicantSigImage(null);
                          setSpouseSigImage(null);
                          setCoMakerSigImage(null);
                        }}
                      >
                        Reset
                      </button>
                      <Link
                        to="/pending"
                        className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
                        onClick={() => window.scrollTo({ top: 1 })}
                      >
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
}

// Separate ImageUpload component for reusability
interface ImageUploadProps {
  imageUrl: string | null;
  onImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onImageReset: () => void;
}

const ImageUploadComponent: React.FC<ImageUploadProps> = ({
  imageUrl,
  onImageChange,
  onImageReset,
}) => {
  return (
    <div className="flex flex-col items-center">
      {imageUrl ? (
        <div className="mb-4">
          <img
            src={imageUrl}
            alt="Uploaded Image"
            className="max-w-md max-h-60 object-cover rounded-md shadow-md"
          />
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-400 rounded-md p-4 mb-4 w-full max-w-md h-60 flex items-center justify-center text-gray-500">
          No image selected
        </div>
      )}

      <div className="flex space-x-4">
        <label className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={onImageChange}
            className="hidden"
          />
        </label>
        <button
          onClick={onImageReset}
          className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          disabled={!imageUrl}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Apply6;
