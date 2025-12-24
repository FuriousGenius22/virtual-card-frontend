import {
  Info,
  Globe,
  Apple,
  Smartphone,
} from "lucide-react";

import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 space-y-6 sm:space-y-8">
      {/* TOP DISCLAIMER */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-2 sm:gap-3 bg-neutral-900 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm leading-relaxed">
          <Info size={16} className="text-white shrink-0 mt-0.5 sm:mt-1" />
          <p className="flex-1">
            e.PN is a trading name of Digital Waves LTD., the company incorporated
            in Seychelles. All services are provided outside the country
            (United States) and EPN does not have any licenses and/or is not
            registered in United States. © All rights reserved. Digital Waves
            LTD., 306 Victoria House, Victoria, Mahe, Seychelles
          </p>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 text-sm">
        {/* LOGO + LANGUAGE */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="e.PN" className="h-7 sm:h-8 w-auto" />
          </div>

          <button className="flex items-center gap-2 text-gray-300 hover:text-white transition text-sm">
            <Globe size={16} />
            EN
          </button>

          <div className="flex flex-col gap-2">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-white/20 rounded-full px-3 sm:px-4 py-2 hover:bg-white/10 transition text-sm"
            >
              <Apple size={16} />
              App Store
            </a>

            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-white/20 rounded-full px-3 sm:px-4 py-2 hover:bg-white/10 transition text-sm"
            >
              <Smartphone size={16} />
              Android
            </a>

            <a
              href="https://appgallery.huawei.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-white/20 rounded-full px-3 sm:px-4 py-2 hover:bg-white/10 transition text-sm"
            >
              <Smartphone size={16} />
              AppGallery
            </a>
          </div>
        </div>

        {/* ABOUT US */}
        <div className="space-y-2">
          <h4 className="font-medium mb-2 text-sm sm:text-base">About Us</h4>
          <a href="#" className="block text-gray-400 hover:text-white text-sm py-1">Terms of Service</a>
          <a href="#" className="block text-gray-400 hover:text-white text-sm py-1">Privacy Policy</a>
          <a href="#" className="block text-gray-400 hover:text-white text-sm py-1">Legal Documents</a>
          <a href="#" className="block text-gray-400 hover:text-white text-sm py-1">Complaints Policy</a>
          <a href="#" className="block text-gray-400 hover:text-white text-sm py-1">Legal Requests</a>
        </div>

        {/* CARDS */}
        <div className="space-y-2">
          <h4 className="font-medium mb-2 text-sm sm:text-base">Cards</h4>
          <a href="#" className="block text-gray-400 hover:text-white text-sm py-1">Tariffs</a>
          <a href="#" className="block text-gray-400 hover:text-white text-sm py-1">Banks</a>
          <a href="#" className="block text-gray-400 hover:text-white text-sm py-1">FAQ</a>
        </div>

        {/* FIND OUT MORE */}
        <div className="space-y-2">
          <h4 className="font-medium mb-2 text-sm sm:text-base">Find out more</h4>
          <a href="#" className="block text-gray-400 hover:text-white text-sm py-1">Helpdesk</a>
          <a href="#" className="block text-gray-400 hover:text-white text-sm py-1">Delete Account</a>
          <a href="#" className="block text-gray-400 hover:text-white text-sm py-1">Login</a>
        </div>

        {/* COOKIES + DESIGN */}
        <div className="text-gray-400 text-xs leading-relaxed space-y-3 sm:col-span-full lg:col-span-1 xl:col-span-1">
          <p>
            "E.PN" uses "cookies" in order to personalize services and improve the
            convenience of using the website. "Cookies" are small files that
            contain information about previous visits to the website. If you do
            not want to use cookies, please change your browser settings.
          </p>

          <p className="flex flex-wrap items-center gap-2">
            Designed by
            <a
              href="https://artlebedev.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white underline"
            >
              Artemy Lebedev Studio
            </a>
            <span className="border border-gray-500 rounded px-2 py-0.5 text-[10px]">
              APPROVED
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
