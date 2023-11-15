import { Link } from "react-router-dom";
import logImage from "../../assets/login/login.svg";

const RegisterPage = () => {
    const handleRegister = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const name=form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { name,email, password };
        console.log(userInfo);
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
              <h1 className="text-center  text-3xl font-semibold ">Register </h1>
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

                <p className="text-center"> or</p>

                <input
                  type="submit"
                  value="SignUp with google"
                  className="btn btn-outline capitalize"
                />
              </div>
              <p>
                Already have an account?
                <Link className="text-primaryColor underline">Login </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
