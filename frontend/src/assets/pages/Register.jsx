import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    };
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-green-100 to-green-300">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {/* First Name */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="firstname"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            placeholder="Enter your first name"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                            value={userData.firstname}
                            onChange={(e) =>
                                setUserData({ ...userData, [e.target.id]: e.target.value })
                            }
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="lastname"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            placeholder="Enter your last name"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                            value={userData.lastname}
                            onChange={(e) =>
                                setUserData({ ...userData, [e.target.id]: e.target.value })
                            }
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                            value={userData.email}
                            onChange={(e) =>
                                setUserData({ ...userData, [e.target.id]: e.target.value })
                            }
                        />
                    </div>

                    {/* Mobile No */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="mobile"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            placeholder="Enter your mobile number"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                            required
                            value={userData.mobile}
                            onChange={(e) =>
                                setUserData({ ...userData, [e.target.id]: e.target.value })
                            }
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="password"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                            value={userData.password}
                            onChange={(e) =>
                                setUserData({ ...userData, [e.target.id]: e.target.value })
                            }
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-green-500 hover:underline">
                        Login
                    </a>
                </p>
                <p className="text-sm text-gray-600 text-center mt-4">
                    <Link to="/">Back to application</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
