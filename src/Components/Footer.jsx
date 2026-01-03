import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-primary/30 via-base-100 to-primary/10 text-base-content border-t border-base-300">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={Logo}
                alt="FinEase Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-extrabold text-primary">FinEase</span>
            </Link>
            <p className="text-sm text-base-content/80 max-w-xs">
              Master your money and{" "}
              <span className="text-primary font-semibold">live your dreams</span> —
              all from one smart financial dashboard.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <h3 className="font-bold text-lg text-primary border-b border-primary/30 pb-1">
              Contact & Legal
            </h3>
            <ul className="space-y-2 text-sm text-base-content/80">
              <li>
                Phone:{" "}
                <a
                  className="hover:text-primary transition-colors"
                  href="tel:+8801736093199"
                >
                  +880 1736 093199
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  className="hover:text-primary transition-colors"
                  href="mailto:rukhsathossain2811@gmail.com"
                >
                  rukhsathossain2811@gmail.com
                </a>
              </li>
              <li>Rangpur, Bangladesh</li>
              <li className="pt-2 flex flex-col space-y-1">
                <Link
                  to="/review"
                  className="hover:text-primary transition-colors"
                >
                  Add Review
                </Link>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <h3 className="font-bold text-lg text-primary border-b border-primary/30 pb-1">
              Follow Us
            </h3>
            <p className="text-sm text-base-content/80">
              Stay connected with us:
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/rukhsat.ruksathossain"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-base-200 hover:bg-primary/20 rounded-full transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <Link
                to="/"
                className="p-3 bg-base-200 hover:bg-primary/20 rounded-full transition-all duration-300"
              >
                <FaTwitter size={18} />
              </Link>
              <Link
                to="/"
                className="p-3 bg-base-200 hover:bg-primary/20 rounded-full transition-all duration-300"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                to="/"
                className="p-3 bg-base-200 hover:bg-primary/20 rounded-full transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-base-300 pt-6 text-center">
          <p className="text-sm text-base-content/70">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-primary">FinEase</span>. All
            rights reserved.
          </p>
          <p className="text-xs text-base-content/60 mt-1">
            Designed & built by Md. Rukhsat Hossain Jim
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;