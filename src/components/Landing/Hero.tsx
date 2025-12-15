import HeroImage from "../../assets/hero.jpg";

const Hero: React.FC = () => {
  return (
    <section
      className="
        w-full
        min-h-[70vh]
        md:min-h-[750px]
        flex
        items-center
        justify-center
        md:justify-start
        bg-black
        md:bg-cover md:bg-center
      "
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      {/* Overlay content */}
      <div
        className="
          text-white
          text-center
          md:text-left
          px-6
          md:px-20
          lg:px-[210px]
          animate-hero-float
        "
      >
        {/* Title */}
        <h1
          className="
            font-extrabold
            leading-tight
            text-3xl
            sm:text-4xl
            md:text-6xl
            lg:text-[96px]
          "
        >
          VIRTUAL CARDS <br /> FOR ADVERTISING
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-4
            font-light
            text-base
            sm:text-lg
            md:text-2xl
            lg:text-[36px]
          "
        >
          Reliable. Affordable. Convenient
        </p>

        {/* CTA */}
        <div
          className="
            mt-6
            mx-auto
            md:mx-0
            bg-white
            rounded-full
            w-[150px]
            h-[40px]
            text-black
            font-bold
            flex
            justify-center
            items-center
            cursor-pointer
            hover:bg-gray-200
            transition
          "
        >
          Issue a Card
        </div>
      </div>

      {/* Mobile: remove background image */}
      <style>{`
        @media (max-width: 767px) {
          section {
            background-image: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
