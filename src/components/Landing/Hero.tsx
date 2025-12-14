//import Button from "../layout/Button";
import HeroImage from "../../assets/hero.jpg";
const Hero: React.FC = () => {
  return (
    <div
      className="w-full h-[750px] bg-cover bg-center "
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="text-white py-[100px] px-[210px]">
        <div className=" font-extrabold text-6xl md:text-8xl lg:text-[100px] xl:text-[50px] ">
          VIRTUAL CARDS<br></br> FOR ADVERTISING
        </div>
        <div className="py-[20px] font-light text-6xl md:text-8xl lg:text-[40px] xl:text-[30px]">
            Reliable. Affordable. Convenient
        </div>
        <div className="bg-white rounded-full w-[150px] h-[33px] text-black font-bold flex justify-center items-center mt-[20px]">
            Issue a Card
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
