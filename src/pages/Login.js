import React, { useState } from 'react'
import backgroundImage from '../assets/backgroundddd.png'
// import { ACCOUNT_TYPE } from '../utils/constants'
import Tab from '../components/common/Tab'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { email, password, confirmPassword } = formData

    const handleOnChange = () => {}
    const handleOnSubmit = () => {}


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
                <p className="text-center text-[rgb(254,177,62)] font-semibold text-xl mb-4">Login</p>
                
                {/* Form */}
                <form onSubmit={handleOnSubmit} className="space-y-6 mt-6">
                    
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
                            <label className="text-gray-700 font-semibold">Password <sup className="text-pink-200">*</sup></label>
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
                    </div>
                    <Link>
                        <p className='mt-2 ml-auto text-sm text-orange-300'>
                            Forgot Password
                        </p>
                    </Link>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-orange-400 text-white font-semibold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                        Sign In
                    </button>

                    <div>
                        <p className='text-sm font-medium mb-0'>You Don't have an account?</p>
                        <p className='cursor-pointer'>
                            <Link to={'/register'} className='text-orange-400'>
                                Sign Up here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
