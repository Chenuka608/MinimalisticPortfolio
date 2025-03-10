import React, { useState, useEffect } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Scroll to top when the ContactPage is rendered
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []); // This runs once when the component is mounted

  return (
    <div className="px-4 py-8 md:py-12 transition-all dark:bg-gray-900 dark:text-white bg-white text-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Let's Collaborate</h1>
        <p className="text-center text-lg mb-12">
          I'd love to hear from you! If you have any questions, ideas, or just want to chat, feel free to get in touch.
        </p>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10">
          <form
            action="https://getform.io/f/lbkmgewb" // The action link for Getform
            method="POST"
            className="space-y-6"
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="py-3 px-8 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
