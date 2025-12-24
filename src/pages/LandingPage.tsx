import { useEffect } from "react";
import Header from "../components/layout/Header";
import Hero from "../components/Landing/Hero.tsx";
import Cards from "../components/Landing/Cards.tsx";
import User from "../components/Landing/User.tsx";
import SupportSection from "../components/support/index.tsx";

import Footer from "../components/layout/Footer";

export default function LandingPage() {
  useEffect(() => {
    // Hide scrollbars (both horizontal and vertical) while keeping scroll functionality
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    
    // Hide vertical scrollbar using CSS
    const style = document.createElement("style");
    style.textContent = `
      html {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
      }
      html::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
      body {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
      }
      body::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
    `;
    document.head.appendChild(style);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        const scrollAmount = 100; // pixels to scroll
        window.scrollBy({
          top: e.key === "ArrowDown" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="overflow-x-hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      <Header />
      {/* Full-width sections with backgrounds */}
      <Hero />
      <Cards />
      <User />
      
      <SupportSection />
      {/* Cards section - has its own internal padding */}
      
      <Footer />
    </div>
  );
}
