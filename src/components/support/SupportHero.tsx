import React from "react";
import PhoneImage from "../../assets/cellphone.jpg";
import SupportButtons from "./SupportButtons";

const SupportHero: React.FC = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-[500px]
        sm:min-h-[600px]
        md:min-h-[700px]
        lg:min-h-[800px]
        flex
        flex-col
        justify-start
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

      {/* Giant Numbers - Background layer (centered, behind content) */}
      <div className="
        absolute inset-0
        flex items-center justify-center
        pointer-events-none
        z-10
      ">
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <span className="text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] xl:text-[280px] font-extrabold text-white/20 sm:text-white/30 md:text-white/50 lg:text-white/70 xl:text-white/90 leading-none mr-[2vw] sm:mr-[3vw] md:mr-[5vw]">
            24
          </span>
          <span className="text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] xl:text-[280px] font-extrabold text-white/20 sm:text-white/30 md:text-white/50 lg:text-white/70 xl:text-white/90 leading-none">
            7
          </span>
        </div>
      </div>

      {/* Content - Positioned higher up, above background numbers */}
      <div className="relative z-30 text-center text-white px-4 sm:px-6 w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight relative z-30">
          24/7 SUPPORT
        </h2>

        <p className="mt-3 sm:mt-4 max-w-xl mx-auto text-xs sm:text-sm md:text-base text-white/90 relative z-30">
          We come to your aid quickly, we are up to date,
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>we speak the same language
        </p>

        <div className="mt-4 sm:mt-6 relative z-30">
          <SupportButtons />
        </div>
      </div>
    </section>
  );
};

export default SupportHero;
