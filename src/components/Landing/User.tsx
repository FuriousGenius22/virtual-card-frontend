import UserImage from "../../assets/user.jpg";
import Buttons from "../common/Buttons";

const User: React.FC = () => {
  return (
    <section
      className="
        w-full
        min-h-[70vh]
        md:min-h-[750px]
        flex
        py-[20vh]
        
        md:justify-start
        bg-black
        md:bg-cover md:bg-center
      "
      style={{
        backgroundImage: `url(${UserImage})`,
      }}
    >
      {/* Overlay content */}
      <div
        className="
          text-white
          text-center
          md:text-left
          px-8
          md:px-20
          ml-[20vh]
          lg:px-[130px]
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
            lg:text-[45px]
            mt-0
          "
        >
          USER-FRIENDLY APP
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-4
          
            text-base
            sm:text-lg
            md:text-1xl
            font-semibold
            lg:text-[16px]
          "
        >
          Transaction notifications, 3DS verification codes, account,<br></br> card and team management
        </p>

        {/* Button Group */}
        <div className="flex justify-start">
          <Buttons />
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

export default User;
