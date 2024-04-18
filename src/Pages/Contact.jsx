import { useState } from "react";
import Helmet from "react-helmet";
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Show SweetAlert notification
    Swal.fire({
      icon: 'success',
      title: 'Form Submitted!',
      text: 'Your message has been sent successfully.',
    });
  };

  return (
    <div className="mx-[1%] md:mx-[3%] rounded-xl mt-6">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg mt-8"
      data-aos="zoom-in-down" data-aos-duration="1000">
        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-100 p-4 flex flex-col justify-center items-center mt-12"
      data-aos="zoom-in"
      data-aos-duration="1500">
        <p className="text-lg font-medium text-gray-800">Contact Us</p>
        <p className="text-sm text-gray-600">123 Main Street, City, Country</p>
        <p className="text-sm text-gray-600">Phone: +123-456-7890</p>
        <p className="text-sm text-gray-600">Email: info@havencrest.com</p>
      </div>
    </div>
  );
};

export default Contact;
