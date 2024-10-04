import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-5">
      <div className="">
        <h3 className="text-xl mb-2 font-semibold">Company Address</h3>
        <p>
          123 Street Name, City, State 12345 <br /> Email:
          contact@yourcompany.com <br />
          Phone: (123) 456-7890
        </p>
      </div>
      <div className="">
        <h3 className="text-xl mb-2 font-semibold">Quick Links</h3>
        <div className="flex flex-col">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms Of Service</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
      <div className="">
        <h3 className="text-xl mb-2 font-semibold">Follow Us</h3>
        <div className="flex gap-2 items-center">
          <span>
            <FaFacebook size={20} />
          </span>
          <span>
            <FaYoutube size={20} />
          </span>
          <span>
            <FaInstagram size={20} />
          </span>
          <span>
            <FaTwitter size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
