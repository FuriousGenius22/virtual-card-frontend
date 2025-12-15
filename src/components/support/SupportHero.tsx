import React from "react";
import PhoneImage from "../../assets/cellphone.jpg";
import SupportButtons from "./SupportButtons";

const SupportHero: React.FC = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-[700px]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[radial-gradient(ellipse_at_center,_rgba(255,200,150,0.35),_rgba(0,0,0,0.85))]
      "
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          24/7 SUPPORT
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-white/80">
          We come to your aid quickly, we are up to date,
          <br />
          we speak the same language
        </p>

        <SupportButtons />
      </div>

      {/* Giant Numbers */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative flex items-center gap-6">
          <span className="text-[220px] md:text-[280px] font-extrabold text-white/90 leading-none">
            24
          </span>

          {/* Phone */}
          <img
            src={PhoneImage}
            alt="Phone"
            className="
              w-[140px] md:w-[180px]
              rotate-12
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
            "
          />

          <span className="text-[220px] md:text-[280px] font-extrabold text-white/90 leading-none">
            7
          </span>
        </div>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </section>
  );
};

export default SupportHero;
