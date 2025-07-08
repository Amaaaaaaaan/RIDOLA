import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import axios from 'axios'
import logo from '../assets/logo.svg' // replace path if needed

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        { email, password }
      )

      if (response.status === 200) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }

      setEmail('')
      setPassword('')
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message)
      alert(err.response?.data?.message || "Invalid credentials")
    }
  }

  return (
    <div className="h-screen bg-[#F8F9FA] flex flex-col justify-between p-6">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <img src={logo} alt="Ridola Logo" className="w-28 h-30 mt-[-20px]" />

        {/* Login Form */}
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white mb-6 rounded-lg px-4 py-2 border border-gray-300 w-full text-base placeholder:text-gray-400 text-gray-800"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white mb-6 rounded-lg px-4 py-2 border border-gray-300 w-full text-base placeholder:text-gray-400 text-gray-800"
            type="password"
            placeholder="password"
          />

          <button
            className="bg-[#1E3A5F] hover:bg-[#162b45] transition duration-300 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center mt-4 text-sm">
          New here?{" "}
          <Link to="/signup" className="text-[#05a012] font-medium hover:underline">
            Create new Account
          </Link>
        </p>
      </div>

      {/* Captain Login Button */}
      <div className="mt-6">
        <Link
          to="/captain-login"
          className="bg-[#069a19] hover:bg-[#e0593e] transition duration-300 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg flex items-center justify-center"
        >
          Login as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
