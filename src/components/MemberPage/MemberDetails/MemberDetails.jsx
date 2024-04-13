
import { useParams } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faLink, faLocationDot, faPhone, faSchool } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import membersData from '../../../constants/index'; // Import the data array

const MemberDetails = () => {

  const { email } = useParams();
  
  // Find the member with the specified memberId
  const member = membersData.find(member => member.email === email);

  if (!member) {
    return <div>Member not found!</div>;
  }

  return (
    <div>
      <div className="flex pt-5 px-10 gap-10 pb-5 justify-center mt-auto mr-top mb-auto ml-auto">
        <div className="w-1/3 h-auto ">
          <div className="h-auto pr-10 pl-10	py-5 bg-slate-100 rounded-md shadow-xl hover:bg-slate-200">
            <div className="flex justify-between">
              <img src={member.image} alt="photo" style={{ width:80, height:80, borderRadius:50,}}/>
            </div>
            <div className="mt-5"> 
              <div className='text-2xl'>Name: {member.name}</div>
              <div>Company: {member.company}</div>
              <div>Role: {member.role}</div>
            </div>
          </div>
          <div className="mt-8 h-auto pr-10 pl-10	py-5 bg-slate-100 rounded-md shadow-xl hover:bg-slate-200">
            <div className="flex justify-between">
              <h2 className='text-2xl'>Personal Information</h2>
            </div>
            <hr style={{ borderColor: 'lightgrey' }} ></hr>
            <div className="mt-5"> 
              <div className='flex gap-3'>
                <FontAwesomeIcon icon={faEnvelope} style={{ height: "1.2em", marginRight: '10px' }}/>
                <p className='text-base'>Email: {member.email}</p>
              </div>
              <div className='flex gap-3'>
                <FontAwesomeIcon icon={faPhone} style={{ height: "1.2em", marginRight: '10px' }}/>
                <p className='text-base'>Phone: {member.phone}</p>
              </div>
              <div className='flex gap-3'>
                <FontAwesomeIcon icon={faLocationDot} style={{ height: "1.2em", marginRight: '10px' }}/>
                <p className='text-base'>Country: {member.country}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-auto">
          <div className="h-auto pr-10 pl-10 pt-10 pb-10 bg-slate-100 rounded-md shadow-xl hover:bg-slate-200">
            <div className="flex gap-3">
              <FontAwesomeIcon icon={faBriefcase} style={{ height: "1.6em", marginRight: '10px' }}/>
              <h2 className='text-2xl'>Work Experience</h2>
            </div>
            <hr style={{ borderColor: 'lightgrey' }} ></hr>
            <div className="mt-5"> 
              <div>{member.workExperience}</div>
            </div>
          </div>
          <div className="mt-8 h-auto pr-10 pl-10 pt-10 pb-10 bg-slate-100 rounded-md shadow-xl hover:bg-slate-200">
            <div className="flex gap-3">
              <FontAwesomeIcon icon={faGraduationCap} style={{ height: "1.6em", marginRight: '10px' }}/>
              <h2 className='text-2xl'>Education</h2>
            </div>
            <hr style={{ borderColor: 'lightgrey' }} ></hr>
            <div className="mt-5"> 
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faSchool} style={{ height: "1.6em", marginRight: '10px' }}/>
                <div>{member.education}</div>
              </div>
            </div>
          </div>
          <div className="mt-8 h-auto pr-10 pl-10 pt-10 pb-10 bg-slate-100 rounded-md shadow-xl hover:bg-slate-200">
            <div className="flex gap-3">
              <FontAwesomeIcon icon={faLink} style={{ height: "1.6em", marginRight: '10px' }}/>
              <h2 className='text-2xl'>Links</h2>
            </div>
            <hr style={{ borderColor: 'lightgrey' }} ></hr>
            <div className="mt-5"> 
              {member.links.map((link, index) => (
                <div key={index}>
                  <a href={link.url}>{link.type}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 h-auto pr-10 pl-10 pt-10 pb-10 bg-slate-100 rounded-md shadow-xl hover:bg-slate-200">
            <div className="flex gap-3">
              <h2 className='text-2xl'>My Skills</h2>
            </div>
            <hr style={{ borderColor: 'lightgrey' }} ></hr>
            <div className="flex gap-3 mt-5"> 
              {member.skills.map((skill, index) => (
                <button key={index} style={{ backgroundColor: '#f8f9fa', color: 'black', border: 'none', padding: '5px 10px', borderRadius: '10px', boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>{skill}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
