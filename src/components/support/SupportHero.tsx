import React from "react";
import PhoneImage from "../../assets/cellphone.jpg";
import SupportButtons from "./SupportButtons";

const SupportHero: React.FC = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-[800px]
        flex
        justify-center
        overflow-hidden
        bg-center
        bg-no-repeat
        bg-cover
      "
      style={{
        backgroundImage: `url(${PhoneImage})`,
      }}
    >
      {/* Dark gradient overlay (for readability) */}
      <div className="
        absolute inset-0
        bg-gradient-to-b
        from-black/60
        via-black/40
        to-black/80
        z-0
      " />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-[10vh]">
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
      <div className="
        absolute inset-0
        flex items-center justify-center
        pointer-events-none
        z-10
      ">
        <div className="flex items-center gap-6">
          <span className="text-[220px] md:text-[280px] font-extrabold text-white/90 leading-none mr-[5vw]">
            24
          </span>
          <span className="text-[220px] md:text-[280px] font-extrabold text-white/90 leading-none">
            7
          </span>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;
