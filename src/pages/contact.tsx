import Header from "../layouts/home-header";
import Footer from "../layouts/home-footer";
import Background from "../assets/photos/bg2.png";

function Contact() {
  return (
    <>
      <div
        className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}>
        <Header />
        <div className="flex-1 flex justify-center items-center backdrop-blur-md">
          <div className="w-full max-w-2xl mx-4 p-6 rounded-lg shadow-lg border border-black bg-white bg-opacity-50 backdrop-blur-lg flex gap-6">

            <div className="w-1/2">
              <h2 className="text-center mb-4 text-2xl font-bold text-gray-800">Contact Us</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="flex items-center mb-2 text-sm font-medium gap-2 text-gray-900">
                    <i className="bi bi-person-circle text-black"></i>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="flex items-center mb-2 text-sm font-medium gap-2 text-gray-900">
                    <i className="bi bi-envelope text-black"></i>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="flex items-center mb-2 text-sm font-medium gap-2 text-gray-900">
                    <i className="bi bi-chat-dots text-black"></i>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Type your message here"
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    rows={4}/>
                </div>
                <button
                  type="button"
                  className="w-full p-2 text-white bg-red-600 rounded-lg focus:ring-red-500">
                  Send Message
                </button>
              </form>
            </div>

            <div className="w-1/2 flex flex-col justify-center">
              <h2 className="text-center mb-4 text-xl font-semibold text-gray-800">Need Help?</h2>
              <p className="text-center mb-2 text-sm text-gray-700">Call Us:</p>
              <p className="text-center mb-4 text-sm font-medium text-gray-900">(+63) 9173077038</p>
              <p className="text-center mb-2 text-sm text-gray-700">Email Us:</p>
              <p className="text-center mb-4 text-sm font-medium text-gray-900">support@premio.ph</p>
              <p className="text-center mb-2 text-sm text-gray-700">Location:</p>
              <p className="text-center text-sm font-medium text-gray-900">
                Capt. Vicente Roa St.,<br />
                Cagayan de Oro City, 9000 Misamis Oriental
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
