import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>403 - Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
      <Link to="/signin">Go to Sign In</Link>
    </div>
  );
};

export default Unauthorized;
