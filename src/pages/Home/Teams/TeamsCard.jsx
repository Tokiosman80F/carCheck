import person1 from "../../../assets/team/1.jpg";
import person2 from "../../../assets/team/2.jpg";
import person3 from "../../../assets/team/3.jpg";
import fb from "../../../assets/team/facebook.svg";
import linkdin from "../../../assets/team/linkdin.svg";
import twitter from "../../../assets/team/twitter.svg";
import Slider from "react-slick";
import  './style.css'

const TeamsCard = () => {
  const teamMembers = [
    { image: person1, title: "Car Engine Plug", position: "Engine Expert" },
    { image: person2, title: "Car Engine Plug", position: "Engine Expert" },
    { image: person3, title: "Car Engine Plug", position: "Engine Expert" },
    { image: person2, title: "Car Engine Plug", position: "Engine Expert" },
    { image: person1, title: "Car Engine Plug", position: "Engine Expert" },
    { image: person3, title: "Car Engine Plug", position: "Engine Expert" },
  ];
  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 50,
    arrows:true


  };
  return (
    <div className="px-60">
    <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="card w-44 shadow-2xl py-4">
            <figure className="px-10 pt-10">
              <img src={member.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{member.title}</h2>
              <p className="">{member.position}</p>
            </div>
            <div className="flex justify-evenly items-center px-10">
              <img src={fb} alt="" />
              <img src={linkdin} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        ))}
    
    </Slider>
    </div>
  );
};

export default TeamsCard;
