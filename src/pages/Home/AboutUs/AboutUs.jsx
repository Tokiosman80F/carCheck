import person from "../../../assets/about_us/person.jpg";
import parts from "../../../assets/about_us/parts.jpg";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center md:mt-32 ">
      {/* img */}
      <div className=" w-full md:w-2/3 relative ">
        <img src={person} className=" md:w-5/6" />
        <img src={parts} alt="" className=" absolute -bottom-10 right-10 w-1/2 rounded-xl border-8 border-white" />
      </div>
      {/* text */}
      <div className="w-full md:w-1/2">
        <SectionHeader 
          title="About Us"
          subTitle="We are qualified & of experience in this field"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. " 
          align={false}
        ></SectionHeader>

        <button className="btn--primary md:mt-10 ">Get More Info</button>
      </div>
      
    </div>
  );
};

export default AboutUs;
