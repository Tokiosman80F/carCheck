import logImage from "../../assets/login/login.svg";
import google from "../../assets/login/google.svg";

const LoginPage = () => {
  return (
    <div>
      <div className="hero h-screen">
        <div className="hero-content flex-col lg:flex-row gap-48">
          <div>
            <img src={logImage} alt="" />
          </div>
          <div className=" card flex-shrink-0 w-full max-w-sm  ">
            <form className="card-body text-dark2 border   border-primaryColor rounded-2xl">
            <h1 className="text-center  text-3xl font-semibold ">Login </h1>
              <div className="form-control">
                <label className="label">
                  <span >Email</span>
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
                  <span >Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                /> 
              </div>
              <div className="form-control mt-6">
                <button className="btn capitalize text-white bg-primaryColor hover:bg-black">Login with Email</button>
              </div>
                <p className="text-center"> or</p>
                <div className="form-control mt-6">
                   
                <button className="btn btn-outline capitalize">  <img src={google} alt="" /> Login with google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
