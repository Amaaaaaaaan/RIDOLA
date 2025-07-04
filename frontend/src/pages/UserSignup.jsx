import React from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between p-7 bg-[#F5F7FA]">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <img
          className="w-20 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
          alt="Ridola Logo"
        />

        {/* Signup Form */}
        <form className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">What's your name</h3>
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="First name"
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border border-gray-300 text-base placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Last name"
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border border-gray-300 text-base placeholder:text-sm"
            />
          </div>

          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">What's your email</h3>
          <input
            type="email"
            placeholder="email@example.com"
            required
            className="bg-[#eeeeee] mb-6 w-full rounded-lg px-4 py-2 border border-gray-300 text-base placeholder:text-sm"
          />

          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            required
            className="bg-[#eeeeee] mb-6 w-full rounded-lg px-4 py-2 border border-gray-300 text-base placeholder:text-sm"
          />

          <button
            type="submit"
            className="bg-[#1E3A5F] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg hover:bg-[#162b45] transition"
          >
            Create account
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-[#FF6B4A] font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>

      {/* Bottom Recaptcha Disclaimer */}
      <div className="mt-8 text-gray-500">
        <p className="text-[10px] leading-tight text-center">
          This site is protected by reCAPTCHA and the{' '}
          <span className="underline">Google Privacy Policy</span> and{' '}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  )
}

export default UserSignup
