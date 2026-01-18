import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Simple slider images (put in /public)
const SLIDER_IMAGES = [
  "/property1.jpg",
  "/property2.jpg",
  "/property3.jpg",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [slide, setSlide] = useState(0);

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
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* ===== HEADER ===== */}
      <div className="bg-white shadow p-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            Welcome back, {user.fullName} 👋
          </h1>
          <p className="text-sm text-gray-500">
            Role: <span className="font-semibold">{user.role}</span>
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.clear();
            navigate("/signin");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* ===== SLIDER ===== */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={SLIDER_IMAGES[slide]}
          alt="Property"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded">
          Find your dream property 🏡
        </div>
      </div>

      {/* ===== DASHBOARD BODY ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">

        {/* ===== LEFT MENU ===== */}
        <div className="bg-white rounded-xl shadow p-4 space-y-3">
          <MenuItem label="Dashboard" />
          <MenuItem label="My Profile" />
          <MenuItem label="Search Properties" />
          <MenuItem label="Saved Properties ❤️" />
          <MenuItem label="My Enquiries" />
          <MenuItem label="Bookings / Visits" />
          <MenuItem label="Notifications 🔔" />
          <MenuItem label="Reviews ⭐" />
          <MenuItem label="Help & Support" />
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="lg:col-span-3 space-y-6">

          {/* ACCOUNT STATUS */}
          <Card title="Account Status">
            <Status label="Email Verified" value={user.isEmailVerified} />
            <Status label="Phone Verified" value={user.isPhoneVerified} />
            <p className="text-sm text-gray-500">
              Last Login: {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : "—"}
            </p>
          </Card>

          {/* PROFILE */}
          <Card title="My Profile">
            <ProfileRow label="Full Name" value={user.fullName} />
            <ProfileRow label="Email" value={user.email} />
            <ProfileRow label="Phone" value={user.phone || "Not added"} />
            <button className="mt-3 text-blue-600 text-sm">
              Edit Profile
            </button>
          </Card>

          {/* PROPERTY BROWSING */}
          <Card title="Search Properties">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Input placeholder="Buy / Rent" />
              <Input placeholder="City" />
              <Input placeholder="Price Range" />
              <Input placeholder="BHK / Type" />
            </div>
            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded">
              Search
            </button>
          </Card>

          {/* WISHLIST */}
          <Card title="Saved Properties ❤️">
            <p className="text-gray-500 text-sm">
              You have no saved properties yet.
            </p>
          </Card>

          {/* ENQUIRIES */}
          <Card title="My Enquiries">
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

const MenuItem = ({ label }) => (
  <div className="cursor-pointer text-gray-700 hover:text-blue-600">
    {label}
  </div>
);

const Card = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow p-5">
    <h2 className="font-semibold text-lg mb-3">{title}</h2>
    {children}
  </div>
);

const Status = ({ label, value }) => (
  <p className="text-sm">
    {label}: {value ? "✅" : "❌"}
  </p>
);

const ProfileRow = ({ label, value }) => (
  <p className="text-sm">
    <strong>{label}:</strong> {value}
  </p>
);

const Input = (props) => (
  <input
    {...props}
    className="border rounded px-3 py-2 text-sm w-full"
  />
);
