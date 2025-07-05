import { useState } from "react";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/contants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data));
      return navigate("/");
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        {
          withCredentials: true,
        }
      );
      setIsLoginForm(true);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl justify-center mx-auto mt-10">
      <div className="card-body">
        <h2 className="card-title justify-center">
          {isLoginForm ? "Login" : "Sign Up"}
        </h2>
        {!isLoginForm && (
          <>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text my-2">First Name</span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text my-2">Last Name</span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </>
        )}
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
            type="password"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="card-actions flex flex-col items-center justify-center">
          <p className="text-red-500">{error}</p>
          <button
            className="btn btn-primary"
            onClick={isLoginForm ? handleLogin : handleSignUp}
          >
            {isLoginForm ? "Login" : "Sign Up"}
          </button>
        </div>
        <p
          className="m-auto cursor-pointer py-2"
          onClick={() => setIsLoginForm((value) => !value)}
        >
          {isLoginForm ? "New User? Signup here" : "Existing User? Login here"}
        </p>
      </div>
    </div>
  );
};

export default Login;
