// app/components/GovernmentPartner.tsx
"use client";

import Image from "next/image";
import { ShieldCheck, Award, FileCheck, Building2 } from "lucide-react";

export default function GovernmentPartner() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Content */}
        <div className="space-y-6">
          <span
            className="px-4 py-2 text-sm font-semibold text-orange-700 rounded-full
            bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
          >
            GOVERNMENT SPECIALIST
          </span>

          <h2 className="text-3xl mt-4 md:text-4xl font-bold text-gray-900">
            Exclusive Government <br /> Construction Partner
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Established in 2005, we exclusively serve government departments
            including Railways, Education, Health, and Public Works. Our
            specialized approach ensures compliance with all government
            standards and regulations.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 text-gray-800 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-orange-500" />
              Government Only
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              Class A Licensed
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-500" />
              ISO Certified
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-orange-500" />
              CPWD Approved
            </div>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md transition">
            Learn More About Us
          </button>
        </div>

        {/* Right Image with Tag */}
        <div className="relative rounded-2xl shadow-lg border-0">
  <Image
    src="/images/GovernmentPartner/image.png"
    alt="Government construction team"
    width={600}
    height={400}
    className="w-full h-auto object-cover rounded-2xl"
  />

  <div className="absolute -bottom-5 -left-5 bg-orange-500 text-white px-5 py-3 rounded-lg shadow-lg">
    <p className="text-2xl font-bold">19+</p>
    <p className="text-sm">Years of Excellence</p>
  </div>
</div>
      </div>
    </section>
  );
}
