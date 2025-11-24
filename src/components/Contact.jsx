import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-green-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Start Saving?</h3>
        <p className="text-lg mb-8">Contact us for orders, advice, or farm visits</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+1234567890" 
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            📞 Call Us
          </a>
          <a 
            href="mailto:info@agroglobal.com" 
            className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition border-2 border-white"
          >
            ✉️ Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
