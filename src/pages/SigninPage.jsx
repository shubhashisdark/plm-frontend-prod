import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiPhone, FiUser, FiMail, FiCheckCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Navbar from "../Layout/Navbar";
import API from "../config/api";

/* Images must be inside /public */
const SLIDER_IMAGES = [
  "/luxurylogin.jpg",
  "/interiorloginn.jpg",
  "/interiorlogin.jpg",
];

const ROLES = ["Customer", "Agent", "Admin"];

const SigninPage = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState("signin");
  const [role, setRole] = useState("Customer");

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // ================= GOOGLE LOGIN =================
  const googleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  // ================= SEND OTP =================
  const sendOTP = async () => {
    if (!phone) {
      alert("Please enter phone number");
      return;
    }

    try {
      setLoading(true);
      await API.post("/auth/send-otp", {
        phone,
        type: "signin",
      });
      setOtpSent(true);
      alert("OTP sent successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // ================= VERIFY OTP =================
  const verifyOTP = async () => {
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/auth/verify-otp", {
        phone,
        otp,
      });

      localStorage.setItem("accessToken", res.data.data.accessToken);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // ================= SIGNUP =================
  const signup = async () => {
    if (!fullName || !email || !phone) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await API.post("/auth/signup", {
        fullName,
        email,
        phone,
        role,
      });
      alert("Account created. Please verify OTP.");
      setMode("signin");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />

      {/* LEFT SLIDER */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-1/2 h-screen">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          effect="fade"
          loop
          className="h-screen w-full"
        >
          {SLIDER_IMAGES.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt="Property"
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* RIGHT AUTH */}
      <div className="flex min-h-screen items-center justify-center px-4 lg:ml-[50%]">
        <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-xl p-5 sm:p-8">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="mx-auto h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
              Z
            </div>
            <h2 className="mt-3 text-xl sm:text-2xl font-bold">
              {mode === "signin" ? "Sign in" : "Create account"}
            </h2>
          </div>

          {/* Role Selector */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {ROLES.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`py-2 rounded-xl text-sm ${
                  role === r
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-5">
            <Tab active={mode === "signin"} onClick={() => setMode("signin")} label="Sign In" />
            <Tab active={mode === "signup"} onClick={() => setMode("signup")} label="Sign Up" />
          </div>

          {/* Google */}
          <button
            onClick={googleLogin}
            className="w-full flex items-center justify-center gap-3 border rounded-full py-3 mb-5"
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>

          {/* Signup Fields */}
          {mode === "signup" && (
            <>
              <Input icon={<FiUser />} placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              <Input icon={<FiMail />} placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </>
          )}

          {/* Phone */}
          <Input icon={<FiPhone />} placeholder="+91 8480******" value={phone} onChange={(e) => setPhone(e.target.value)} />

          {/* Action Button */}
          <button
            onClick={mode === "signin" ? sendOTP : signup}
            disabled={loading}
            className="w-full mt-4 bg-blue-600 text-white rounded-full py-3 font-semibold"
          >
            {loading ? "Please wait..." : mode === "signin" ? "Send OTP" : "Create Account"}
          </button>

          {/* OTP */}
          {otpSent && (
            <>
              <Input placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
              <button
                onClick={verifyOTP}
                className="w-full mt-4 bg-green-500 text-white rounded-full py-3 font-semibold"
              >
                Verify OTP
              </button>
            </>
          )}

          {/* Footer */}
          <p className="text-xs text-center text-gray-500 mt-6">
            Logging in as <strong>{role}</strong>
          </p>

          <p className="text-center text-sm mt-3">
            <Link to="/" className="text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

/* ================= COMPONENTS ================= */

const Tab = ({ active, label, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 py-2 text-sm rounded-full ${
      active ? "bg-white shadow text-blue-600" : "text-gray-500"
    }`}
  >
    {label}
  </button>
);

const Input = ({ icon, ...props }) => (
  <div className="relative mb-3">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      {icon}
    </span>
    <input
      {...props}
      className="w-full border rounded-full pl-11 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

export default SigninPage;
