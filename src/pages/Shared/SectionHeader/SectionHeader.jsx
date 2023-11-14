const SectionHeader = ({title,subTitle,description,align=true}) => {
  return (
    <div className={` md:space-y-5  ${align?"text-center":"text-start"}`}>
      <h4 className="font-bold text-primaryColor text-xl">{title}</h4>
      <h1 className="font-bold text-xl md:text-5xl ">{subTitle} </h1>
      <p className={`text-dark3  `}>{description}</p>
    </div>
  );
};

export default SectionHeader;
