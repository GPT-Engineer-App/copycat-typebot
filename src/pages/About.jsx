import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl mx-auto text-center py-8">
        <h1 className="text-4xl font-bold mb-4">About Typebot.io</h1>
        <p className="text-lg text-gray-700">Learn more about Typebot.io and its features.</p>
      </header>
      <main className="w-full max-w-4xl mx-auto">
        <p className="text-gray-700">Typebot.io is a platform that allows you to create interactive chatbots with ease. Our mission is to make chatbot creation accessible to everyone.</p>
      </main>
    </div>
  );
};

export default About;