import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CapatainContext'
import logo from '../assets/logo.svg'

const CaptainSignup = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const [errorMsg, setErrorMsg] = useState('')

  const { captain, setCaptain } = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    setErrorMsg('') // Clear previous errors

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType,
      },
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      )

      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (error) {
      if (error.response && error.response.data?.message) {
        setErrorMsg(error.response.data.message)
      } else if (error.response && error.response.data?.errors) {
        // For express-validator multiple errors
        setErrorMsg(error.response.data.errors[0].msg)
      } else {
        setErrorMsg('Something went wrong. Please try again.')
      }
    }

    // Clear form only if no error
    if (!errorMsg) {
      setEmail('')
      setFirstName('')
      setLastName('')
      setPassword('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
    }
  }

  return (
    <div className="h-screen bg-[#F8F9FA] flex flex-col justify-between p-6">
      {/* Top Section */}
      <div>
        <img
          className="w-20 mb-5"
          src={logo}
          alt="Captain Icon"
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">
            What's our Captain's name
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
            className="bg-white mb-6 rounded-lg px-4 py-2 border border-gray-300 w-full text-base placeholder:text-gray-400 text-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
          />

          <h3 className="text-lg font-medium mb-2 text-[#1E3A5F]">Vehicle Information</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-white w-1/2 rounded-lg px-4 py-2 border border-gray-300 text-base placeholder:text-gray-400 text-gray-800"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              className="bg-white w-1/2 rounded-lg px-4 py-2 border border-gray-300 text-base placeholder:text-gray-400 text-gray-800"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>

          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-white w-1/2 rounded-lg px-4 py-2 border border-gray-300 text-base placeholder:text-gray-400 text-gray-800"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              className="bg-white w-1/2 rounded-lg px-4 py-2 border border-gray-300 text-base text-gray-800"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <p className="text-sm text-red-600 mb-4 font-medium">{errorMsg}</p>
          )}

          <button className="bg-[#1E3A5F] hover:bg-[#162b45] transition duration-300 text-white font-semibold rounded-lg px-4 py-2 w-full text-lg">
            Create Captain Account
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{' '}
          <Link
            to="/captain-login"
            className="text-[#f96949] font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>

      {/* reCAPTCHA note */}
      <div className="mt-6">
        <p className="text-[10px] leading-tight text-gray-400">
          This site is protected by reCAPTCHA and the{' '}
          <span className="underline">Google Privacy Policy</span> and{' '}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup
