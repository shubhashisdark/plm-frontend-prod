import Navbar from "../Layout/Navbar";

export default function Rent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Rent Properties</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border rounded-xl shadow-sm">
            <div className="h-40 bg-gray-200 rounded-t-xl" />
            <div className="p-4">
              <h3 className="font-semibold">2 BHK Apartment</h3>
              <p className="text-sm text-gray-600">₹18,000 / month · Pune</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
