import person from "../../../assets/about_us/person.jpg";
import parts from "../../../assets/about_us/parts.jpg";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const AboutUs = () => {
  return (
    <div className="flex justify-between items-center my-10 ">
      {/* img */}
      <div className=" w-2/3 relative ">
        <img src={person} className=" w-4/6" />
        <img src={parts} alt="" className="absolute -bottom-20 right-10 w-1/2 rounded-xl border-8 border-white" />
      </div>
      {/* text */}
      <div className="w-1/2">
        <SectionHeader 
          title="About Us"
          subTitle="We are qualified & of experience in this field"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. " 
          align={false}
        ></SectionHeader>

        <button className="btn--primary mt-10">Get More Info</button>
      </div>
    </div>
  );
};

export default AboutUs;