// src/components/Contact.jsx
import React from 'react';
import ContactForm from './ContactForm';
import { FaLinkedin, FaGithub} from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex flex-col md:flex-row justify-between items-start gap-10 p-6 md:p-12  bg-slate-900 rounded-2xl shadow-md"
    >
      {/* Left Info Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold ">Let’s Connect</h2>
        <p >
          Reach out for collaborations or just a friendly hello! 👋
        </p>

        <div className="space-y-1 text-base">
          <p><strong>Email:</strong> pankhaniyaharsh222@gmail.com</p>
          <p><strong>Phone:</strong> +91 7862807185</p>
          <p><strong>Location:</strong> Gujarat, India</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 pt-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/pankhaniya-harsh-21b234294/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Harsh1234567899"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform "
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right - Contact Form */}
      <ContactForm />
    </section>
  );
};

export default Contact;
