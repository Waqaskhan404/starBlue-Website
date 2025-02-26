"use client";

const ContactForm = () => {
  return (
    <section className="container mx-auto py-16 px-6 bg-green-900" style={{marginBottom:"40px"}}>
      <h2 className="text-4xl font-bold text-center text-white mt-10 ">Get In Touch</h2>
      <p className="text-center text-white mt-2">
        We invite you to explore our extensive range of plants and experience the exceptional service that THAI FLORA is known for.
      </p>

      {/* Form and Map Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {/* Contact Form */}
        <form className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
          <div>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            ></textarea>
          </div>
          <button className="w-full bg-green-700 text-white font-bold py-2 rounded-md hover:bg-green-800 transition duration-300">
            SEND
          </button>
        </form>

        {/* Google Map */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full min-h-[300px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.583650192802!2d100.8950002!3d14.0153334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDAwJzU1LjIiTiAxMDDCsDUzJzQyLjkiRQ!5e0!3m2!1sen!2sth!4v1615168472987!5m2!1sen!2sth"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
