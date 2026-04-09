import { Send, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  const footerData = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Support Policy", href: "/support" },
        { label: "Return Policy", href: "/returnPolicy" },
        { label: "Privacy Policy", href: "/privacy&policy" },
      ],
    },
    {
      title: "My Account",
      links: [
        { label: "Order History", href: "/orderHistory" },
        { label: "My Wishlist", href: "/myWishlist" },
        { label: "Track Order", href: "/trackOrder" },
        { label: "Logout", href: "/logout" },
      ],
    },
    {
      title: "Seller Zone",
      links: [
        { label: "Become a Seller", href: "/applyNow" },
        { label: "Seller Policy", href: "/sellerPolicy" },
        { label: "Seller App", href: "/sellerApp" },
        { label: "Delivery App", href: "/deliveryBoyApp" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Demo Address, Cumilla" },
        { label: "+88 125463112" },
        { label: "demo.example@gmail.com" },
      ],
    },
  ];

  const socialData = [
    {
      id: 1,
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com",
      color: "hover:text-[#1877F2]",
    },
    {
      id: 2,
      name: "Twitter",
      icon: FaXTwitter,
      href: "https://twitter.com",
      color: "hover:text-black",
    },
    {
      id: 3,
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com",
      color: "hover:text-[#E4405F]",
    },
    {
      id: 4,
      name: "Youtube",
      icon: FaYoutube,
      href: "https://youtube.com",
      color: "hover:text-[#FF0000]",
    },
    {
      id: 5,
      name: "Linkedin",
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
      color: "hover:text-[#0A66C2]",
    },
  ];

  return (
    <footer className="bg-[#FBFBFA] border-t border-[#E9E9E7] pt-16 pb-8 font-sans text-[#37352F]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#37352F] rounded-md flex items-center justify-center">
                <span className="text-xl font-bold text-white">N</span>
              </div>
              <span className="text-xl font-bold tracking-tighter">
                NextCart
              </span>
            </Link>
            <p className="text-[#787774] text-sm max-w-sm leading-relaxed">
              The all-in-one system for your eCommerce business. Minimalist,
              fast, and secure.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#37352F] uppercase tracking-wider">
                Newsletter
              </h4>
              <div className="flex max-w-md group">
                <input
                  type="email"
                  placeholder="Email address..."
                  className="w-full bg-white border border-[#E9E9E7] px-4 py-2 text-sm rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#2EAADC]/20 transition-all"
                />
                <button className="bg-[#37352F] hover:bg-black text-white px-4 py-2 rounded-r-md transition-colors flex items-center gap-2 text-sm font-medium">
                  <Send size={14} /> Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Socials & Apps */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-7 sm:flex-row">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#37352F] uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex gap-2">
                {socialData?.map((social) => {
                  const IconComponent = social.icon; // কম্পোনেন্ট হিসেবে আইকন সেট করা
                  return (
                    <Link
                      key={social.id}
                      href={social?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social?.name}
                      className={`
              p-2 rounded-md transition-all duration-200
              text-[#787774] bg-transparent
              hover:bg-[#F1F1EF]
              ${social?.hoverColor}
              active:scale-90
            `}
                    >
                      <IconComponent size={18} />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#37352F] uppercase tracking-wider">
                Mobile Experience
              </h4>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E9E9E7] rounded-md hover:bg-[#F1F1EF] transition-all group">
                  <Smartphone size={16} className="group-hover:text-blue-600" />
                  <span className="text-xs font-bold">App Store</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E9E9E7] rounded-md hover:bg-[#F1F1EF] transition-all group">
                  <Smartphone
                    size={16}
                    className="group-hover:text-green-600"
                  />
                  <span className="text-xs font-bold">Play Store</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-[#E9E9E7]">
          {footerData.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h5 className="text-[12px] font-bold text-[#ADADA7] uppercase tracking-[0.1em]">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {link.href ? (
                      <Link
                        to={link.href}
                        className="text-sm text-[#37352F] hover:text-blue-600 transition-colors block py-0.5"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-sm text-[#787774] block py-0.5">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#F1F1EF] flex flex-col md:flex-row justify-between items-center gap-4 text-[#ADADA7]">
          <p className="text-xs">
            © {new Date().getFullYear()} Next Cart. Built with precision in
            Cumilla.
          </p>
          <div className="flex items-center gap-6">
            <img
              src="https://i.ibb.co/5Y62rmL/Nank-P5em-HOKcd-CWq-X6-Bks1-Qa63i-Dgo-LA6-WPGn7oe.png"
              alt="Payment Methods"
              className="h-5 transition-all opacity-50 cursor-pointer grayscale hover:grayscale-0"
            />
            <div className="flex gap-4 text-xs font-medium tracking-widest uppercase">
              <span className="hover:text-[#37352F] cursor-pointer transition-colors">
                Terms
              </span>
              <span className="hover:text-[#37352F] cursor-pointer transition-colors">
                Privacy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
