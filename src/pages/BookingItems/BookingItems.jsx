import checkoutBg from "../../assets/checkout/checkout.png";
import BookingItemsTable from "./BookingItemsTable";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
const BookingItems = () => {
  const { user } = useContext(AuthContext);
  const [bookingOrders, setBookingOrders] = useState([]);
  const url = `http://localhost:5000/booking?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBookingOrders(data)
      });
  }, [url]);

  return (
    <div>
      <div className="relative">
        <img src={checkoutBg} alt="" className="w-full" />
        <div className="absolute top-0 bg-black/[.4] w-full h-full rounded-xl">
          <h1 className="text-3xl md:text-7xl font-semibold text-white absolute bottom-[50%] ">
            Booking Items List
          </h1>
        </div>
      </div>
      {/* table */}
      <div className="my-5">
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr className="text-lg  bg-primaryColor text-white">
                <th>SL</th>
                <th>Image</th>
                <th>Service</th>
                <th>User</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookingOrders.map((order, index) => (
                <BookingItemsTable
                  key={order._id}
                  order={order}
                  index={index}
                ></BookingItemsTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingItems;
