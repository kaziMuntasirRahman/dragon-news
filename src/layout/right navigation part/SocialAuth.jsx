import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const SocialAuth = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log(result.user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully logged in with google.",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/');
    } catch (error) {
      console.error(error.message);
      console.log(error.message);
    }
  }

  const handleGithubSignIn = async () => {
    try {
      const result = await githubSignIn();
      console.log(result.user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully logged in with google.",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/');
    } catch (error) {
      console.error(error.message);
      console.log(error.message);
    }
  }



  return (
    <div className="flex flex-col gap-2 w-full p-1">
      <h2 className="text-neutral-700 text-left text-xl font-semibold mb-3">Login With</h2>

      <button onClick={handleGoogleSignIn} className="btn btn-sm btn-outline btn-info w-64">
        <FaGoogle />
        <p>Login with Google</p>
      </button>

      <button onClick={handleGithubSignIn} className="btn btn-sm btn-outline w-64">
        <FaGithub />
        <p>Login with Github</p>
      </button>
    </div>
  );
};

export default SocialAuth;