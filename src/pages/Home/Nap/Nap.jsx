
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
const Nap = () => {
  const napArray = [
    {
      img: <FaClock  />,
      subtitle: "We are open monday-friday",
      mainInfo: "7:00 am - 9:00 pm ",
    },
    { img: <FaPhone></FaPhone>, subtitle: "Have a question?", mainInfo: "+2546 251 2658 " },
    {
      img: <FaLocationDot/>,
      subtitle: "Need a repair? our address",
      mainInfo: "Liza Street, New York",
    },
  ];
  console.log(napArray);
  return (
    <div className="md:mt-36 mb-5 py-20 rounded-2xl text-black bg-black">
    
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-white">
        {napArray.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="text-4xl text-primaryColor ">{item.img }</div>
            <div>
              <p>{item.subtitle}</p>
              <p className="text-2xl font-bold">{item.mainInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nap;
