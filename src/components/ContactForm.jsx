import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;
    setIsSending(true);
    setStatusMessage('');

    try {
      await emailjs.sendForm(
        'service_ppu9djy',
        'template_g3wa44b',
        form.current,
        'Gz1dx9r9olZjHxIoi'
      );
      setStatusMessage('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      setStatusMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md"
    >
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send a Message</h3>

      <input
        name="name"
        type="text"
        placeholder="Your Name"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        required
      />
      <input
        name="phone"
        type="text"
        placeholder="Your Phone Number"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        required
      ></textarea>

      <button
        type="submit"
        disabled={isSending}
        className={`px-6 py-2 rounded-lg text-white transition duration-200 ${
          isSending ? 'bg-gray-500 cursor-not-allowed' : 'bg-purple-700 hover:bg-purple-800'
        }`}
      >
        {isSending ? 'Sending...' : 'Send'}
      </button>

      {statusMessage && (
        <p className="text-sm mt-3 text-green-600 transition-opacity duration-500">
          {statusMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
