

const Facts = () => {
  return (
    <div className="bg-[url('/facts-bg.png')] bg-cover bg-center ">
   <div className="container">
    <div className=" flex justify-center pt-20">
    {/* Left Section */}
    <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-[rgb(0,71,18)] pb-4 flex justify-center">Wahat Al Sahraa Nursery</h1>
        <h2 className="text-[22px] text-[#b88650] font-semibold pb-8 ">Best & Largest Plant Nursery in UAE and Middle East</h2>
      </div>
    </div>
    <div className="flex justify-center gap-[58px]">
      {/* Left Section */}
      <div className="flex flex-col space-y-6 max-w-sm text-left ">
        <h3 className="text-[25px] font-bold text-[#454545]">An oasis of green in the heart of the desert</h3>
        <hr className="w-[15rem] border-1 border-[#454545]" />
        <h4 className="text-[25px] font-bold text-[#454545]">Renowned and recognized for quality</h4>
      </div>
      
      {/* Middle Section */}
      <div className="max-w-2xl">
        <p className="mt-4 text-[16-px] text-[#7A7A7A] w-[80%]" style={{fontFamily:"Roboto,sans-serif",fontWeight:"400"}}>Our inventory stocks over 4000 varieties of tropical, sub-tropical, native & adaptive plants and many richer collection of specimens with unique shapes and dimensions, and a wide range of specialties among which Mediterranean plants, bonsais, tropical climate indoor plants; a complete range at the best value for money.</p>
        <p className="mt-4 text-[16-px] text-[#7A7A7A] w-[84%]" style={{fontFamily:"Roboto,sans-serif",fontWeight:"400"}}>Now more than ever, we are committed to help our customers and visitors to enjoy the benefits of bringing nature into their landscape and gardens.</p>
      </div>
      
      {/* Right Section */}
      <div className="max-w-sm">
        <h2 className="text-3xl font-semibold text-green-900">Largest</h2>
        <h2 className="text-[60px] leading-[4.5rem] font-bold text-[#b88650]">nurseries</h2>
        <h2 className="text-3xl font-semibold text-green-900">in the</h2>
        <h2 className="text-[45px] leading-[4.5rem] font-bold text-green-900">Middle East</h2>
      </div>
    </div>
    </div>
    </div>
  );
};



export default Facts