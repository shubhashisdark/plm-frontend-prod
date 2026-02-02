import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Layout/Navbar";


/* Images must exist in /public folder */
const SLIDER_IMAGES = [
  "/property1.jpg",
  "/property2.jpg",
  "/property3.jpg",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [slide, setSlide] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  // 🔐 Load user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/signin");
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  // 🎞 Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

      {/* ================= HEADER ================= */}
      <div className="sticky top-0 z-50 backdrop-blur bg-white/80 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Welcome back, {user.fullName} 👋
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Role: <span className="font-semibold text-indigo-600">{user.role}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpenMenu(true)}
              className="lg:hidden bg-indigo-600 text-white px-3 py-2 rounded-lg"
            >
              ☰
            </button>

            <button
              onClick={() => {
                localStorage.clear();
                navigate("/signin");
              }}
              className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>

        </div>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative h-52 sm:h-64 md:h-72 overflow-hidden shadow-lg">
        {SLIDER_IMAGES.map((img, index) => (
          <img
            key={img}
            src={img}
            alt="Property"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              slide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
          <h2 className="text-lg sm:text-2xl font-bold">
            Find your dream property 🏡
          </h2>
          <p className="text-xs sm:text-sm text-gray-200">
            Buy • Rent • Invest with confidence and ease to ease.
          </p>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 py-6 sm:py-8">

        {/* ================= SIDEBAR ================= */}
        <div
          className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white/90 backdrop-blur shadow-lg
          transform ${openMenu ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 lg:translate-x-0 lg:rounded-2xl
          p-5 space-y-4`}
        >
          <button
            onClick={() => setOpenMenu(false)}
            className="lg:hidden text-right w-full text-gray-500"
          >
            ✕ Close
          </button>

          <SidebarItem label="Dashboard" />
          <SidebarItem label="My Profile" />
          <SidebarItem label="Search Properties" />
          <SidebarItem label="Saved Properties ❤️" />
          <SidebarItem label="My Enquiries" />
          <SidebarItem label="Bookings / Visits" />
          <SidebarItem label="Notifications 🔔" />
          <SidebarItem label="Reviews ⭐" />
          <SidebarItem label="Help & Support" />
        </div>

        {/* ================= MAIN ================= */}
        <div className="lg:col-span-3 space-y-6">

          <Card title="Account Status" accent="blue">
            <Status label="Email Verified" value={user.isEmailVerified} />
            <Status label="Phone Verified" value={user.isPhoneVerified} />
            <p className="text-xs text-gray-500 mt-2">
              Last Login: {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : "—"}
            </p>
          </Card>

          <Card title="My Profile" accent="indigo">
            <ProfileRow label="Full Name" value={user.fullName} />
            <ProfileRow label="Email" value={user.email} />
            <ProfileRow label="Phone" value={user.phone || "Not added"} />
            <button className="mt-4 text-indigo-600 text-sm hover:underline">
              Edit Profile
            </button>
          </Card>

          <Card title="Search Properties" accent="emerald">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <Input placeholder="Buy / Rent" />
              <Input placeholder="City" />
              <Input placeholder="Price Range" />
              <Input placeholder="BHK / Type" />
            </div>
            <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg">
              Search
            </button>
          </Card>

          <Card title="Saved Properties ❤️" accent="rose">
            <p className="text-gray-500 text-sm">
              You have no saved properties yet.
            </p>
          </Card>

          <Card title="My Enquiries" accent="amber">
            <p className="text-gray-500 text-sm">
              No enquiries yet. Start exploring properties!
            </p>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* ================= COMPONENTS ================= */

const SidebarItem = ({ label }) => (
  <div className="cursor-pointer px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">
    {label}
  </div>
);

const Card = ({ title, accent, children }) => {
  const colors = {
    blue: "border-blue-500",
    indigo: "border-indigo-500",
    emerald: "border-emerald-500",
    rose: "border-rose-500",
    amber: "border-amber-500",
  };

  return (
    <div className={`bg-white rounded-xl sm:rounded-2xl shadow p-4 sm:p-6 border-l-4 ${colors[accent]}`}>
      <h2 className="font-bold text-lg mb-4 text-gray-800">{title}</h2>
      {children}
    </div>
  );
};

const Status = ({ label, value }) => (
  <p className="text-sm">
    {label}:{" "}
    <span className={value ? "text-green-600" : "text-red-500"}>
      {value ? "Verified ✅" : "Not Verified ❌"}
    </span>
  </p>
);

const ProfileRow = ({ label, value }) => (
  <p className="text-sm text-gray-700">
    <strong>{label}:</strong> {value}
  </p>
);

const Input = (props) => (
  <input
    {...props}
    className="border rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-indigo-400 outline-none"
  />
);
