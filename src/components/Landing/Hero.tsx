import HeroImage from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      className="
        landing-hero
        w-full
        min-h-[60vh]
        sm:min-h-[70vh]
        md:min-h-[750px]
        flex
        py-12
        sm:py-[10vh]
        md:py-[15vh]
        justify-center
        items-center
        md:justify-start
        bg-black
        md:bg-cover md:bg-center md:bg-no-repeat
      "
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      {/* Mobile: remove background image */}
      <style>{`
        @media (max-width: 767px) {
          .landing-hero {
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      `}</style>

      {/* Overlay content */}
      <div
        className="
          text-white
          text-center
          md:text-left
          px-4
          sm:px-6
          md:px-20
          lg:px-[130px]
          w-full
          max-w-7xl
          mx-auto
          animate-hero-float
        "
      >
        {/* Title */}
        <h1
          className="
            font-extrabold
            leading-tight
            text-2xl
            sm:text-3xl
            md:text-5xl
            lg:text-6xl
            xl:text-[50px]
            mt-0
          "
        >
          VIRTUAL CARDS <br className="hidden sm:block" /> FOR ADVERTISING
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-3
            sm:mt-4
            text-sm
            sm:text-base
            md:text-xl
            lg:text-2xl
            xl:text-[20px]
            font-bold
          "
        >
          Reliable. Affordable. Convenient
        </p>

        {/* CTA */}
        <Link to="/auth.epn?redirect=/new-card">
          <div
            className="
              mt-4
              sm:mt-5
              mx-auto
              md:mx-0
              bg-white
              rounded-full
              w-[140px]
              sm:w-[150px]
              h-[36px]
              sm:h-[40px]
              text-black
              font-bold
              text-xs
              sm:text-sm
              flex
              justify-center
              items-center
              cursor-pointer
              hover:bg-gray-200
              active:bg-gray-300
              transition
            "
          >
            Issue a Card
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
