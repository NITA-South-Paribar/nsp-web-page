import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/NSP-Logo.png";
import { navItems } from "../../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { SigninModal } from "../SigninModal/SigninModal";
export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mobileDraweOpen, setMobileDraweOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDraweOpen(!mobileDraweOpen);
  };

  return (


  
    <nav className="sticky top-0 z-50 py-3  bg-slate-800 mx-60 my-5 rounded-lg text-white w-3/4 px-6">
      <div className="container mx-auto relative text-md font-semibold">
        <div className="flex justify-between items-center">
          <Link
            to=""
            className="flex items-center flex-shrink-0 cursor-pointer"
          >
            <img className="h-10 w-12" src={logo} alt="" />
            <span className="text-2xl mx-1 tracking-tight font-sans">NSP</span>
          </Link>
          <ul className="hidden lg:flex ml-14 space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className="cursor-pointer rounded-lg py-2 px-2 hover:bg-gray-700"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <div>
              <button
                onClick={() => setOpenModal(true)}
                className="text-yellow-500 hover:text-white rounded-lg py-2 px-4 text-center hover:bg-gray-700"
              >
                Sign in
              </button>
              <SigninModal
                open={openModal}
                onClose={() => setOpenModal(false)}
              />
            </div>

            <Link to="signup">
              <button className="bg-gradient-to-r from-green-500 to-green-900 py-2 px-4 rounded-md cursor-pointer hover:bg-gradient-to-t hover:from-green-400 hover:to-green-900">
                Member Sign Up
              </button>
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDraweOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Responsive Navbar Starts here */}
        {mobileDraweOpen && (
          <div className="fixed right-0 z-20 bg-gray-300 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 cursor-pointer">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link
                to=""
                className="py-2 px-3 rounded-md border cursor-pointer"
              >
                Sign In
              </Link>
              <Link
                to=""
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md cursor-pointer"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
        {/* Responsive Navbar Ends here */}
      </div>
    </nav>
  
  );
};

{
  /* <a href="#_" class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer  bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
<span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
<span class="relative">Button Text</span>
</a> */
}