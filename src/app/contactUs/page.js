'use client';
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ContactHero() {
  const [details, setDetails] = useState("");
  const maxChars = 500;

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="w-full h-[500px] flex items-center justify-center relative"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url("https://readdy.ai/api/search-image?query=Professional%20business%20contact%20and%20communication%2C%20construction%20company%20office%20building%2C%20modern%20corporate%20architecture%2C%20business%20meeting%20and%20consultation%2C%20professional%20contact%20center&width=1920&height=600&seq=contact-hero&orientation=landscape")
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="z-10 text-center w-full space-y-3">
          <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-gray-100 text-lg md:text-xl leading-relaxed drop-shadow-lg">
            Let&apos;s Discuss Your Next Project
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left: Form */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get Project Quote
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours to discuss your government construction project.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Full Name <span className="text-orange-500">*</span></label>
                  <input type="text" placeholder="Enter your full name" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Email Address <span className="text-orange-500">*</span></label>
                  <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Phone Number <span className="text-orange-500">*</span></label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Organization/Department</label>
                  <input type="text" placeholder="Government department or organization" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Project Type</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100">
                    <option>Select project type</option>
                    <option>Building</option>
                    <option>Road</option>
                    <option>Bridge</option>
                    <option>Irrigation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Estimated Budget</label>
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
                <label className="block text-sm font-medium text-gray-800 mb-1">Project Timeline</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100">
                  <option>Select timeline</option>
                  <option>1-3 Months</option>
                  <option>3-6 Months</option>
                  <option>6-12 Months</option>
                  <option>More than 1 Year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Project Details</label>
                <textarea
                  placeholder="Provide details about your project requirements, location, specifications, etc."
                  maxLength={maxChars}
                  value={details}
                  onChange={e => setDetails(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-100 min-h-[100px] resize-none"
                />
                <div className="text-xs text-gray-500 text-right">{details.length}/{maxChars} characters</div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info + Map */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed">Ready to start your government construction project? Contact us today for consultation and a detailed project proposal.</p>

            {[
              { icon: "📍", title: "Office Address", text: "202, Vishnu Palace\nEast Boring Canal Road\nPatna, Bihar - 800001" },
              { icon: "📞", title: "Phone Numbers", text: "+91 9334485893\n0612-2520018\n0612-6604972" },
              { icon: "✉️", title: "Email Addresses", text: "webmail@adyaraj.com\nadyaraj.developers.p@gmail.com" },
              { icon: "⏰", title: "Business Hours", text: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-5 flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-500 text-xl mt-1">{item.icon}</span>
                <div>
                  <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}

            <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.4202673551103!2d85.325007!3d26.452245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed1064db7eb59f%3A0x5e6a7d29c1c0c54b!2sAdyaraj%20Developers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1695899643930!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 flex flex-col items-center justify-center bg-gradient-to-r from-yellow-900 to-orange-400 px-6 space-y-6">
        <div className="max-w-2xl text-center space-y-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
          <p className="text-white text-lg md:text-xl leading-relaxed">Contact us today for a free consultation and project estimate.</p>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <a href="tel:+919334485893" className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-50 transition">
              Call Now: +91 9334485893
            </a>
            <a href="mailto:webmail@adyaraj.com" className="border-2 border-white bg-transparent text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white/10 transition">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
