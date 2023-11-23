import checkoutBg from "../../assets/checkout/checkout.png";
import BookingItemsTable from "./BookingItemsTable";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";
const BookingItems = () => {
  const { user } = useContext(AuthContext);
  const [bookingOrders, setBookingOrders] = useState([]);
  const url = `http://localhost:5000/booking?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBookingOrders(data);
      });
  }, [bookingOrders]);

  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = bookingOrders.filter(
                (booking) => booking._id !== booking.id
              );
              setBookingOrders(remaining);
            }
          });
      }
    });
  };
  const handleConfirmOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: "PATCH",
          headers: {
            'content-type':"application/json",
          },
          body: JSON.stringify({ status: "confirm" }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Confirm!",
                text: "Your order has been confirmed.",
                icon: "success",
              });
              const remaining = bookingOrders.filter(
                (booking) => booking._id !== booking.id
              );
              const updatedOrder = bookingOrders.find(
                (booking) => booking._id === booking.id
              );
              updatedOrder.status="confirm"
              const newBooking=[updatedOrder,...remaining]
              setBookingOrders(newBooking);
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
                  handleDeleteOrder={handleDeleteOrder}
                  handleConfirmOrder={handleConfirmOrder}
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
