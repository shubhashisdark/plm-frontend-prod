const categories = [
  {
    title: "Rent",
    description: "Find rental homes & offices",
    icon: "🏠",
  },
  {
    title: "Buy",
    description: "Purchase your dream property",
    icon: "🏢",
  },
  {
    title: "Sell",
    description: "List and sell your property",
    icon: "💼",
  },
];

const PropertyCategories = () => {
  return (
    <section className="py-16 bg-blue-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-underline hover:scale-95 transition-transform duration-300">Property Categories</h2>
          <p className="text-black mt-2">
            Choose what you’re looking for
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-5xl mb-4 hover:scale-115 transition-transform duration-300">{cat.icon}</div>
              <h3 className="text-xl font-semibold">{cat.title}</h3>
              <p className="text-gray-500 mt-2">{cat.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertyCategories;
