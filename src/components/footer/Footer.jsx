// components/Footer.jsx
import "remixicon/fonts/remixicon.css";

const companyInfo = {
  name: "Adyaraj Developers",
  description:
    "A leading construction company specializing in government projects across Eastern India. We design, develop, and deliver quality infrastructure projects with excellence and innovation.",
  tagline: "DESIGN • DEVELOP • DELIVER",
};

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const contactInfo = {
  address: ["202, Vishnu Palace", "East Boring Canal Road", "Patna, Bihar - 800001"],
  phone: "+91 9334458593",
  email: "webmail@adyaraj.com",
  icons: {
    address: "ri-map-pin-line",
    phone: "ri-phone-line",
    email: "ri-mail-line",
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#0d1421] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3">
            {companyInfo.name}
          </h2>
          <p className="text-gray-300 leading-relaxed">{companyInfo.description}</p>
          <p className="mt-3 font-semibold text-orange-400">{companyInfo.tagline}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-orange-400">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <i
                className={`${contactInfo.icons.address} w-8 h-8 flex items-center justify-center text-orange-400 text-2xl`}
              ></i>
              <span>
                {contactInfo.address.map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </span>
            </li>

            <li className="flex items-center space-x-3">
              <i
                className={`${contactInfo.icons.phone} w-8 h-8 flex items-center justify-center text-orange-400 text-2xl`}
              ></i>
              <a href={`tel:${contactInfo.phone}`} className="hover:text-orange-400">
                {contactInfo.phone}
              </a>
            </li>

            <li className="flex items-center space-x-3">
              <i
                className={`${contactInfo.icons.email} w-8 h-8 flex items-center justify-center text-orange-400 text-2xl`}
              ></i>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-orange-400">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-gray-400 text-sm py-4">
        © {new Date().getFullYear()} {companyInfo.name} Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
