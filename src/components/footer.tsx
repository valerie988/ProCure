import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-linear-to-b from-blue-950 to-black text-blue-300">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <img src="src/assets/images/logo1.png" alt=""  className="w-40 "/>
            <p className=" text-sm text-gray-400 leading-relaxed">
              Simplifying procurement for modern organizations.  
              Connect with suppliers, streamline purchasing, and manage operations efficiently.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition cursor-pointer">
                <span className="text-sm">in</span>
              </div>

              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition cursor-pointer">
                <span className="text-sm">f</span>
              </div>

              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition cursor-pointer">
                <span className="text-sm">x</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-5">Navigation</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition hover:translate-x-1 inline-block">
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-white transition hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/blog" className="hover:text-white transition hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5">Company</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/partners" className="hover:text-white transition hover:translate-x-1 inline-block">
                  Partners
                </Link>
              </li>

              <li>
                <Link to="/contacts" className="hover:text-white transition hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>

              <li>
                <span className="text-gray-400">
                  Careers
                </span>
              </li>

              <li>
                <span className="text-gray-400">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">Contact</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>📍 Yaounde, Cameroon</li>
              <li>📧 procuresolutions@hotmail.com</li>
              <li>📞 +237 658 242 012</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Procure. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition">
              Terms
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Privacy
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Cookies
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;