import Navbar from "../Layout/Navbar";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-6">
        <Navbar />
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-gray-600">
        We are a trusted property marketplace helping users buy, rent,
        and sell properties across India.
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="p-4 border rounded-xl">
          <h3 className="font-semibold">Verified Listings</h3>
        </div>
        <div className="p-4 border rounded-xl">
          <h3 className="font-semibold">Trusted Agents</h3>
        </div>
        <div className="p-4 border rounded-xl">
          <h3 className="font-semibold">Easy Search</h3>
        </div>
      </div>
    </div>
  );
}
