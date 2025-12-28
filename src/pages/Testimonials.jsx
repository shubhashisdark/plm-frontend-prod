const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Property Buyer",
    feedback:
      "This platform made my home search incredibly easy. The listings were genuine and well-organized.",
  },
  {
    name: "Anita Verma",
    role: "Tenant",
    feedback:
      "I found a rental apartment within days. The filters saved me a lot of time.",
  },
  {
    name: "Suresh Patel",
    role: "Property Owner",
    feedback:
      "Posting my property was simple, and I received genuine inquiries quickly.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Users Trust</h2>
          <p className="text-gray-600 mt-2">
            Trusted by buyers, tenants, and owners
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-600 italic">
                “{item.feedback}”
              </p>

              <div className="mt-4">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
