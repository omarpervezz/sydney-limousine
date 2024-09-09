import React from "react";
import { FaMapMarkerAlt, FaPhone, FaPaperPlane, FaGlobe } from "react-icons/fa";
import Title from "@/components/title";

const Contact = () => {
  return (
    <section className="py-24">
      <div className="container px-8 md:px-8 lg:px-12 xl:px-16 mx-auto">
        <div className="flex justify-center">
          <div className="text-center mb-12">
            <Title text="Contact For Any Query" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full lg:flex lg:space-x-8">
            <div className="lg:w-2/3 p-5 bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
              <div
                id="form-message-warning"
                className="text-red-500 mb-4"
              ></div>
              <div
                id="form-message-success"
                className="text-green-600 font-bold mb-4"
              >
                Your message was sent, thank you!
              </div>
              <form
                method="POST"
                id="contactForm"
                name="contactForm"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 focus:border-teal-500 p-2 outline-none"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full border-b border-gray-300 focus:border-teal-500 p-2 outline-none"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 focus:border-teal-500 p-2 outline-none"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="w-full border-b border-gray-300 focus:border-teal-500 p-2 outline-none resize-none"
                    id="message"
                    cols={30}
                    rows={4}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Send Message"
                    className="bg-teal-600 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-all"
                  />
                  <div className="submitting"></div>
                </div>
              </form>
            </div>
            <div className="lg:w-1/3 bg-teal-600 text-white p-6 shadow-lg mt-8 lg:mt-0">
              <h3 className="text-xl font-semibold mb-4">
                Let&apos;s get in touch
              </h3>
              <p className="mb-6">
                We&apos;re open for any suggestion or just to have a chat
              </p>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                  <FaMapMarkerAlt className="text-teal-600" size={24} />
                </div>
                <div className="pl-3">
                  <p>
                    <span className="font-semibold">Address:</span> 275 Alfred
                    Street, North Sydney NSW 2060, Australia
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                  <FaPhone className="text-teal-600" size={24} />
                </div>
                <div className="pl-3">
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href="tel://1234567920" className="text-white underline">
                      +61 439 853700
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                  <FaPaperPlane className="text-teal-600" size={24} />
                </div>
                <div className="pl-3">
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href="mailto:info@sydneylimousineservice.com"
                      className="text-white underline"
                    >
                      info@sydneylimousineservice.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                  <FaGlobe className="text-teal-600" size={24} />
                </div>
                <div className="pl-3">
                  <p>
                    <span className="font-semibold">Website:</span>{" "}
                    <a
                      href="sydneylimousineservice.com"
                      className="text-white underline"
                    >
                      sydneylimousineservice.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
