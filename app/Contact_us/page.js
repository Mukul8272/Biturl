import React from 'react'


const Contact = () => {

  return (
     <section className="bg-gradient-to-r from-purple-300 to-purple-100 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-12">
          Have questions, feedback, or need support? Reach out to us and we’ll get back to you as soon as possible.
        </p>

        <form action="https://formspree.io/f/xgvygrkv"
          method="POST"
        className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            name="message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          ></textarea>

          <button 
            type="submit"
            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
