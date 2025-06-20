import { useState } from "react";
import axios from "axios";
import Profile from "./Profile";
const Login = () => {
  const [emailId, setEmailId] = useState("gauravsatija1063@gmail.com");
  const [password, setPassword] = useState("Gaurav@123");
  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:7777/login", {
        emailId,
        password,
      },{
        withCredentials: true,
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl justify-center mx-auto mt-10">
      <div className="card-body">
        <h2 className="card-title justify-center">Login</h2>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text my-2">Email</span>
          </div>
          <input
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text my-2">Password</span>
          </div>
          <input
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="card-actions justify-center ">
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
