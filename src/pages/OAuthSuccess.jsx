import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../config/api";

const OAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      navigate("/signin");
      return;
    }

    // 1️⃣ Save token
    localStorage.setItem("accessToken", token);

    // 2️⃣ Fetch logged-in user (CRITICAL STEP)
    API.get("/auth/me")
      .then((res) => {
        console.log("AUTH ME RESPONSE:", res.data);

        const user = res.data.user;

        // 3️⃣ Save user (THIS WAS MISSING)
        localStorage.setItem("user", JSON.stringify(user));

        // 4️⃣ Role-based redirect
        if (user.role === "Admin") {
          navigate("/admin");
        } else if (user.role === "Agent") {
          navigate("/agent");
        } else {
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.error("AUTH ME FAILED", err);
        navigate("/signin");
      });

    // Clean URL
    window.history.replaceState({}, "", "/");
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-lg font-semibold">Signing you in…</p>
    </div>
  );
};

export default OAuthSuccess;
