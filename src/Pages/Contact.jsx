import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target
    toast.success("Message Sent")
    form.reset()
  }
  return (
    <div className="min-h-[80vh] my-15 max-w-6xl mx-auto px-4">
      <div className="contact-section border-b border-gray-300 pb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-base-20 mb-10">
          Let's Get In Touch
        </h1>

        <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-28 md:gap-16 gap-7 place-items-center">
          {/* phone */}
          <div className="text-center">
            <IoCallOutline className="text-4xl bg-primary/20 p-2 rounded-lg text-base-10 mb-2 mx-auto" />
            <p className="font-bold text-base-50">+8801736093199</p>
            <p className="font-bold text-base-50">+8801572901055</p>
          </div>

          {/* email */}
          <div className="text-center">
            <MdOutlineEmail className="text-4xl bg-primary/20 p-2 rounded-lg text-base-10 mb-2 mx-auto" />
            <Link
              to="mailto:rukhsathossain2811@gmail.com"
              className="font-bold text-base-50 block"
            >
              rukhsathossain2811@gmail.com
            </Link>
            <Link
              to="mailto:rukhsathossainj@gmail.com"
              className="font-bold text-base-50 block"
            >
              rukhsathossainj@gmail.com
            </Link>
          </div>

          {/* location */}
          <div className="text-center">
            <CiLocationOn className="text-4xl bg-primary/20 p-2 rounded-lg text-base-10 mb-2 mx-auto" />
            <p className="font-bold text-base-50">1/1, New Shalbon</p>
            <p className="font-bold text-base-50">Sadar, Rangpur, BD</p>
          </div>
        </div>
      </div>

      {/* form section */}
      <div className="pt-16 mb-20">
        <h2 className="text-2xl font-bold pb-7 text-base-10">
          Or Fill Out The Form
        </h2>

        <form className="grid md:grid-cols-2 grid-cols-1 gap-8"
        onSubmit={handleSubmit}>
          {/* name */}
          <div className="flex flex-col">
            <label className="block text-base-10 mb-2">Full Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Type your name"
              required
            />
          </div>

          {/* email */}
          <div className="flex flex-col">
            <label className="block text-base-10 mb-2">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Type your email"
              required
            />
          </div>

          {/* phone */}
          <div className="flex flex-col">
            <label className="block text-base-10 mb-2">Phone</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Type your mobile number"
              required
            />
          </div>

          {/* inquiry */}
          <div className="flex flex-col">
            <label className="block text-base-10 mb-2">Inquiry Purpose</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Your inquiry purpose?"
              required
            />
          </div>

          {/* message textarea spans 2 columns */}
          <div className="flex flex-col md:col-span-2">
            <label className="block text-base-10 mb-2">Your Message</label>
            <textarea
              className="textarea textarea-bordered w-full resize-none"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* submit button spans 2 columns */}
          <div className="md:col-span-2 flex justify-center pt-4">
            <button type="submit" className="btn btn-primary w-full md:w-auto px-10">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;