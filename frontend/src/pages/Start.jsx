import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1641230011140-322910168cc4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Logo/Header */}
        <h1 className="text-5xl font-bold ml-8 mt-10 text-[#1E3A5F] drop-shadow-md">
          Ridola
        </h1>

        {/* Bottom Section (CTA Panel) */}
        <div className="bg-white rounded-t-2xl px-6 py-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#1C1C1C] leading-snug">
            Beyond rides — it’s a <span className="text-[#FF6B4A]">Ridola</span> experience.
          </h2>

          <Link
            to="/login"
            className="mt-6 block text-center bg-[#1E3A5F] hover:bg-[#162B45] text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
