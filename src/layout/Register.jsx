import { useContext, useState } from "react";
import Navbar from "../component/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [acceptedTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault();
    setRegisterError('');
    setRegisterSuccess('');

    if (!acceptedTerms) {
      setRegisterError("*You must accept our terms and conditions.");
      return;
    } else if (password.length < 6) {
      setRegisterError("*Password length should be greater than 6.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("*Password must contain an uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("*Password must contain lowercase letter.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setRegisterError("*Password must contain a number.");
      return;
    } else if (!/[^\w\s]/.test(password)) {
      setRegisterError("*Password must contain a special character.");
      return;
    }
    try{
      const result = await createUser(email, password);
      console.log(result.user);
      await updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL
        })
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Profile Successfully Created.",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/');
              
    } catch(error) {
        setRegisterError(error.message);
        console.log(error.message);
      }
  }





  return (
    <div className="bg-zinc-100 pb-10">
      <Navbar />
      <section className="bg-white w-[750px] mx-auto py-[88px] px-[72px]">
        <p className="text-center text-neutral-700 text-4xl font-semibold ">Register Your Account</p>
        {/* divider */}
        <div className="w-full border border-neutral-200 my-12" />
        {/* form start */}
        <form onSubmit={handleRegister} className="px-6 m-0 flex flex-col gap-6">
          {/* input name */}
          <label>
            <span className="label label-text text-neutral-700 text-lg font-semibold">Your name</span>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-zinc-100 rounded-[5px] p-5" />
          </label>
          {/* input photoURL */}
          <label>
            <span className="label label-text text-neutral-700 text-lg font-semibold">Your Photo URL</span>
            <input
              type="text"
              name="photoURL"
              required
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter your photo url"
              className="w-full bg-zinc-100 rounded-[5px] p-5" />
          </label>
          {/* input email */}
          <label>
            <span className="label label-text text-neutral-700 text-lg font-semibold">Your Email</span>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-zinc-100 rounded-[5px] p-5" />
          </label>
          {/* input password */}
          <label>
            <span className="label label-text text-neutral-700 text-lg font-semibold">Your Password</span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-zinc-100 rounded-[5px] p-5" />
              <button
                type="button"
                className="absolute right-5 top-1/2 transform -translate-y-1/2 scale-150"
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(false)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>

          {/* terms and conditions */}
          <div className="text-neutral-500 flex items-center gap-3">
            <input
              type="checkbox"
              className="checkbox checkbox-lg"
              name="acceptTerms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            <h2>
              Accept
              <span className="font-semibold"> Terms & Conditions</span>
            </h2>
          </div>
          {registerError && <p className="text-red-600">{registerError}</p>}
          {registerSuccess && <p className="text-green-600">{registerSuccess}</p>}
          <button type="submit" className="text-white bg-neutral-700 rounded-[5px] p-5">Register</button>
          <p className="text-neutral-700 text-lg text-center">
            Already have an account?
            <Link
              className="text-blue-600 font-semibold link link-hover"
              to={'/login'}
            >
              &nbsp;Login Here.
            </Link>
          </p>
        </form>
      </section>

    </div>
  );
};

export default Register;