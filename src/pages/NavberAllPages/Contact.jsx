import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Thanks for Message!");
    e.target.reset();
  };
  return (
    <div className="w-full bg-[#f6f6f6]  py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT SECTION */}
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-6">
            <h2 className="text-3xl font-bold">LoanLink</h2>
          </div>

          <p className=" mb-8">
            LoanLink helps you find the best loan options quickly and securely.
            Compare rates, explore options, and manage your finances
            effortlessly.
          </p>

          {/* MEET US */}
          <h3 className=" text-xl font-semibold mb-2">MEET US</h3>
          <p className="mb-6">
            LoanLink helps you find the best loan options quickly and securely.
          </p>

          {/* CONTACT INFO */}
          <h3 className=" text-xl font-semibold mb-2">Contact Us</h3>
          <p>Landline : +8801307251436</p>
          <p>Mobile : +8801307251436</p>
          <p>Email : looanslink@gmail.com</p>
        </div>

        {/* RIGHT SECTION - FORM */}
        <div>
          <h1 className="text-4xl font-semibold  mb-8">Get in touch.</h1>

          <div className="space-y-6">
            {/* TOP ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border-b border-gray-400 py-2 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-gray-400 py-2 outline-none"
              />
            </div>

            {/* SECOND ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Mobile or Telephone"
                className="bg-transparent border-b border-gray-400 py-2 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="bg-transparent border-b border-gray-400 py-2 outline-none"
              />
            </div>

            {/* MESSAGE FIELD */}
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="w-full bg-transparent border-b border-gray-400 py-2 outline-none"
            />

            {/* SEND BUTTON */}
            <form
              onSubmit={handleSubscribe}
              className="flex items-center  gap-2  rounded-md "
            >
              <button className="btn-primary bg-blue-300 p-4 rounded-2xl">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
