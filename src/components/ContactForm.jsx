import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import theme from '../theme';

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(''), 2000);
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
      className={`w-full md:w-1/2 ${theme.cardOnWhite} p-6 rounded-xl`}
    >
      <h3 className={`text-2xl font-semibold mb-4 ${theme.textHeading}`}>Send a Message</h3>

      <input
        name="name"
        type="text"
        placeholder="Your Name"
        className={`${theme.inputBase} mb-4`}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className={`${theme.inputBase} mb-4`}
        required
      />
      <input
        name="phone"
        type="text"
        placeholder="Your Phone Number"
        className={`${theme.inputBase} mb-4`}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        className={`${theme.inputBase} mb-4`}
        required
      ></textarea>

      {/* 10% black accent button */}
      <button
        type="submit"
        disabled={isSending}
        className={`px-6 py-2 rounded-lg ${isSending ? theme.btnDisabled : theme.btnPrimary}`}
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
