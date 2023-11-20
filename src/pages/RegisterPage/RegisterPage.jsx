import { Link } from "react-router-dom";
import logImage from "../../assets/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password };
    console.log(userInfo);
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user=>", user);
        if (user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration has been complete",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log("Error Code =>", error);
        if(error) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Already has an Account",
            showConfirmButton: false,
            timer: 2500,
          });
          form.reset()
        }
      });
  };
  return (
    <div>
      <div className="md:hero my-10 md:my-0  md:h-screen gap-3">
        <div className="md:hero-content flex  ">
          <div className="hidden md:block">
            <img src={logImage} alt="" />
          </div>
          <div className=" card flex-shrink-0 w-full max-w-sm ">
            <form
              onSubmit={handleRegister}
              className="card-body text-dark2 border-2  rounded-2xl"
            >
              <h1 className="text-center  text-3xl font-semibold ">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>

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

              <div className="flex flex-col  gap-2 mt-2">
                <input
                  type="submit"
                  value="SignUp with Email"
                  className="btn capitalize text-white bg-primaryColor hover:bg-black"
                />

              </div>
              <p>
                Already have an account?
                <Link to="/login" className="text-primaryColor underline">Login </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
