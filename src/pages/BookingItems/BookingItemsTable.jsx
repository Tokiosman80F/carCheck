import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
const BookingItemsTable = ({ order, index }) => {
  const { _id, name, email, date, title, price, img } = order;
  return (
    <tr className="text-lg bg-base-300">
      <td>
        <span>{index + 1}</span>
      </td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-24 h-24">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th className="flex flex-col gap-2 justify-center items-center  ">
        <button className="btn btn-success btn-sm w-full">
          <FaCheck /> confirm
        </button>
        <button className="btn btn-error btn-sm w-full">
          <FaDeleteLeft />
          delete
        </button>
      </th>
    </tr>
  );
};

export default BookingItemsTable;
