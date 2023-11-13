import { useEffect, useState } from "react";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { FaArrowRightLong } from "react-icons/fa6";
const Service = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      })
      .catch((error) => {
        console.log("the error =>", error);
      });
  }, []);
  console.log(services);
  return (
    <div className="mt-32">
      <SectionHeader
        title="Service"
        subTitle="Our Service Area"
        description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
      ></SectionHeader>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service._id} className="card w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
              <img src={service.img} className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-dark2">{service.title}</h2>

              <div className=" text-primaryColor flex items-center justify-between">
                <div className="text-xl font-semibold">
                  Price:${service.price}
                </div>
                <FaArrowRightLong className="text-lg cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-12">
      <button className="btn btn-outline capitalize border-primaryColor text-primaryColor text-lg ">More Product</button>
      </div>
    </div>
  );
};

export default Service;
