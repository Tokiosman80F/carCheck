import  { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialAccount = () => {
  const { googleSignIn } = useContext(AuthContext);
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const handleGoogleSIgnIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        navigate(from)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="text-center ">
      <p > or</p>

      <input
        onClick={handleGoogleSIgnIn}
        type="submit"
        value="Login with google"
        className="btn btn-outline capitalize w-full"
      />
    </div>
  );
};

export default SocialAccount;
