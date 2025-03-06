"use client";

import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FontAwesomeIcon = dynamic(() =>
  import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

const Header = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  

  return (
    <header className="bg-[#004712] font-poppins">
      <div className="container p-3 flex flex-col md:flex-row items-center justify-between text-white text-[10px] sm:text-xs md:text-[10px] lg:text-sm">
        
        {/* Social Media Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://web.facebook.com/starbloomlandscaping/?_rdc=1&_rdr#" target="_blank" className="w-8 h-8 flex items-center justify-center rounded-full hover:text-[#AB7F46]">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="https://www.instagram.com/starbloomlandscaping" className="w-8 h-8 flex items-center justify-center rounded-full hover:text-[#AB7F46]" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.linkedin.com/company/star-bloom-landscaping-agricultural-services/about/?viewAsMember=true" className="w-8 h-8 flex items-center justify-center rounded-full hover:text-[#AB7F46]" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>

        {/* Email & Phone */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="hover:text-[#AB7F46]" />
            <span>starbloomlandscaping@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} size="lg" className="hover:text-[#AB7F46]" />
            <span>+971 5082 51751</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full sm:w-2/3 md:w-[15rem] lg:w-[22rem] mt-3 md:mt-0">
          <input
            type="text"
            placeholder="Search a plant"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-[0.4rem] pl-4 bg-[#F1F2F3] rounded-l-[1.5rem] w-full text-black outline-none focus:ring-0 border border-r-0 border-[#AAAAAA] placeholder:text-black"
          />
          <button
            onClick={handleSearch}
            className="bg-[#54595F] text-white px-4 py-[0.4rem] rounded-r-[1.5rem] border border-l-0 border-[#AAAAAA] font-medium"
          >
            Search
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
