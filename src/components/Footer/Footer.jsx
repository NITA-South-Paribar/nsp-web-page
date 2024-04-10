import { TbBrandGithubFilled } from "react-icons/tb";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = () => {
  let iconStyles = { color: "white", fontSize: "2.5em" };
  return (
    <div className="bg-slate-800 mt-[360px]">
      <div className="border-b border-solid border-white border-opacity-20 py-6 text-center">
        <div className="p-0">
          <div className="inline">
            <h3 className="text-white inline text-3xl leading-10 mb-3 mr-5">
              Have a Question? We're here to help{" "}
            </h3>
            <a
              className="con bg-orange-500 hover:bg-orange-700  rounded-3xl text-white inline-block text-lg leading-6 px-5 py-3 transition duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:transition"
              href="#"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-6 px-12">
        <div className="flex justify-between items-start flex-row flex-wrap w-full text-left mb-8 text-white">
          <div className="flex flex-row justify-between gap-5 mt-6">
            <div className="motion-safe:hover:-translate-y-0.5 motion-safe:transition">
              <a href="#">
                <FaInstagram style={iconStyles} />
              </a>
            </div>
            <div className="motion-safe:hover:-translate-y-0.5 motion-safe:transition">
              <a
                href="https://www.linkedin.com/company/nita-south-pariwar/"
                target="_blank"
              >
                <FaLinkedinIn style={iconStyles} />
              </a>
            </div>
            <div className="motion-safe:hover:-translate-y-0.5 motion-safe:transition">
              <a
                href="https://www.linkedin.com/company/nita-south-pariwar/"
                target="_blank"
              >
                <FaXTwitter style={iconStyles} />
              </a>
            </div>
            <div className="motion-safe:hover:-translate-y-0.5 motion-safe:transition">
              <a
                href="https://github.com/NITA-South-Paribar/nsp-web-page.git"
                target="_blank"
              >
                <TbBrandGithubFilled style={iconStyles} />
              </a>
            </div>
          </div>
          <div className="w-36 m-4 flex justify-start flex-col text-md">
            <h4 className="text-xl leading-17 mb-3">Quick Links</h4>
            <a className="text-gray-700 no-underline" href="">
              <p className="leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400">
                About
              </p>
            </a>
            <a className="text-gray-700 no-underline" href="">
              <p className="leading-4 my-2 cursor-pointer text-slate-400  hover:border-yellow-400 hover:text-yellow-400">
                {" "}
                Contests
              </p>
            </a>
            <a className="text-gray-700 no-underline" href="">
              <p className="leading-4 my-2 cursor-pointer text-slate-400  hover:border-yellow-400 hover:text-yellow-400">
                Contact
              </p>
            </a>
          </div>
          <div className="w-36 m-4 flex justify-start flex-col text-md">
            <h4 className="text-xl leading-17 mb-3 hover:border-yellow-400 ">
              Support
            </h4>
            <a className="text-gray-700 no-underline" href="">
              <p className="leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400">
                +91 - 0000 000 000
              </p>
            </a>
            <a className="text-gray-700 no-underline" href="">
              <p className="leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400">
                nspariwar.g1@gmail.com
              </p>
            </a>
            <a className="text-gray-700 no-underline" href="">
              <p className="leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400 ">
                FAQ
              </p>
            </a>
          </div>
          <div className="w-36 m-4 flex justify-start flex-col text-md">
            <h4 className="text-xl leading-17 mb-3 hover:border-yellow-400 ">
              Locations
            </h4>
            <a className="text-gray-700 no-underline" href="">
              <p className="leading-4 my-2 cursor-pointer text-slate-400  hover:border-yellow-400  hover:text-yellow-400">
                Agartala
              </p>
            </a>
            <a className="text-gray-700 no-underline" href="">
              <p className="leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400 ">
                Bangalore
              </p>
            </a>
            <a className="text-gray-700 no-underline" href="">
              <p className="leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400">
                Hyderabad
              </p>
            </a>
          </div>
        </div>
        <hr className="text-white w-full !important"></hr>

        <div className="flex flex-row justify-between mt-1">
          <div className="sb__footer-copyright">
            <p className="text-white font-semibold text-xs leading-5">
              @{new Date().getFullYear()} NSP All rights reserved.
            </p>
          </div>
          <div className="flex flex-row">
            <a href="">
              <div>
                <p className="text-white font-semibold text-xs leading-5 ml-8">
                  Terms & Conditions
                </p>
              </div>
            </a>
            <a href="">
              <div>
                <p className="text-white font-semibold text-xs leading-5 ml-8">
                  Privacy
                </p>
              </div>
            </a>
            <a href="">
              <div>
                <p className="text-white font-semibold text-xs leading-5 ml-8">
                  Security
                </p>
              </div>
            </a>
            <a href="">
              <div>
                <p className="text-white font-semibold text-xs leading-5 ml-8">
                  Cookie Declaration
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
