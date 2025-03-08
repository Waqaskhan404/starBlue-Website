"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !emailRegex.test(formData.email)) newErrors.email = "Valid email required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_vjspwni",
        "template_0ry6ejj",
        formData,
        "t2iyT2HLBV1aSL9NR"
      )
      .then((response) => {
        console.log("SUCCESS!", response);
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccessMessage(""), 5000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Check console for details.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="container mx-auto py-16 px-6 bg-green-900" style={{ marginBottom: "40px" }}>
      <h2 className="text-4xl font-bold text-center text-white mt-10">Get In Touch</h2>
      <p className="text-center text-white mt-2">
        We invite you to explore our extensive range of plants and experience the exceptional service that SB LANDSCAPING & AGRICULTURAL SERVICES, SP LLC, is known for.
      </p>

      {/* Form and Map Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {/* Contact Form */}
        <form onSubmit={sendEmail} className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
          <div>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-bold py-2 rounded-md hover:bg-green-800 transition duration-300 flex justify-center items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              </>
            ) : (
              "SEND"
            )}
          </button>

          {successMessage && <p className="text-green-700 text-center mt-4">{successMessage}</p>}
        </form>

        {/* Google Map */}
        <div className="shadow-lg rounded-lg overflow-hidden">
        <iframe
  className="w-full h-full min-h-[300px]"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5080588833395!2d54.4688861!3d24.3677643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41ae6ef0149f%3A0x38c3eb480aca8574!2sMusaffah%2C%20MW2%2C%20Abu%20Dhabi%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1234567890"
  allowFullScreen=""
></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
