import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl mx-auto text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700">Get in touch with the Typebot.io team.</p>
      </header>
      <main className="w-full max-w-4xl mx-auto">
        <p className="text-gray-700">If you have any questions or feedback, feel free to reach out to us at contact@typebot.io.</p>
      </main>
    </div>
  );
};

export default Contact;