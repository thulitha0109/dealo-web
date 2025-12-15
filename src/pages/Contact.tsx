import React, { useState } from 'react';
import Layout from './Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formType: 'contact', ...formData }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded shadow bg-white bg-opacity-10 backdrop-blur-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded h-32 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
          >
            Send Message
          </button>

          {/* Status message */}
          {status === "success" && (
            <div className="flex items-center gap-2 text-green-600 mt-4 p-2 bg-green-100 rounded">
              {/* ✅ Success SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293A1 1 0 006.293 10.707l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Thank you! Your message has been sent.</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 mt-4 p-2 bg-red-100 rounded">
              {/* ❌ Error SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11h2v5h-2V7zm0 6h2v2h-2v-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Oops! Something went wrong. Try again.</span>
            </div>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
