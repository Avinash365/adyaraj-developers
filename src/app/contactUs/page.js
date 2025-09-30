'use client';
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";

export default function ContactHero() {
  const [details, setDetails] = useState("");
  const maxChars = 500;
  return (
    <>
    <section>
    <Navbar/>  
    </section>
    <section
      className="w-full h-[295px] flex items-center justify-center relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
          url("https://readdy.ai/api/search-image?query=Professional%20business%20contact%20and%20communication%2C%20construction%20company%20office%20building%2C%20modern%20corporate%20architecture%2C%20business%20meeting%20and%20consultation%2C%20professional%20contact%20center&width=1920&height=600&seq=contact-hero&orientation=landscape")
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="z-10 text-center w-full">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-white text-lg mb-2 font-medium drop-shadow-lg">
          Let's Discuss Your Next Project
        </p>
      </div>
    </section>

    <section className="bg-[#fafbfc] py-8 px-2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Get Project Quote */}
        <div className="bg-white shadow-lg rounded-xl p-7">
          <h2 className="text-xl font-extrabold mb-2 text-[#22223B]">Get Project Quote</h2>
          <p className="text-gray-700 text-sm mb-4">
            Fill out the form below and our team will get back to you within 24 hours to discuss your government construction project.
          </p>
          <form className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1 text-[#22223B]">Full Name<span className="text-orange-600">*</span></label>
                <input type="text" placeholder="Enter your full name" required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-[#22223B]">Email Address<span className="text-orange-600">*</span></label>
                <input type="email" placeholder="Enter your email" required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-[#22223B]">Phone Number<span className="text-orange-600">*</span></label>
                <input type="tel" placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-[#22223B]">Organization/Department</label>
                <input type="text" placeholder="Government department or organization"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1 text-[#22223B]">Project Type</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100">
                  <option>Select project type</option>
                  <option>Building</option>
                  <option>Road</option>
                  <option>Bridge</option>
                  <option>Irrigation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-[#22223B]">Estimated Budget</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100">
                  <option>Select budget range</option>
                  <option>Below 1 Cr</option>
                  <option>1-5 Cr</option>
                  <option>5-10 Cr</option>
                  <option>10+ Cr</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#22223B]">Project Timeline</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100">
                <option>Select timeline</option>
                <option>1-3 Months</option>
                <option>3-6 Months</option>
                <option>6-12 Months</option>
                <option>More than 1 Year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#22223B]">Project Details</label>
              <textarea
                placeholder="Please provide details about your project requirements, location, specifications, and any other relevant information..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100 min-h-[90px] resize-none"
                maxLength={maxChars}
                value={details}
                onChange={e => setDetails(e.target.value)}
              />
              <div className="text-xs text-gray-500 text-right">{details.length}/{maxChars} characters</div>
            </div>
            <button
              type="submit"
              className="w-full mt-2 bg-[#ec6608] text-white font-semibold rounded-md py-3 text-base hover:bg-orange-700 transition"
            >Send Message</button>
          </form>
        </div>
        {/* Right: Get in Touch */}
        <div>
          <h2 className="text-lg font-extrabold mb-1 text-[#22223B]">Get in Touch</h2>
          <p className="text-gray-700 text-sm mb-4">
            Ready to start your government construction project? Contact us today for a consultation and detailed project proposal.
          </p>
          {/* Contact Cards */}
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="bg-white rounded-xl shadow p-5 flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-100 text-orange-600 text-xl mt-1">📍</span>
              <div>
                <p className="font-semibold text-[#22223B] mb-0.5">Office Address</p>
                <p className="text-[15px] text-gray-700 leading-5">
                  202, Vishnu Palace<br />
                  East Boring Canal Road<br />
                  Patna, Bihar - 800001
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="bg-white rounded-xl shadow p-5 flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-100 text-orange-600 text-xl mt-1">📞</span>
              <div>
                <p className="font-semibold text-[#22223B] mb-0.5">Phone Numbers</p>
                <p className="text-[15px] text-gray-700 leading-5">
                  +91 9334485893<br />
                  0612-2520018<br />
                  0612-6604972
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="bg-white rounded-xl shadow p-5 flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-100 text-orange-600 text-xl mt-1">✉️</span>
              <div>
                <p className="font-semibold text-[#22223B] mb-0.5">Email Addresses</p>
                <p className="text-[15px] text-gray-700 leading-5 break-all">
                  webmail@adyaraj.com<br />
                  adyaraj.developers.p@gmail.com
                </p>
              </div>
            </div>
            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow p-5 flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-100 text-orange-600 text-xl mt-1">⏰</span>
              <div>
                <p className="font-semibold text-[#22223B] mb-0.5">Business Hours</p>
                <p className="text-[15px] text-gray-700 leading-5">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section
      className="w-full py-14 flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#ec6608",
        // If you have a pattern image:
        // backgroundImage: 'url("/path/to/pattern-image.png")',
        // backgroundRepeat: 'repeat',
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Ready to Start Your Project?
        </h2>
        <p className="text-white text-2xl mb-10">
          Contact us today for a free consultation and project estimate
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-2">
          <a
            href="tel:+919334485893"
            className="bg-white text-[#ec6608] font-semibold rounded-md px-8 py-5 text-2xl shadow
              border border-white hover:bg-orange-50 transition"
          >
            <span className="font-bold">Call Now:</span> +91 9334485893
          </a>
          <a
            href="mailto:webmail@adyaraj.com"
            className="border-2 border-white bg-transparent text-white font-semibold rounded-md px-10 py-5 text-2xl shadow
              hover:bg-white/[0.10] hover:text-white focus:outline-none transition"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
    </>
  );
}

