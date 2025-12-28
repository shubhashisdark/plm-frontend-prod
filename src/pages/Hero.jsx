const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-linear-to-r from-black via-gray-900 to-black text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Homes That Match <span className="text-blue-500">Your Lifestyle</span>
          </h1>

          <p className="mt-4 text-gray-300 max-w-lg">
            Buy, rent, or sell verified properties across top cities with ease and confidence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition">
              Explore Properties
            </button>
            <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium transition">
              Post Property
            </button>
          </div>

          {/* Key Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <p>✔ Verified Listings</p>
            <p>✔ Trusted Owners & Agents</p>
            <p>✔ Easy Search & Filters</p>
          </div>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-500">5,000+</h2>
            <p className="text-sm text-gray-300">Properties</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-500">1,200+</h2>
            <p className="text-sm text-gray-300">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-500">50+</h2>
            <p className="text-sm text-gray-300">Cities Covered</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
