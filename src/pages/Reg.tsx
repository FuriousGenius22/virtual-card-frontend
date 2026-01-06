import React, { useState, useEffect } from "react";
import authImage from "../assets/auth.png";
import logo from "../assets/logo.svg";
import PasswordInput from "../components/common/PasswordInput";
import LanguageModal from "../components/LanguageModal";
import { loginWithGoogle } from "../services/mockAuth";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { ChevronDown } from "lucide-react";

const Reg: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { countryCode, countryName, setCountry, t } = useLanguage();
  const { signup, login, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  // SIGN UP
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError(t("reg.passwordMin"));
      return;
    }

    if (password !== confirmPassword) {
      setError(t("reg.passwordMismatch"));
      return;
    }

    try {
      await signup(email, password);
      // Navigation is handled by useEffect
    } catch (err: any) {
      setError(err.message || t("reg.signupFailed"));
    }
  };

  // SIGN IN
  const handleLogin = async () => {
    setError(null);

    try {
      await login(email, password);
      // Navigation is handled by useEffect
    } catch (err: any) {
      setError(err.message || t("reg.invalidCredentials"));
    }
  };

  // GOOGLE LOGIN/SIGNUP
  const handleGoogleAuth = () => {
    setError(null);
    try {
      loginWithGoogle();
      navigate("/dashboard");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err?.message || t("reg.signupFailed"));
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F6F8FB] flex items-center justify-center p-4">
      <LanguageModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSelect={setCountry}
      />

      <div className="w-full max-w-5xl min-h-[90vh] sm:h-[90vh] bg-white rounded-xl sm:rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-lg">
        {/* Left Image */}
        <div
          className="hidden md:flex w-full h-full bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${authImage})` }}
        />

        {/* Right Section */}
        <div className="relative flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-0">
          {/* Language */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 sm:gap-3 border rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              <img
                src={`https://flagcdn.com/24x18/${countryCode}.png`}
                className="w-5 h-3 sm:w-6 sm:h-4 rounded-sm"
                alt={countryName}
              />
              <span className="hidden sm:inline">{t("reg.language")}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <img src={logo} alt="EPN Logo" className="h-7 sm:h-8" />
          </div>

          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            {t("auth.welcome")}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
            {t("reg.subtitle")}
          </p>

          {/* FORM */}
          <form onSubmit={handleSignup} className="space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("common.email")}
              className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <PasswordInput
              placeholder={t("reg.createPassword")}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />

            <PasswordInput
              placeholder={t("reg.confirmPassword")}
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
            />

            <div className="text-xs text-gray-600 space-y-2">
              <label className="flex items-start gap-2">
                <input type="checkbox" required className="mt-0.5 w-4 h-4" />
                <span className="text-xs sm:text-sm">{t("reg.tos")}</span>
              </label>

              <label className="flex items-start gap-2">
                <input type="checkbox" required className="mt-0.5 w-4 h-4" />
                <span className="text-xs sm:text-sm">{t("reg.restricted")}</span>
              </label>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg py-2 font-medium hover:bg-gray-900 transition"
            >
              {t("reg.signUp")}
            </button>

            <button
              type="button"
              onClick={handleLogin}
              className="w-full border border-gray-300 rounded-lg py-2 font-medium hover:bg-gray-50 transition"
            >
              {t("reg.signIn")}
            </button>

            <div className="flex items-center gap-4 my-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">{t("common.or")}</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <button
              type="button"
              onClick={handleGoogleAuth}
              className="w-full border border-gray-300 rounded-lg py-2 font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
              {t("reg.continueWithGoogle")}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-10">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reg;
