import { FaExternalLinkAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="ml-[22%] mt-5 text-5xl px-5 py-3 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
      <h1>Official Website of NITA South Paribar</h1>
      <div className="h-[1000px] flex gap-5 mt-1" >
          <h2>Join Our Comunity in WhatsApp</h2>
          <a href="https://chat.whatsapp.com/IlR4GvrCtNBLpXeVHWXJpM" target="_blank">
            <FaExternalLinkAlt className="text-black "/>
          </a>
      </div>
    </div>
  );
};

export default Home;
