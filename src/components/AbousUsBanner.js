const AboutUsBanner = () => {
    return (
        <div 
            className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/about-us-banner.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h1 className="relative text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center px-4">
                About Us
            </h1>
        </div>
    );
};

export default AboutUsBanner;