
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import TeamsCard from "./TeamsCard";

const Teams = () => {

  return (
    <div className="md:mt-36">
      <SectionHeader
        title="Team"
        subTitle="Meet Our Team"
        description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionHeader>
      {/* card */}
      <TeamsCard></TeamsCard>
  
    </div>
  );
};

export default Teams;
