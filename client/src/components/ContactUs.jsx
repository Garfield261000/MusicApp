import React, { useState } from 'react'
import Navbar from './Navbar'

const FORM_ENDPOINT = "";

const ContactUs = () => {

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }
  return (
    <div className="w-full h-full flex flex-col items-center gap-2 justify-center  bg-[#790252]">
      <Navbar/>
      <div className="w-full my-4 h-16 bg-card flex items-center justify-center">
      <div className="w-full  p-4 md:w-2/3 bg-primary shadow-xl mt-12 rounded-md flex items-center justify-center">
      <p className='text-black font-bold text-xl'>Send Us your enquires</p>
      </div>
    </div>
    <div>
      <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className='w-508 flex flex-col items-center'
    >
      <div className="mb-3 pt-4 w-full">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-4 w-full h-full">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full "
          required
        />
      </div>
      <div className="mb-3 pt-4 w-full">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0 ">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default ContactUs