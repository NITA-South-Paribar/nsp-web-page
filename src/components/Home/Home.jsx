import { FaExternalLinkAlt } from "react-icons/fa";
import backgroundImage from '/src/assets/background.jpg';
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 mt-12">
  <div 
    className="absolute inset-0 bg-contain bg-center" 
    style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      opacity: 0.40 
    }}
  ></div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5f5dc]"></div>
</div>

      <motion.div initial={{y:100,opacity: 0}} animate={{y:0, opacity: 1}} transition={{
          duration:"1",
          delay:".5"
      }} className="absolute inset-0 flex flex-col items-center justify-center z-1">
        <div className="text-8xl text-center font-bold mb-4 text-slate-800 tracking-tight Heading" style={{ textShadow: '2px 2px #fff' }}>
          WELCOME TO NSP
        </div>
        <div className="text-lg max-w-4xl text-center mb-6 px-20 text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam recusandae, architecto dicta fugit laborum illo eveniet. Ab dolorum eius quaerat accusantium dolores quisquam, temporibus voluptates ducimus a doloremque fugit!
        </div>
        <div>
          <a href="https://chat.whatsapp.com///IlR4GvrCtNBLpXeVHWXJpM" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center text-white font-black bg-gradient-to-r from-green-500 to-green-900 py-2 px-4 rounded-md cursor-pointer hover:bg-gradient-to-t hover:from-green-400 hover:to-green-900">
              Join our community
              <FaExternalLinkAlt className="ml-2" />
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
