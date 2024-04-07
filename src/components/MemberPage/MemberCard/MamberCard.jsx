import React from 'react';
import PropTypes from 'prop-types';
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
const MemberCard = ({ name, linkedin, instagram, Github, Twitter, myimage, company, branch }) => {
  const openLinkedIn = () => {
    window.open(linkedin, '_blank');
  };
  const openinstagram = () => {
    window.open(instagram, '_blank');
  };
  const openGithub = () => {
    window.open(Github, '_blank');
  };
  const openTwitter = () => {
    window.open(Twitter, '_blank');
  };
  let iconStyles = { color: "white", fontSize: "2em" };
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={myimage} alt="User" style={{ width:300, height:280, borderRadius:15,padding:2}}/>
        <div className='text-center'>
          <h1 className="text-white text-2xl font-extrabold">{name}</h1>
          <p className="text-white">{company}</p>
          <p className="text-white">{branch}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-5 py-2">
        <button onClick={openLinkedIn}>
          <FaLinkedinIn style={iconStyles} />
        </button>
        <button onClick={openinstagram}>
          <GrInstagram style={iconStyles} />
        </button>
        <button onClick={openGithub}>
          <TbBrandGithubFilled style={iconStyles} />
        </button>
        <button onClick={openTwitter}>
          <FaXTwitter style={iconStyles} />
        </button>
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
  about: PropTypes.string.isRequired,
};

export default MemberCard;

