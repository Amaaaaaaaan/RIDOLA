import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen bg-[#F8F9FA] flex flex-col justify-between p-6">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <img
          src="https://sdmntpreastus.oaiusercontent.com/files/00000000-c3f4-61f9-8fc9-7922628e81c5/raw?se=2025-07-04T07%3A18%3A09Z&sp=r&sv=2024-08-04&sr=b&scid=c72530b1-0313-5ecb-b4a6-ccff3442dc8b&skoid=02b7f7b5-29f8-416a-aeb6-99464748559d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-03T09%3A08%3A34Z&ske=2025-07-04T09%3A08%3A34Z&sks=b&skv=2024-08-04&sig=Q0tAyl9eLaPaLtKxl70y0o%2Bn1tFs8dVgfZI7pf9A5DE%3D"
          alt="Ridola Logo"
          className="w-28 h-auto  mt-[-20px]"
        />
        {/* Login Form */}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">
            What's your email
          </h3>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
            required
            className="bg-white border border-gray-300 mb-6 rounded-lg px-4 py-2 w-full text-base"
          />

          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">
            Enter Password
          </h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            className="bg-white border border-gray-300 mb-6 rounded-lg px-4 py-2 w-full text-base"
          />

          <button
            type="submit"
            className="bg-[#1E3A5F] text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-[#162b45] transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center mt-4 text-sm">
          New here?{" "}
          <Link
            to="/signup"
            className="text-[#f96949] font-medium hover:underline"
          >
            Create new Account
          </Link>
        </p>
      </div>

      {/* Captain Login Button */}
      <div>
        <Link
          to="/captain-login"
          className="bg-[#FF6B4A] hover:bg-[#e0593e] transition duration-300 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg flex items-center justify-center"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
