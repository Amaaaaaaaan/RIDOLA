import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.svg"; // adjust if needed
import { UserDataContext } from "../context/userContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
  fullname: {
    firstname: firstName,
    lastname: lastName,
  },
  email: email,
  password: password
};


   try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
  } catch (err) {
    console.error("Registration Error:", err.response?.data || err.message);
    alert(err.response?.data?.errors?.[0]?.msg || "Signup failed");
  }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  return (
    <div className="h-screen bg-[#F8F9FA] flex flex-col justify-between p-6">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <img src={logo} alt="Ridola Logo" className="w-28 h-30 mt-[-20px]" />

        {/* Signup Form */}
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">
            What's your name
          </h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-white w-1/2 rounded-lg px-4 py-2 border border-gray-300 text-base placeholder:text-gray-400 text-gray-800"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="bg-white w-1/2 rounded-lg px-4 py-2 border border-gray-300 text-base placeholder:text-gray-400 text-gray-800"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">
            What's your email
          </h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white mb-6 rounded-lg px-4 py-2 border border-gray-300 w-full text-base placeholder:text-gray-400 text-gray-800"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">
            Enter Password
          </h3>
          <input
            className="bg-white mb-6 rounded-lg px-4 py-2 border border-gray-300 w-full text-base placeholder:text-gray-400 text-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
          />

          <button
            className="bg-[#1E3A5F] hover:bg-[#162b45] transition duration-300 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#f96949] font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>

      {/* Captain Signup CTA */}
      <div className="mt-6">
        <Link
          to="/captain-signup"
          className="bg-[#FF6B4A] hover:bg-[#e0593e] transition duration-300 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg flex items-center justify-center"
        >
          Sign up as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
