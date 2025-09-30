'use client';
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ClientFeedbackHero() {
  const [feedback, setFeedback] = useState("");
  const maxChars = 500;
  return (
    <>
    
    <Navbar/>
    <main className="pt-[80px]"> <main/>
    
    <section
      className="w-full h-[290px] flex items-center justify-center relative "
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url("https://readdy.ai/api/search-image?query=Customer%20feedback%20and%20testimonials%2C%20professional%20business%20meeting%2C%20client%20satisfaction%2C%20construction%20project%20review%2C%20happy%20clients%20and%20contractors%2C%20professional%20consultation&width=1920&height=600&seq=feedback-hero&orientation=landscape")
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="z-10 text-center w-full">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
          Client Feedback
        </h1>
        <p className="text-white text-lg mb-2 font-medium drop-shadow-lg">
          Your Opinion Matters to Us
        </p>
      </div>
    </section>
    </main>

    <section className="bg-[#fafbfc] py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#22223b] mb-2">Share Your Experience</h2>
        <p className="text-gray-600 mb-8">
          Help us improve our services by sharing your feedback about our construction projects
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 mb-12">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5 mb-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#22223b]">
                Full Name <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200  text-black"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#22223b]">
                Email Address <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200  text-black"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#22223b]">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200  text-black"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#22223b]">
                Project Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200  text-black"
                placeholder="Which project are you providing feedback for?"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#22223b]">
                Overall Rating <span className="text-orange-500">*</span>
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200  text-black"
                required
              >
                <option value="">Select rating</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#22223b]">
                Would you recommend us?
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200  text-black"
              >
                <option value="">Select option</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <div className="mb-1">
            <label className="block text-sm font-semibold mb-2 text-[#22223b]">
              Your Feedback <span className="text-orange-500">*</span>
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md px-4 py-2 min-h-[100px] text-sm resize-none outline-none focus:ring-2 focus:ring-orange-200  text-black"
              placeholder="Please share your detailed feedback about our services, quality, timeline, and overall experience..."
              maxLength={maxChars}
              required
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
            />
            <div className="text-right text-xs text-gray-500 mt-1">{feedback.length}/{maxChars} characters</div>
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-[#ec6608] text-white font-semibold rounded-md px-8 py-3 transition hover:bg-orange-700  text-black"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </section>

    <section className="py-12 bg-white">
      <div className="max-w-2xl mx-auto text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#22223B] mb-2">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-base">
          Read testimonials from our satisfied government clients
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-2 mt-6">
        {/* Testimonial 1 */}
        <div className="bg-[#f7f9fc] rounded-xl shadow-sm p-6 w-full max-w-sm mx-auto flex flex-col items-start">
          <div className="flex items-center mb-3">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20Indian%20doctor%20in%20white%20coat%2C%20medical%20superintendent%2C%20confident%20healthcare%20professional%2C%20hospital%20setting%2C%20professional%20portrait%20photography&width=80&height=80&seq=testimonial-doctor&orientation=squarish"
              alt="Dr. Rajesh Kumar"
              className="w-12 h-12 rounded-full border-2 border-gray-100 object-cover mr-3"
            />
            <div className="flex flex-col">
              <span className="font-bold text-[1rem] text-gray-900">Dr. Rajesh Kumar</span>
              <span className="text-xs text-[#656a74]">Medical Superintendent, DMCH</span>
              <span className="text-xs text-[#E18B34] mt-[-2px]">Surgical Block Construction</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({length: 5}).map((_, i) => (
              <span key={i} className="text-[#ffcc32] text-base">★</span>
            ))}
          </div>
          <p className="text-sm text-gray-700 font-medium italic">
            "Exceptional quality and timely delivery. The surgical block was completed with all modern facilities as promised."
          </p>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-[#f7f9fc] rounded-xl shadow-sm p-6 w-full max-w-sm mx-auto flex flex-col items-start">
          <div className="flex items-center mb-3">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20engineer%2C%20railway%20project%20manager%2C%20safety%20helmet%2C%20confident%20engineering%20professional%2C%20construction%20site%20background&width=80&height=80&seq=testimonial-engineer&orientation=squarish"
              alt="Eng. Priya Sharma"
              className="w-12 h-12 rounded-full border-2 border-gray-100 object-cover mr-3"
            />
            <div className="flex flex-col">
              <span className="font-bold text-[1rem] text-gray-900">Eng. Priya Sharma</span>
              <span className="text-xs text-[#656a74]">Railway Project Manager</span>
              <span className="text-xs text-[#E18B34] mt-[-2px]">Kodarma Station Development</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({length: 5}).map((_, i) => (
              <span key={i} className="text-[#ffcc32] text-base">★</span>
            ))}
          </div>
          <p className="text-sm text-gray-700 font-medium italic">
            "Outstanding work on the railway infrastructure. Professional team with excellent project management skills."
          </p>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-[#f7f9fc] rounded-xl shadow-sm p-6 w-full max-w-sm mx-auto flex flex-col items-start">
          <div className="flex items-center mb-3">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20Indian%20government%20official%2C%20district%20collector%2C%20formal%20attire%2C%20confident%20administrative%20officer%2C%20office%20setting&width=80&height=80&seq=testimonial-collector&orientation=squarish"
              alt="Mr. Anil Singh"
              className="w-12 h-12 rounded-full border-2 border-gray-100 object-cover mr-3"
            />
            <div className="flex flex-col">
              <span className="font-bold text-[1rem] text-gray-900">Mr. Anil Singh</span>
              <span className="text-xs text-[#656a74]">District Collector</span>
              <span className="text-xs text-[#E18B34] mt-[-2px]">Residential School Complex</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({length: 5}).map((_, i) => (
              <span key={i} className="text-[#ffcc32] text-base">★</span>
            ))}
          </div>
          <p className="text-sm text-gray-700 font-medium italic">
            "Adyaraj Developers delivered a world-class educational facility. Highly recommended for government projects."
          </p>
        </div>
      </div>
    </section>
    <Footer/>
    {/* <main/> */}
    </>
  );
}




