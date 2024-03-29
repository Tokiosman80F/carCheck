import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((error) => console.log(error.message));
  };
  console.log(user);
  const navItems = (
    <>
      <li className="">
        <Link to="/">Home</Link>
      </li>
      
      <li>
        <Link to="/aboutus">About Us</Link>
      </li>
      {user ? (
        <li>
          <Link to="/bookingItems">Booking Items</Link>
        </li>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl ">CarCheck</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button className="rounded-full bg-primaryColor text-white p-2">
              {user?.email}
            </button>
            <Link
              to="/"
              onClick={handleLogout}
              className="ml-5 btn btn-outline capitalize  border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white hover:border-none "
            >
              SignOut
            </Link>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline capitalize  border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white hover:border-none "
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
