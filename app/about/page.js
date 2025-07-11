import React from 'react';

const About = () => {
  return (

    <section className="bg-gradient-to-r from-purple-300 to-purple-100">
      <div className="min-h-[91vh] flex flex-col justify-center items-center text-center space-y-6 ">
        <h1 className="text-4xl font-extrabold text-purple-800 p-4 underline" >About Us</h1>

        <div className="max-w-3xl space-y-4 text-lg text-gray-800 font-semibold">
          <p>
            At <span className="font-bold">BITURL</span>, we believe simplicity is powerful. We&apos;ve built a fast, secure, and minimalistic URL shortening service designed to help users share links more effectively. Whether you&apos;re a developer, marketer, or everyday user, BITURL makes your long, cluttered URLs short and manageable — in just one click.
          </p>
          <p>
            Our mission is to provide a seamless link management experience with real-time analytics, privacy-focused redirects, and a user-friendly interface. No ads. No clutter. Just clean, reliable URL shortening.
          </p>
          <p>
            Join thousands who trust <span className="font-semibold">BITURL</span> to simplify their digital sharing — one short link at a time.
          </p>
        </div>
      </div>
    </section>
   
  );
};

export default About;
