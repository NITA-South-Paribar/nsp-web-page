import React from "react";
import logo from "../../assets/NSP-Logo.png";
import { X, Download } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
export const SigninModal = ({ open, onOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const email = event.target.value;
    const emailRegex =
      /^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid Username or Email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    const password = event.target.value;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:;<>,.?~[\]\-\\]).{8,20}$/i;

    if (!passwordRegex.test(password)) {
      setPasswordError("Please enter a valid Password");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    if (emailError || passwordError) {
      return;
    }
    alert(email + " " + password);
  };

  const isDisabled = !(email && password);
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
   
   
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    
    };
  }, []);

  
  const handleclick = (e) => {
    if (
      e.target.className ===
      " bg-black bg-opacity-40   backdrop-blur-sm  font-roboto h-screen  overflow-auto pt-16 fixed top-0 left-0 w-full z-50"
    ) {
     
      onClose();
    }
  };
  if (!open) return null;

  return ReactDOM.createPortal (
    <>
    <div
      onClick={handleclick}
      className=" bg-black bg-opacity-40   backdrop-blur-sm  font-roboto h-screen  overflow-auto pt-16 fixed top-0 left-0 w-full z-50"
    >
      <div className="mt-10 bg-white border border-gray-400 rounded-lg  h-auto  mx-auto  px-5 py-4 w-[500px]">
        <div className="flex justify-between  items-center relative text-gray-200 font-bold text-lg h-30px ">
          <img
            src={logo}
            alt=""
            className=" w-16 flex items-center justify-center  motion-safe:hover:-translate-y-0.5 motion-safe:transition  "
          />

          <button
            onClick={onClose}
            className=" text-gray-400 cursor-pointer text-3xl font-bold absolute top-0 right-0"
          >
            <X />
          </button>
        </div>

        <div className="mt-2 ml-6 ">
          <p className="text-[26px] text-black    font-bold  ">
            Sign in to Your Member's Account
          </p>
        </div>

        <div className="bg-white  rounded-lg p-5   h-auto">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2   text-black  ml-2    text-lg  font-extrabold"
              >
                Username
              </label>
              <input
                className=" mt-4 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder="your e-mail or username"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <p className=" mt-2 text-red-500">{emailError}</p>}
            </div>

            <div>
              <label
                htmlFor="password"
                className="mt-6 block  text-lg font-extrabold text-black  ml-2"
              >
                Password
              </label>
              <input
                className="  mt-4 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder="password [8-20] (Min. 1-a,1-A,1-Number,1-Special Char.)"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <p className="mt-2 text-red-500">{passwordError}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isDisabled}
              className={`${
                isDisabled
                  ? "opacity-50 cursor-not-allowed mt-8 w-full px-8 py-4 rounded-lg text-2xl font-semibold text-center h-14 border-none flex justify-center items-center space-x-3   bg-gradient-to-r from-green-500 to-green-800 hover:bg-gradient-to-t hover:from-green-400 hover:to-green-900 transition duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:transition "
                  : " mt-12 w-full px-8 py-4 rounded-lg text-2xl font-semibold text-center h-14 border-none flex justify-center items-center space-x-3   bg-gradient-to-r from-green-500 to-green-800 hover:bg-gradient-to-t hover:from-green-400 hover:to-green-900 transition duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:transition"
              }`}
            >
              Sign in
            </button>
          </form>
          <div className=" mt-6 flex justify-center items-start ">
            <p className="text-xl text-black   font-bold  ">
              Don't have an account
            </p>
            <button className="  text-xl font-medium ml-4 text-yellow-600 ">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>

    </>,
    document.querySelector(" .myPortalModal")
  );
};
