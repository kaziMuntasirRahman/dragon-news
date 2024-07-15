import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const handleLogin = (e) =>{
    e.preventDefaults();
    setLoginError('');
    setLoginSuccess('');
    console.log(email, password);
  }

  return (
    <div className="bg-zinc-100 pb-10">
      <Navbar />
      <section className="bg-white w-[750px] mx-auto py-[88px] px-[72px]">
        <p className="text-center text-neutral-700 text-4xl font-semibold ">Login Your Account</p>
        {/* divider */}
        <div className="w-full border border-neutral-200 my-12" />
        {/* form start */}
        <form onSubmit={handleLogin} className="px-6 m-0 flex flex-col gap-6">
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

          {loginError && <p className="text-red-600">{loginError}</p>}
          {loginSuccess && <p className="text-green-600">{loginSuccess}</p>}
          <button type="submit" className="text-white bg-neutral-700 rounded-[5px] p-5">Register</button>
          <p className="text-neutral-700 text-lg text-center">
            Don&apos;t have an account?
            <Link
              className="text-blue-600 font-semibold link link-hover"
              to={'/register'}
            >
              &nbsp;Register Now.
            </Link>
          </p>
        </form>
      </section>

    </div>
  );
};

export default Login;