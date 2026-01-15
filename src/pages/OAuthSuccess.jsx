import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1️⃣ Read token from URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      navigate("/signin");
      return;
    }

    // 2️⃣ Save token
    localStorage.setItem("accessToken", token);

    // 3️⃣ Redirect to dashboard
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-lg font-semibold">Signing you in with Google…</p>
    </div>
  );
};

export default OAuthSuccess;
