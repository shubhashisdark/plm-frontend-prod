import Navbar from "../Layout/Navbar";


export default function Buy() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Buy Properties</h1>

      {/* Filters */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <input className="border p-2 rounded" placeholder="Location" />
        <input className="border p-2 rounded" placeholder="Budget" />
        <select className="border p-2 rounded">
          <option>Property Type</option>
          <option>Apartment</option>
          <option>Villa</option>
        </select>
        <button className="bg-blue-600 text-white rounded px-4">
          Search
        </button>
      </div>

      {/* Listings */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="border rounded-xl overflow-hidden">
            <div className="h-40 bg-gray-200" />
            <div className="p-4">
              <h3 className="font-semibold">Luxury Flat</h3>
              <p className="text-gray-600 text-sm">₹75 Lakh · Mumbai</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
