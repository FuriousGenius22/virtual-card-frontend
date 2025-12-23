import React, { useState } from "react";
import authImage from "../assets/auth.png";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/common/PasswordInput";
import LanguageModal from "../components/LanguageModal";
import { login } from "../services/mockAuth";

const Auth: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      login(email, password);
      navigate("/dashboard");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F6F8FB] flex items-center justify-center p-4">
      {/* Language Modal */}
      <LanguageModal visible={showModal} onClose={() => setShowModal(false)} />

      {/* Main Card */}
      <div className="w-full max-w-5xl h-[90vh] bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <div
          className="hidden md:flex w-full h-full bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${authImage})` }}
        />

        {/* Right Auth Section */}
        <div className="relative flex flex-col justify-center px-6 sm:px-12">
          {/* Language Button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-3 border rounded-xl px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <img
                src="https://flagcdn.com/24x18/gb.png"
                className="w-6 h-4 rounded-sm"
                alt="English"
              />
              English
              <span className="text-gray-500">⌄</span>
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <img src={logo} alt="EPN Logo" className="h-8" />
          </div>

          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome 👋
          </h1>
          <p className="text-gray-500 mb-8">
            Login to your EPN account or create a new one
          </p>

          {/* FORM */}
          <form onSubmit={onSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <PasswordInput
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="Password"
            />

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                Remember me
              </label>

              <Link to="/auth.epn/reset-password" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg py-2 font-medium hover:bg-gray-900 transition"
            >
              Log in
            </button>

            <Link to="/reg.epn">
              <button
                type="button"
                className="w-full border border-gray-300 rounded-lg py-2 font-medium hover:bg-gray-50 transition mt-[2vh]"
              >
                Sign up
              </button>
            </Link>

            <div className="flex items-center gap-4 my-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <button
              type="button"
              className="w-full border border-gray-300 rounded-lg py-2 font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Log in with Google
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-10">
            © 2025 EPN, All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
