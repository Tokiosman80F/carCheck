import { Link, useLocation, useNavigate } from "react-router-dom";
import logImage from "../../assets/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialAccount from "../Shared/SocialAccount/SocialAccount";
import Swal from "sweetalert2";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  // for redirecting to selected page
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  // handle user login

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const userInfo = { email, password };
    console.log(userInfo);

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged In Successful",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          console.log("login page user =>", user);
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="md:hero my-10 md:my-0  md:h-screen gap-3">
        <div className="md:hero-content flex  ">
          <div className="hidden md:block">
            <img src={logImage} alt="" />
          </div>
          <div className=" card-body text-dark2  card flex-shrink-0 w-full max-w-sm border-2 rounded-2xl">
            <form onSubmit={handleLogin} className="">
              <h1 className="text-center  text-3xl font-semibold ">Login </h1>
              <div className="form-control">
                <label className="label">
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>

              <div className="mt-2 ">
                <input
                  type="submit"
                  value="Login with Email"
                  className="w-full btn capitalize text-white bg-primaryColor hover:bg-black"
                />
              </div>
            </form>
            <SocialAccount></SocialAccount>
            <p>
              New Here?
              <Link to="/register" className="text-primaryColor underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
