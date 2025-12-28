const properties = [
  {
    id: 1,
    title: "Modern 2BHK Apartment",
    location: "Mumbai, Maharashtra",
    price: "₹25,000 / month",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    location: "Bengaluru, Karnataka",
    price: "₹1.2 Cr",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 3,
    title: "Spacious Office Space",
    location: "Pune, Maharashtra",
    price: "₹60,000 / month",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },
  {
    id: 4,
    title: "Cozy 1BHK Studio",
    location: "Chennai, Tamil Nadu",
    price: "₹12,000 / month",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: 5,
    title: "Elegant 3BHK Condo",
    location: "Hyderabad, Telangana",
    price: "₹45,000 / month",   
    image:
      "https://volzero.com/img/article/101136_banner.jpg",
  },
  {
    id: 6,
    title: "Commercial Retail Space",
    location: "Delhi, NCR",
    price: "₹80,000 / month",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold p-1 transition-transform duration-300 hover:scale-[1.25]">Featured Properties</h2>
          <p className="text-gray-600 font-semibold">
            Handpicked properties just for you
          </p>
        </div>

        {/* Property Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
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

                <p className="text-sm text-gray-500 mt-1">
                  {property.location}
                </p>

                <p className="text-red-500 font-semibold mt-3">
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

export default FeaturedProperties;
