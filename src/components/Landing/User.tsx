import UserImage from "../../assets/user.jpg";
import Buttons from "../common/Buttons";

const User: React.FC = () => {
  return (
    <section
      className="
        landing-user
        w-full
        min-h-[60vh]
        sm:min-h-[70vh]
        md:min-h-[750px]
        flex
        py-12
        sm:py-[15vh]
        md:py-[20vh]
        justify-center
        items-center
        md:justify-start
        bg-black
        md:bg-cover md:bg-center md:bg-no-repeat
      "
      style={{
        backgroundImage: `url(${UserImage})`,
      }}
    >
      {/* Mobile: remove background image */}
      <style>{`
        @media (max-width: 767px) {
          .landing-user {
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
          md:ml-[5vw]
          lg:px-[130px]
          lg:ml-[10vw]
          w-full
          max-w-7xl
          mx-auto
          md:mx-0
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
            xl:text-[45px]
            mt-0
          "
        >
          USER-FRIENDLY APP
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-3
            sm:mt-4
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            xl:text-[16px]
            font-semibold
          "
        >
          Transaction notifications, 3DS verification codes, account,<br className="hidden sm:block" /> card and team management
        </p>

        {/* Button Group */}
        <div className="flex justify-center md:justify-start mt-4 sm:mt-5">
          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default User;
