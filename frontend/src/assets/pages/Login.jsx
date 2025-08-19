import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [userData,setUserData] = useState({
        email:"",
        password:""
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(userData);
    }
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            value={userData.email}
                            onChange={(e)=>setUserData({...userData,[e.target.id]:e.target.value})}
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            value={userData.password}
                            onChange={(e)=>setUserData({...userData,[e.target.id]:e.target.value})}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-4">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Register
                    </a>
                </p>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    <Link to="/">Back to application</Link>
                </p>
            </div>
        </div>
    )
}

export default Login