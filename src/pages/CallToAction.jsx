const CallToAction = () => {
  return (
    <section className="py-20 bg-linear-to-r from-blue-500 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Find or List Your Property?
        </h2>

        <p className="mt-4 text-red-100 max-w-2xl mx-auto">
          Join thousands of users who trust our platform for buying, renting,
          and selling properties.
        </p>

        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Explore Properties
          </button>

          <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Post Property
          </button>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
