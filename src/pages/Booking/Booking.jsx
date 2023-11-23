import { useLoaderData } from "react-router-dom";
import checkoutBg from "../../assets/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
const Booking = () => {
  const { user } = useContext(AuthContext);
  const bookingInfo = useLoaderData();
  const { _id, title, price, img } = bookingInfo;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user.email;
    const date = form.date.value;
    const title = form.title.value;
    const price = form.price.value;
    const userBookingInfo = { name, email, date, title, price, img };
    console.log(userBookingInfo);

    Swal.fire({
      title: "You want to confirm this order?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,Confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userBookingInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              console.log(data);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="relative">
        <img src={checkoutBg} alt="" className="w-full" />
        <div className="absolute top-0 bg-black/[.4] w-full h-full rounded-xl">
          <h1 className="text-3xl md:text-7xl font-semibold text-white absolute bottom-[50%] ">
            Booking Items
          </h1>
        </div>
      </div>

      {/* form */}
      <form
        className="card-body bg-base-300 rounded-xl my-5 md:my-28"
        onSubmit={handleFormSubmit}
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered"
              required
              name="date"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Service Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={title}
              required
              name="title"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="input input-bordered"
              name="price"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          value=" order confirm"
          className="btn bg-primaryColor text-white hover:btn-neutral "
        />
      </form>
    </div>
  );
};

export default Booking;
