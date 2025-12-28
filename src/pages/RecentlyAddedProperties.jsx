const recentProperties = [
  {
    id: 1,
    title: "3BHK Luxury Apartment",
    location: "Hyderabad",
    price: "₹45,000 / month",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Independent Villa",
    location: "Chennai",
    price: "₹1.8 Cr",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  },
  {
    id: 3,
    title: "Commercial Office Space",
    location: "Noida",
    price: "₹75,000 / month",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },
];

const RecentlyAddedProperties = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Recently Added Properties</h2>
          <p className="text-gray-600 mt-2">
            Explore the latest listings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentProperties.map((property) => (
            <div
              key={property.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {property.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {property.location}
                </p>
                <p className="text-blue-500 font-semibold mt-2">
                  {property.price}
                </p>

                <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentlyAddedProperties;
