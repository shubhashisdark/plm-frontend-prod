import Navbar from "../Layout/Navbar";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
        <Navbar />
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input className="w-full border p-2 rounded" placeholder="Your Name" />
        <input className="w-full border p-2 rounded" placeholder="Email" />
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Your Message"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}
