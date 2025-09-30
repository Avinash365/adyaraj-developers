
// pages/careers.js
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
export default function careers() {
  return (
    <>
    
    <Navbar/>  
   <main className="pt-[80px]"></main>
    <section
      className="w-full h-[320px] flex items-center justify-center relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url("https://readdy.ai/api/search-image?query=Professional%20construction%20team%20at%20work%2C%20diverse%20group%20of%20engineers%20and%20construction%20workers%2C%20modern%20construction%20site%2C%20teamwork%20and%20collaboration%2C%20career%20opportunities%20in%20construction%2C%20professional%20development%2C%20bright%20workplace%20environment&width=1920&height=600&seq=careers-hero&orientation=landscape");

        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="z-10 text-center w-full">
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2 drop-shadow-lg">
          Join Our Team
        </h1>
        <p className="text-white text-lg sm:text-xl font-medium drop-shadow-lg">
          Build Your Career with Eastern India's Leading Construction Company
        </p>
      </div>
    </section>

 {/* why choose */}

    <section className="py-12 bg-[#fafbfc] min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-6">
        <h2 className="text-4xl font-extrabold mb-2 text-[#22223B]">
          Why Choose Adyaraj Developers?
        </h2>
        <p className="text-gray-700 text-[1.07rem]">
          Join a company that values innovation, excellence, and professional growth. Be part of building India's infrastructure future.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-6 max-w-5xl mx-auto mt-6">
        {/* Competitive Salary */}
        <div className="bg-white rounded-[15px] shadow-lg p-8 flex flex-col items-center text-center transition-all">
          <span className="bg-[#ffe6ca] text-[#E9A663] rounded-[10px] mb-4 flex items-center justify-center w-12 h-12 text-3xl">
            <span className="inline-block align-middle">₹</span>
          </span>
          <h3 className="font-semibold text-lg mb-2 text-[#22223B]">Competitive Salary</h3>
          <p className="text-gray-700 text-[1.03rem]">
            Industry-leading compensation packages with performance bonuses
          </p>
        </div>
        {/* Health Insurance */}
        <div className="bg-white rounded-[15px] shadow-lg p-8 flex flex-col items-center text-center transition-all">
          <span className="bg-[#ffe6ca] text-[#E9A663] rounded-[10px] mb-4 flex items-center justify-center w-12 h-12 text-3xl">
            <span className="inline-block align-middle">🩺</span>
          </span>
          <h3 className="font-semibold text-lg mb-2 text-[#22223B]">Health Insurance</h3>
          <p className="text-gray-700 text-[1.03rem]">
            Comprehensive medical coverage for employees and their families
          </p>
        </div>
        {/* Professional Development */}
        <div className="bg-white rounded-[15px] shadow-lg p-8 flex flex-col items-center text-center transition-all">
          <span className="bg-[#ffe6ca] text-[#E9A663] rounded-[10px] mb-4 flex items-center justify-center w-12 h-12 text-3xl">
            <span className="inline-block align-middle">🎓</span>
          </span>
          <h3 className="font-semibold text-lg mb-2 text-[#22223B]">Professional Development</h3>
          <p className="text-gray-700 text-[1.03rem]">
            Training programs, certifications, and career advancement opportunities
          </p>
        </div>
        {/* Work-Life Balance */}
        <div className="bg-white rounded-[15px] shadow-lg p-8 flex flex-col items-center text-center transition-all">
          <span className="bg-[#ffe6ca] text-[#E9A663] rounded-[10px] mb-4 flex items-center justify-center w-12 h-12 text-3xl">
            <span className="inline-block align-middle">📅</span>
          </span>
          <h3 className="font-semibold text-lg mb-2 text-[#22223B]">Work-Life Balance</h3>
          <p className="text-gray-700 text-[1.03rem]">
            Flexible working arrangements and generous leave policies
          </p>
        </div>
        {/* Team Environment */}
        <div className="bg-white rounded-[15px] shadow-lg p-8 flex flex-col items-center text-center transition-all">
          <span className="bg-[#ffe6ca] text-[#E9A663] rounded-[10px] mb-4 flex items-center justify-center w-12 h-12 text-3xl">
            <span className="inline-block align-middle">🤝</span>
          </span>
          <h3 className="font-semibold text-lg mb-2 text-[#22223B]">Team Environment</h3>
          <p className="text-gray-700 text-[1.03rem]">
            Collaborative workplace with experienced professionals
          </p>
        </div>
        {/* Recognition Programs */}
        <div className="bg-white rounded-[15px] shadow-lg p-8 flex flex-col items-center text-center transition-all">
          <span className="bg-[#ffe6ca] text-[#E9A663] rounded-[10px] mb-4 flex items-center justify-center w-12 h-12 text-3xl">
            <span className="inline-block align-middle">🔦</span>
          </span>
          <h3 className="font-semibold text-lg mb-2 text-[#22223B]">Recognition Programs</h3>
          <p className="text-gray-700 text-[1.03rem]">
            Employee appreciation and achievement recognition initiatives
          </p>
        </div>
      </div>
    </section>
 

 {/* application process */}
    <section className="py-14 bg-[#fafbfc]">
      <div className="max-w-2xl mx-auto text-center mb-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#22223B] mb-2">
          Application Process
        </h2>
        <p className="text-gray-600 text-base md:text-[1.07rem]">
          Simple and transparent hiring process designed to find the best talent
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch mt-9 gap-6 md:gap-0">
        {/* Step 1 */}
        <div className="flex-1 flex flex-col items-center px-4">
          <div className="bg-[#ec6608] text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4 shadow-md">
            01
          </div>
          <h3 className="font-semibold text-[1.13rem] text-[#22223B] mb-2">Apply Online</h3>
          <p className="text-gray-700 leading-snug text-sm text-center">
            Submit your application through our career portal with your resume and cover letter
          </p>
        </div>
        {/* Step 2 */}
        <div className="flex-1 flex flex-col items-center px-4">
          <div className="bg-[#ec6608] text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4 shadow-md">
            02
          </div>
          <h3 className="font-semibold text-[1.13rem] text-[#22223B] mb-2">Initial Screening</h3>
          <p className="text-gray-700 leading-snug text-sm text-center">
            Our HR team reviews applications and conducts initial phone screening
          </p>
        </div>
        {/* Step 3 */}
        <div className="flex-1 flex flex-col items-center px-4">
          <div className="bg-[#ec6608] text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4 shadow-md">
            03
          </div>
          <h3 className="font-semibold text-[1.13rem] text-[#22223B] mb-2">Technical Interview</h3>
          <p className="text-gray-700 leading-snug text-sm text-center">
            Technical assessment and interview with department heads and project managers
          </p>
        </div>
        {/* Step 4 */}
        <div className="flex-1 flex flex-col items-center px-4">
          <div className="bg-[#ec6608] text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4 shadow-md">
            04
          </div>
          <h3 className="font-semibold text-[1.13rem] text-[#22223B] mb-2">Final Selection</h3>
          <p className="text-gray-700 leading-snug text-sm text-center">
            Final interview, reference checks, and job offer for successful candidates
          </p>
        </div>
      </div>
    </section>
  
    {/* Call to Action */}
    <section className="bg-[#ec6608] py-16 px-2">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Build Your Future?
        </h2>
        <p className="text-white text-base mb-7">
          Join our team and be part of India's infrastructure development. Send us your resume<br />
          and let's discuss your career opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-2">
          <button className="bg-white text-[#ec6608] font-medium rounded-md px-7 py-3 shadow hover:bg-orange-50 transition border border-white">
            Send Your Resume
          </button>
          <a
            href="tel:+919334485893"
            className="border border-white text-white font-medium rounded-md px-7 py-3 hover:bg-white hover:text-[#ec6608] transition shadow"
          >
            Call HR: +91 9334485893
          </a>
        </div>
      </div>
    </section>
      <Footer/>
    

</>

  );
}
