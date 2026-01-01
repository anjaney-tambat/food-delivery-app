import { API_BASE_URL } from "../utils/constants";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);   // ✅ ADDED
  const navigate = useNavigate(); 

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.token) {
      login(data);              // ✅ CHANGED (instead of localStorage)
      alert("Login successful");
      navigate("/");            // ✅ ADDED
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
