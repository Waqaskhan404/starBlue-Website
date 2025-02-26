'use client'

import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const FontAwesomeIcon = dynamic(() =>
  import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

const Header = () => {
  return (
    <header className="bg-[#004712] font-poppins">
      <div className="container p-3 flex flex-col md:flex-row items-center justify-between text-white text-[10px] sm:text-xs md:text-[10px] lg:text-sm">
        
        {/* Social Media Icons (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:text-[#AB7F46]">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:text-[#AB7F46]">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:text-[#AB7F46]">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>

        {/* Email & Phone (Centered on Mobile) */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="hover:text-[#AB7F46]" />
            <span className="text-[10px] sm:text-xs md:text-[10px] lg:text-sm">nursery.enquiry@desertgroup.ae</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} size="lg" className="hover:text-[#AB7F46]" />
            <span className="text-[10px] sm:text-xs md:text-[10px] lg:text-sm">+971 4 2891 063</span>
          </div>
        </div>

        {/* Search Bar (Responsive Width) */}
        <div className="flex items-center w-full sm:w-2/3 md:w-[15rem] lg:w-[22rem] mt-3 md:mt-0">
          <input
            type="text"
            placeholder="Search a plant"
            className="p-[0.4rem] pl-4 text-[10px] sm:text-xs md:text-[10px] lg:text-sm bg-[#F1F2F3] rounded-l-[1.5rem] w-full border border-r-0 border-[#AAAAAA] placeholder:text-[#AAAAAA]"
          />
          <button className="bg-[#54595F] text-[10px] sm:text-xs md:text-[10px] lg:text-sm text-white px-4 py-[0.4rem] rounded-r-[1.5rem] border border-l-0 border-[#AAAAAA] font-medium">
            Search
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
