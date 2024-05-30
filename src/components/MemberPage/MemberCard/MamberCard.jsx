import React from "react";
import PropTypes from "prop-types";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const MemberCard = ({
  name,
  linkedin,
  instagram,
  Github,
  Twitter,
  myimage,
  company,
  branch,
}) => {
  const openLinkedIn = () => {
    window.open(linkedin, "_blank");
  };
  const openinstagram = () => {
    window.open(instagram, "_blank");
  };
  const openGithub = () => {
    window.open(Github, "_blank");
  };
  const openTwitter = () => {
    window.open(Twitter, "_blank");
  };

  return (
    <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-md w-72">
      <div class="relative mx-1 mt-1 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-md h-80">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile-picture"
        />
      </div>
      <h4 class="block text-center text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Jessica Wong
      </h4>
      <div class="px-6 py-0 text-center">
        <p class="block font-sans text-lg antialiased font-medium leading-relaxed text-gray-400 bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
          CEO / Co-Founder
        </p>
      </div>
      <div class="flex justify-center px-4 pt-3 gap-8">
        <button onClick={openLinkedIn}>
          <FaLinkedinIn style={{ color: "#0b66c3", fontSize: "2em" }} />
        </button>
        <button onClick={openinstagram}>
          <GrInstagram style={{ color: "#fd01a4", fontSize: "2em" }} />
        </button>
        <button onClick={openTwitter}>
          <FaXTwitter style={{ color: "black", fontSize: "2em" }} />
        </button>
      </div>
      <div className="text-center text-md text-gray-500 w-[40%] rounded-md py-1 mx-20 my-2">
        <NavLink to={`/nsp-web-page/members/${5}`} className="cursor-pointer">
          More Deatils
        </NavLink>
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  Github: PropTypes.string.isRequired,
  myimage: PropTypes.string.isRequired,
};

export default MemberCard;
