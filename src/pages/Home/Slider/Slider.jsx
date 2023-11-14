import banner_1 from "../../../assets/banner/1.jpg";
import banner_2 from "../../../assets/banner/2.jpg";
import banner_3 from "../../../assets/banner/3.jpg";
import banner_4 from "../../../assets/banner/4.jpg";
const Slider = () => {
  const slidersInfo = [
    {
      image: banner_1,
      headLine: `Affordable Price For Car Servicing`,
      description:
        "There are many variations of passages of available, but the majority have suffered alteration in some form",
      buttonBack: "#slide4",
      buttonForward: "#slide2",
    },
    {
      image: banner_2,
      headLine: `Revitalize Your Ride with Our Expert Car Services`,
      description:
        " Dedicated to keeping your vehicle running smoothly Skilled technicians for routine maintenance and repairs Trust us for precision and quality service. Your satisfaction is our priority",
      buttonBack: "#slide1",
      buttonForward: "#slide3",
    },
    {
      image: banner_3,
      headLine: `Why Choose Us?`,
      description:
        "Reliable and Experienced Technicians. Comprehensive Services - oil changes to diagnostics.",
      buttonBack: "#slide2",
      buttonForward: "#slide4",
    },
    {
      image: banner_4,
      headLine: `Quality Car Care Tailored to You`,
      description:
        "Discover personalized car care at [Shop Name]. Our dedicated team understands your vehicle's needs for tailored solutions.",
      buttonBack: "#slide3",
      buttonForward: "#slide1",
    },
  ];
  return (
    <div className="carousel w-full h-[85vh] my-4">
      {slidersInfo.map((slider, index) => (
        <div
          key={index}
          id={`slide${index+1}`}
          className="carousel-item relative w-full  "
        >
          <img src={slider.image} className="w-full  rounded-2xl  " />
          {/* text */}
          <div className="absolute rounded-2xl  text-white h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] ">
            <div className="lg:w-1/3 space-y-10 pt-20 md:mx-10 ">
              <h1 className="text-2xl lg:text-6xl font-bold">
                {slider.headLine}
              </h1>
              <p className="md:text-lg ">
                {slider.description}
              </p>
              <div >
                <button className="btn--primary">
                  Discover More
                </button>
                <button className="capitalize btn btn-outline  text-white border-white bg-transparent md:mx-5">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="absolute flex justify-end gap-5 transform  right-20 top-[80%]">
            <a
              href={slider.buttonBack}
              className="btn btn-circle backdrop-blur-md bg-white/30 text-white hover:bg-primaryColor "
            >
              ❮
            </a>
            <a
              href={slider.buttonForward}
              className="btn btn-circle bg-primaryColor text-white border-none hover:text-black "
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
