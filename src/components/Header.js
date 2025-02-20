// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="container p-3 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Social Media Icons */}
          <div className="flex gap-2">
            <a href="#" className="text-white text-sm w-8 h-8 flex items-center justify-center rounded-full hover:text-[#AB7F46]"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
            <a href="#" className="text-white text-sm w-8 h-8 flex items-center justify-center rounded-full hover:text-[#AB7F46]"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            <a href="#" className="text-white text-sm w-8 h-8 flex items-center justify-center rounded-full hover:text-[#AB7F46]"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
          </div>
      </div>
              {/* Email */}
              <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-white hover:text-[#AB7F46]" />
          <span className="text-white text-base">nursery.enquiry@desertgroup.ae</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} size="lg" className="text-white hover:text-[#AB7F46]" />
          <span className="text-white text-base">+971 4 2891 063</span>
        </div>
        
      {/* Search Bar */}
      <div className="flex items-center">
        <input 
          type="text" 
          placeholder="Search a plant" 
          className="p-[0.4rem] pl-4 text-[90%] bg-[#F1F2F3] rounded-l-[1.5rem] w-[22rem] border border-r-0 border-[#AAAAAA] placeholder:text-[#AAAAAA]"
        />
        <button className="bg-[#54595F] text-[90%] text-white px-[0.4rem] py-[0.4rem] rounded-r-[1.5rem] border border-l-0 border-[#AAAAAA]" style={{ paddingLeft: '1rem', paddingRight: '1.5rem',fontWeight:"500" }}>Search</button>
      </div>
      </div>
      </header>
    );
  };
  
  export default Header;
  

