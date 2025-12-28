const benefits = [
  {
    title: "Verified Listings",
    description: "Every property is verified to ensure authenticity.",
    icon: "✔️",
  },
  {
    title: "Trusted Agents",
    description: "Work with reliable property owners and agents.",
    icon: "🤝",
  },
  {
    title: "Advanced Filters",
    description: "Find properties easily using smart filters.",
    icon: "⚙️",
  },
  {
    title: "Secure Platform",
    description: "Your data and interactions are fully protected.",
    icon: "🔒",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="text-gray-600 mt-2">
            Benefits that make us different
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 mt-2 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
