import { useEffect, useState } from "react";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Service = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
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
      <div className="grid grid-cols-1  items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service._id} className="card md:w-96 bg-base-100 shadow-2xl">
            <figure className="md:px-10 pt-10">
              <img src={service.img} className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-dark2">{service.title}</h2>

              <div className=" text-primaryColor flex items-center justify-between">
                <div className="text-xl font-semibold">
                  Price:${service.price}
                </div>
                <Link className="underline font-bold cursor-pointer hover:scale-125 ease-in-out duration-300">See Detail</Link>
                {/* /${service._id} */}
                <Link to={`/booking/${service._id}`}><FaArrowRightLong className="bg-base-200  text-lg cursor-pointer hover:scale-150 ease-in-out duration-300" /></Link>
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
