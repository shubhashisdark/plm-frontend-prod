import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../config/api";

const OAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      navigate("/Signin");
      return;
    }

    // Save token
    localStorage.setItem("accessToken", token);

    // Fetch user
    API.get("/auth/me")
      .then((res) => {
        console.log("FULL /auth/me RESPONSE:", res.data);

        // ✅ THIS IS THE ONLY CORRECT LINE
        const user = res.data?.data?.user;

        if (!user) {
          throw new Error("User missing in response");
        }

        console.log("USER OBJECT:", user);

        localStorage.setItem("user", JSON.stringify(user));

        // Role based redirect
        switch (user.role) {
          case "Admin":
            navigate("/admin");
            break;
          case "Agent":
            navigate("/agent");
            break;
          default:
            navigate("/Dashboard");
        }
      })
      .catch((err) => {
        console.error("AUTH ME FAILED:", err);
        navigate("/Signin");
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
