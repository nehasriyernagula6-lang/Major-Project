import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const login = async () => {
    const res = await API.post("/users/login", data);

    if (res.data._id) {
      localStorage.setItem("userId", res.data._id);
      nav("/quiz");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email"
        onChange={e => setData({...data, email: e.target.value})}
      />
      <input type="password"
        onChange={e => setData({...data, password: e.target.value})}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}