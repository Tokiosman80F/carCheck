import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import img1 from "../../../assets/chooseUs/1.svg";
import img3 from "../../../assets/chooseUs/3.svg";
import img4 from "../../../assets/chooseUs/4.svg";
import img5 from "../../../assets/chooseUs/5.svg";
import img6 from "../../../assets/chooseUs/6.svg";
const ChooseUs = () => {
  const details = [
    { img: img1, title: "Expert Team" },

    { img: img3, title: "24/7 Support" },
    { img: img4, title: "Best Equipment" },
    { img: img5, title: "100% Guranty" },
    { img: img6, title: "Timely Delivery" },
  ];
  return (
    <div className="mt-36">
      <SectionHeader
        title="Core Features"
        subTitle="Why Choose Us"
        description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionHeader>
      <div className="flex justify-around items-center mt-12">
        {details.map((detail, id) => (
          <div key={id} className=" hover:bg-blue-500 hover:text-white p-5 rounded-2xl">
            <div>
              
              <img src={detail.img} alt="" className="mx-auto py-2"/>
            </div>
            <p>{detail.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
