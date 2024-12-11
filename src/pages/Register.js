import React, { useState } from 'react'
import backgroundImage from '../assets/backgroundddd.png'
import { ACCOUNT_TYPE } from '../utils/constants'
import Tab from '../components/common/Tab'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // User or instructor
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.USER)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { firstName, lastName, email, password, confirmPassword } = formData

    const handleOnChange = () => {}
    const handleOnSubmit = () => {}

    // Data to pass to Tab component
    const tabData = [
        {
            id: 1,
            tabName: "User",
            type: ACCOUNT_TYPE.USER,
        },
        {
            id: 2,
            tabName: "Instructor",
            type: ACCOUNT_TYPE.INSTRUCTOR,
        },
    ]

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="flex justify-start items-center bg-cover py-10"
        >
            <div className="bg-white ml-12 bg-opacity-80 shadow-lg w-full sm:w-96 p-6 rounded-lg">
                <p className="text-center text-[rgb(254,177,62)] font-semibold text-xl mb-4">Create an account</p>
                
                {/* Tab Component */}
                <Tab tabData={tabData} field={accountType} setField={setAccountType} />

                {/* Form */}
                <form onSubmit={handleOnSubmit} className="space-y-6 mt-6">
                    <div className="flex gap-4">
                        {/* First Name */}
                        <div className="flex-1">
                            <label className="text-gray-700 font-semibold">First Name <sup className="text-pink-200">*</sup></label>
                            <input
                                required
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={handleOnChange}
                                placeholder="Enter first name"
                                className="w-full mt-2 px-4 py-3 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex-1">
                            <label className="text-gray-700 font-semibold">Last Name <sup className="text-pink-200">*</sup></label>
                            <input
                                required
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={handleOnChange}
                                placeholder="Enter last name"
                                className="w-full mt-2 px-4 py-3 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-gray-700 font-semibold">Email Address <sup className="text-pink-200">*</sup></label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter email address"
                            className="w-full mt-2 px-4 py-3 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>

                    {/* Password & Confirm Password */}
                    <div className="flex gap-4">
                        <div className="relative w-full">
                            <label className="text-gray-700 font-semibold">Create Password <sup className="text-pink-200">*</sup></label>
                            <input
                                required
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={password}
                                onChange={handleOnChange}
                                placeholder="Enter Password"
                                className="w-full mt-2 px-4 py-3 rounded-md bg-gray-200 text-gray-700 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <span
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute top-[70%] right-3 transform -translate-y-1/2 cursor-pointer"
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                ) : (
                                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                )}
                            </span>
                        </div>

                        <div className="relative w-full">
                            <label className="text-gray-700 font-semibold">Confirm Password <sup className="text-pink-200">*</sup></label>
                            <input
                                required
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleOnChange}
                                placeholder="Confirm Password"
                                className="w-full mt-2 px-4 py-3 rounded-md bg-gray-200 text-gray-700 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <span
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                className="absolute top-[70%] right-3 transform -translate-y-1/2 cursor-pointer"
                            >
                                {showConfirmPassword ? (
                                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                ) : (
                                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                )}
                            </span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-orange-400 text-white font-semibold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                        Create Account
                    </button>
                    
                    <div>
                        <p className='text-sm font-medium mb-0'>Already have an account?</p>
                        <p className='cursor-pointer'>
                            <Link to={'/login'} className='text-orange-400'>
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
