import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons';

const SquareWithRulerIcon = () => {
  return (
    <div className="bg-[#004712]  text-white ">
        <div className='container p-8 flex items-center space-x-10'>
      {/* First Item */}
      <div className="flex items-center space-x-4">
        <div className="w-[5rem] h-[5rem] border-[3px] border-[#b88650] flex items-center justify-center">
          <FontAwesomeIcon icon={faRulerCombined} className="text-[#b88650] text-5xl" />
        </div>
        <div className='w-[28rem]'>
        <p className="text-lg">Over 10 million square feet of nursery land located in the UAE</p>
        </div>
      </div>
      
      {/* Second Item */}
      <div className="flex items-center space-x-4">
        <div className="w-[5rem] h-[5rem] border-[3px] border-[#b88650] flex items-center justify-center">
          <FontAwesomeIcon icon={faRulerCombined} className="text-[#b88650] text-5xl" />
        </div>
        <div className='w-[27rem]'>
        <p className="text-lg">Over 5 million square feet of nursery land located overseas</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SquareWithRulerIcon;