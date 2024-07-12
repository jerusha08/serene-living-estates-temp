
import React, { useState, useEffect } from "react";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  useEffect(() => {
    if (listing && listing.userRef) {
      const fetchLandlord = async () => {
        try {
          const res = await fetch(`/api/user/${listing.userRef}`);
          const data = await res.json();
          setLandlord(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchLandlord();
    }
  }, [listing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (landlord) {
      const mailtoLink = `mailto:${landlord.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
    } else {
      const contactEmail = 'mjerusha8@gmail.com'; // Replace with your desired contact email address
      const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
      <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
        <h2 className="text-4xl font-extrabold text-gray-800">Get In Touch</h2>
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
        Have questions or need assistance? Our team is here to help with personalized support and expert advice.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 bg-white rounded-lg p-6 shadow-md space-y-4">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            id="message"
            placeholder="Message"
            rows="6"
            className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="text-white-800 bg-blue-200 hover:bg-blue-400 font-semibold rounded-md text-sm px-6 py-3 block w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="z-10 relative lg:col-span-2">
        <img
          src="https://readymadeui.com/images/analtsis.webp"
          className="w-3/4 object-contain block mx-auto"
          alt="Contact illustration"
        />
      </div>
    </div>
  );
}
