import React from "react";
import authImage from "../assets/auth.jpg";
import logo from "../assets/logo.svg";

const Auth: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#F6F8FB] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Image Section */}
        <div className="hidden md:flex items-center justify-center bg-[#EFF3F8]">
          <img
            src={authImage}
            alt="Authentication visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Auth Section */}
        <div className="flex flex-col justify-center px-6 sm:px-12 py-12">
          
          {/* Language Selector */}
          <div className="flex justify-end mb-8">
            <button className="flex items-center gap-2 border rounded-lg px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
              <span>🇬🇧</span>
              English
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <img src={logo} alt="EPN Logo" className="h-8" />
          </div>

          {/* Welcome */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome 👋
          </h1>
          <p className="text-gray-500 mb-8">
            Login to your EPN account or create a new one
          </p>

          {/* Form */}
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                👁
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                Remember me
              </label>

              <button type="button" className="text-blue-600 hover:underline">
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg py-3 font-medium flex items-center justify-center gap-2 hover:bg-gray-900 transition"
            >
              <span>Log in</span>
            </button>

            {/* Sign Up */}
            <button
              type="button"
              className="w-full border border-gray-300 rounded-lg py-3 font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition"
            >
              Sign up
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full border border-gray-300 rounded-lg py-3 font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Log in with Google
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-10">
            © 2025 EPN, All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
