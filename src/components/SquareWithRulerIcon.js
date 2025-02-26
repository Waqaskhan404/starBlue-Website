import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";

const SquareWithRulerIcon = () => {
  return (
    <div className="bg-[#004712] text-white py-6">
      <div className="container flex flex-row justify-center gap-6 md:gap-12">
        {/* First Item */}
        <div className="flex flex-col items-center w-[8rem] md:w-[18rem]">
          <div className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border-[2px] md:border-[3px] border-[#b88650] flex items-center justify-center">
            <FontAwesomeIcon icon={faRulerCombined} className="text-[#b88650] text-xl md:text-5xl" />
          </div>
          <p className="text-[10px] md:text-lg text-center mt-2 leading-tight md:leading-normal">
            Over 10 million square feet of nursery land located in the UAE
          </p>
        </div>

        {/* Second Item */}
        <div className="flex flex-col items-center w-[8rem] md:w-[18rem]">
          <div className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border-[2px] md:border-[3px] border-[#b88650] flex items-center justify-center">
            <FontAwesomeIcon icon={faRulerCombined} className="text-[#b88650] text-xl md:text-5xl" />
          </div>
          <p className="text-[10px] md:text-lg text-center mt-2 leading-tight md:leading-normal">
            Over 5 million square feet of nursery land located overseas
          </p>
        </div>
      </div>
    </div>
  );
};

export default SquareWithRulerIcon;
