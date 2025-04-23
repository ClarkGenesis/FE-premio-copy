import Breadcrumb from "../../../components/AdminBreadcrums";
import Header from "../../../layouts/AdminLayouts/AdminHeader";

function View6() {
  const renderPlaceholder = (label: string) => (
    <div className="upload-box flex flex-col items-center justify-center h-60 border-2 border-dashed border-gray-300 rounded-md relative">
      <span className="text-gray-500 text-center">{label} preview unavailable</span>
    </div>
  );

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="container-fluid">
          <Breadcrumb
            title="View Credit Application Form"
            links={[{ text: "Co-Maker & Employment Details", link: "/5ViewCo-Maker" }]}
            active="Credit Inquiry Authorization"
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
                                ? "bg-gray-500 text-white"
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
                                ? "bg-gray-500 text-white"
                                : "bg-gray-200"
                            }`}
                          >
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Applicant Sketch */}
                    <div className="mb-4 p-4 border rounded-md shadow-sm">
                      <label className="block text-sm font-medium text-center mb-2">
                        Sketch of Residence or Business Address (Applicant)
                      </label>
                      {renderPlaceholder("Applicant Sketch")}
                      <button className="mt-3 bg-red-500 text-white px-2 py-2 rounded-md text-xs">
                        Remove
                      </button>
                    </div>

                    {/* Co-Maker Sketch */}
                    <div className="mb-4 p-4 border rounded-md shadow-sm">
                      <label className="block text-sm font-medium text-center mb-2">
                        Sketch of Residence: (Co-Maker)
                      </label>
                      {renderPlaceholder("Co-Maker Sketch")}
                      <button className="mt-3 bg-red-500 text-white px-2 py-2 rounded-md text-xs">
                        Remove
                      </button>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Applicant Signature */}
                    <div className="mb-4 p-4 border rounded-md shadow-sm">
                      <label className="block text-sm font-medium text-center mb-2">
                        Applicant's Signature
                      </label>
                      {renderPlaceholder("Applicant Signature")}
                      <button className="mt-3 bg-red-500 text-white px-2 py-2 rounded-md text-xs">
                        Remove
                      </button>
                    </div>

                    {/* Spouse Signature */}
                    <div className="mb-4 p-4 border rounded-md shadow-sm">
                      <label className="block text-sm font-medium text-center mb-2">
                        Spouse's Signature
                      </label>
                      {renderPlaceholder("Spouse Signature")}
                      <button className="mt-3 bg-red-500 text-white px-2 py-2 rounded-md text-xs">
                        Remove
                      </button>
                    </div>

                    {/* Co-Maker Signature */}
                    <div className="mb-4 p-4 border rounded-md shadow-sm">
                      <label className="block text-sm font-medium text-center mb-2">
                        Co-maker's Signature
                      </label>
                      {renderPlaceholder("Co-Maker Signature")}
                      <button className="mt-3 bg-red-500 text-white px-2 py-2 rounded-md text-xs">
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex justify-end gap-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                      Disapprove
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded"
                      onClick={() => window.scrollTo({ top: 0 })}
                    >
                      Save & Approve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View6;