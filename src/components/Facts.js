const Facts = () => {
  return (
    <div className="bg-[url('/facts-bg.png')] bg-cover bg-center">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-center pt-12 sm:pt-20">
          <div className="max-w-2xl text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-[rgb(0,71,18)] pb-2 sm:pb-4">
            STAR BLOOM LANDSCAPE AND AGRICULTURAL SERVICES
            </h1>
            {/* <h2 className="text-lg sm:text-[22px] text-[#b88650] font-semibold pb-4 sm:pb-8">
              Best & Professional  Nursery in the United Arab Emirates
            </h2> */}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-8 sm:gap-12 md:gap-16 px-4">
          {/* Left Section */}
          <div className="flex flex-col space-y-4 sm:space-y-6 text-left w-full lg:w-1/3">
            <h3 className="text-xl sm:text-[25px] font-bold text-[#454545] text-center lg:text-left">
              An oasis of green in the heart of the desert
            </h3>
            <hr className="w-40 border border-[#454545] mx-auto lg:mx-0" />
            <h4 className="text-xl sm:text-[25px] font-bold text-[#454545] text-center lg:text-left">
              Renowned and recognized for quality
            </h4>
          </div>

          {/* Middle Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="mt-2 sm:mt-4 text-sm sm:text-base text-[#7A7A7A] w-full sm:w-[80%]">
              Our inventory stocks over 4000 varieties of tropical, sub-tropical, native & adaptive plants and many richer collection of specimens with unique shapes and dimensions, and a wide range of specialties among which Mediterranean plants, bonsais, tropical climate indoor plants; a complete range at the best value for money.
            </p>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base text-[#7A7A7A] w-full sm:w-[84%]">
              Now more than ever, we are committed to help our customers and visitors to enjoy the benefits of bringing nature into their landscape and gardens.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-900">Largest</h2>
            <h2 className="text-5xl sm:text-[60px] leading-tight font-bold text-[#b88650]">
              nurseries
            </h2>
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-900">in the</h2>
            <h2 className="text-4xl sm:text-[45px] leading-tight font-bold text-green-900">
              UAE
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
