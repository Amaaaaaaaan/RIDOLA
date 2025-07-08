import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CapatainContext';
import logo from '../assets/logo.svg';

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setErrorMsg(''); // Reset previous errors

    try {
      const captainCredentials = { email, password };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captainCredentials
      );

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
    } catch (error) {
      // Backend error message
      if (error.response && error.response.data?.message) {
        setErrorMsg(error.response.data.message);
      } else if (error.response && error.response.data?.errors) {
        // Validation error array
        setErrorMsg(error.response.data.errors[0].msg);
      } else {
        setErrorMsg('Something went wrong. Please try again.');
      }
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="h-screen bg-[#F8F9FA] flex flex-col justify-between p-6">
      <div>
        {/* Logo */}
        <img src={logo} alt="Ridola Logo" className="w-28 h-30 mt-[-20px]" />

        {/* Login Form */}
        <form onSubmit={submitHandler}>
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

          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">Enter Password</h3>
          <input
            className="bg-white mb-6 rounded-lg px-4 py-2 border border-gray-300 w-full text-base placeholder:text-gray-400 text-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
          />

          {/* Error message */}
          {errorMsg && (
            <p className="text-sm text-red-600 mb-4 font-medium">{errorMsg}</p>
          )}

          <button
            className="bg-[#1E3A5F] hover:bg-[#162b45] transition duration-300 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Join a fleet?{' '}
          <Link
            to="/captain-signup"
            className="text-[#f96949] font-medium hover:underline"
          >
            Register as a Captain
          </Link>
        </p>
      </div>

      <div className="mt-6">
        <Link
          to="/login"
          className="bg-[#FF6B4A] hover:bg-[#e0593e] transition duration-300 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg flex items-center justify-center"
        >
          Login as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
