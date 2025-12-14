//import Button from "../layout/Button";
import CardsImage from "../../assets/cards.jpg";
const Cards: React.FC = () => {
  return (
    <div
      className="w-full h-[800px] bg-cover bg-center py-[80px] "
      style={{ backgroundImage: `url(${CardsImage})` }}
    >
      <div className="  text-black text-[35px]  font-extrabold text-center flex justify-center ">
        RATES BECOME MORE FAVORABLE <br></br>WITH EACH GRADE
      </div>
      <div className="flex justify-center text-[30px] font-light text-center">
        Spend more — pay less
      </div>
      <div className="flex justify-normal mt-[140px] text-[20px]">
        <div className="ml-[170px]">
          up to $1 000<br></br>
          Fee<br></br>
          6.7%
        </div>
        <div className="ml-[140px]">
          up to $1 000<br></br>
          Fee<br></br>
          6.7%
        </div>
        <div className="ml-[140px]">
          up to $1 000<br></br>
          Fee<br></br>
          6.7%
        </div>
        <div className="ml-[130px]">
          up to $1 000<br></br>
          Fee<br></br>
          6.7%
        </div>
        <div className="ml-[130px]">
          up to $1 000<br></br>
          Fee<br></br>
          6.7%
        </div>
        
      </div>
    </div>
  );
};

export default Cards;
