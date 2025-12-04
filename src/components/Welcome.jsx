import React from "react";

export default function Welcome() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-blue-900 text-white px-6">
      <h1 className="text-6xl md:text-7xl font-bold mb-6">
        Welcome
      </h1>

      <h2 className="text-4xl md:text-5xl font-semibold text-blue-300">
        Hi, I'm Muhammed Aslah K
      </h2>

      <p className="text-gray-300 mt-6 text-lg max-w-2xl">
        Cybersecurity Student • Developer • Digital Forensics Enthusiast
      </p>

      <a 
        href="#hero"
        className="mt-10 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
      >
        Enter Portfolio
      </a>
    </section>
  );
}
