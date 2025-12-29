import Navbar from "../Layout/Navbar";

export default function Sell() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Post Your Property</h1>

      <form className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input className="w-full border p-2 rounded" placeholder="Property Title" />
        <input className="w-full border p-2 rounded" placeholder="Location" />
        <input className="w-full border p-2 rounded" placeholder="Price" />
        <select className="w-full border p-2 rounded">
          <option>Property Type</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Plot</option>
        </select>
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Property Description"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Submit Property
        </button>
      </form>
    </div>
  );
}
