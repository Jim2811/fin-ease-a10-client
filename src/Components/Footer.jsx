import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 text-base-content ">
      <div className="w-full mx-auto px-6 py-10">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" className="w-15" />
                </Link>
                <div>
                  <h2 className="text-xl font-bold text-primary">FinEase</h2>
                  <p className="text-sm opacity-99">
                    Master Your Money,{" "}
                    <span className="text-primary font-bold">
                      Live Your Dreams
                    </span>
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm opacity-80">
                © {new Date().getFullYear()} FinEase. All rights reserved.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">Contact & Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  Phone:{" "}
                  <a className="link link-hover" href="tel:+8801736093199">
                    +880 1736093199
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    className="link link-hover"
                    href="mailto:rukhsathossain2811@gmail.com"
                    target="_blank"
                  >
                    rukhsathossain2811@gmail.com
                  </a>
                </li>
                <li>Rangpur, Bangladesh</li>
                <li className="pt-2">
                  <Link to={"/"} className="link link-hover block">
                    Terms & Conditions
                  </Link>
                  <Link to="/" className="link link-hover block">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
              <p className="text-sm opacity-80 mb-4">Stay connected with us</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/rukhsat.ruksathossain"
                  target="_blank"
                  className="btn btn-ghost btn-circle"
                >
                  <FaFacebookF size={18} />
                </a>
                <Link to="/" className="btn btn-ghost btn-circle">
                  <FaTwitter size={18} />
                </Link>
                <Link to="/" className="btn btn-ghost btn-circle">
                  <FaInstagram size={18} />
                </Link>
                <Link to="/" className="btn btn-ghost btn-circle">
                  <FaLinkedinIn size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-center text-sm opacity-70">
          Made by Md. Rukhsat Hossain Jim
        </div>
      </div>
    </footer>
  );
};

export default Footer;
