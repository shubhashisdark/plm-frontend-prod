const steps = [
  {
    step: "01",
    title: "Search Properties",
    description: "Browse properties by location, price, and category.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Contact Owner",
    description: "Get in touch with verified owners and agents.",
    icon: "📞",
  },
  {
    step: "03",
    title: "Close the Deal",
    description: "Visit the property and finalize your decision.",
    icon: "🤝",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-blue-500">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-gray-900 text-semibold mt-2">
            Simple steps to find your perfect property
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.description}</p>
              <span className="block mt-4 text-red-500 font-bold">
                {item.step}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
