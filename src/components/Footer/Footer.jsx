import React from "react";

import insta from "../../assets/instagramlogo.jpeg";
import linkedin from "../../assets/linkedinlogo.png";

export const Footer = () => {
  return (
    <div className="bg-cyan-950">
      <div class="border-b border-solid border-white border-opacity-20 py-8 px-4 text-center">
        <div class="p-0">
          <div class="inline">
            <h3 class="text-white inline text-4xl leading-10 mb-6 mr-5">
              Have a Question? We're here to help{" "}
            </h3>
            <a
              class="con bg-orange-500 hover:bg-orange-700  rounded-3xl text-white inline-block text-lg leading-6 px-5 py-3 transition duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:transition"
              href="https://alterdomus.com/contact-us/"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-16 px-16">
        <div className="flex justify-between items-start flex-row flex-wrap w-full text-left mb-8">
          <div className="w-36 m-4 flex justify-start flex-col text-white">
            <h4 class="text-xs leading-17 mb-3">NITA South Paribar</h4>
            <div className="flex flex-row">
              <a href="https://www.linkedin.com/company/nita-south-pariwar/">
                <p>
                  <img
                    src={insta}
                    alt=""
                    class="w-2/5   motion-safe:hover:-translate-y-0.5 motion-safe:transition"
                  />
                </p>
              </a>
              <a href="https://www.linkedin.com/company/nita-south-pariwar/">
                <p>
                  <img
                    src={linkedin}
                    alt=""
                    class="w-2/5      motion-safe:hover:-translate-y-0.5 motion-safe:transition"
                  />
                </p>
              </a>
            </div>
          </div>
          <div className="w-36 m-4 flex justify-start flex-col text-white">
            <h4 class="text-xs leading-17 mb-3"> Sectors</h4>
            <a class="text-gray-700 no-underline" href="/Private Equity">
              <p class="text-xs leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400">
                Private Equity
              </p>
            </a>
            <a class="text-gray-700 no-underline" href="/healthplan">
              <p class="text-xs leading-4 my-2 cursor-pointer text-slate-400  hover:border-yellow-400 hover:text-yellow-400">
                {" "}
                Real Assets
              </p>
            </a>
            <a class="text-gray-700 no-underline" href="/individual">
              <p class="text-xs leading-4 my-2 cursor-pointer text-slate-400  hover:border-yellow-400 hover:text-yellow-400">
                Private Debt
              </p>
            </a>
          </div>
          <div className="w-36 m-4 flex justify-start flex-col text-white">
            <h4 class="text-xs leading-17 mb-3 hover:border-yellow-400 ">
              About us
            </h4>
            <a class="text-gray-700 no-underline" href="/resources">
              <p class="text-xs leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400">
                Who We Are
              </p>
            </a>
            <a class="text-gray-700 no-underline" href="/resources">
              <p class="text-xs leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400">
                Our Leadership
              </p>
            </a>
            <a class="text-gray-700 no-underline" href="/resources">
              <p class="text-xs leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400 ">
                Careers
              </p>
            </a>
          </div>

          <div className="w-36 m-4 flex justify-start flex-col text-white">
            <h4 class="text-xs leading-17 mb-3 hover:border-yellow-400 ">
              Locations
            </h4>
            <a class="text-gray-700 no-underline" href="/about">
              <p class="text-xs leading-4 my-2 cursor-pointer text-slate-400  hover:border-yellow-400  hover:text-yellow-400">
                India
              </p>
            </a>
            <a class="text-gray-700 no-underline" href="/press">
              <p class="text-xs leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400 ">
                Europe
              </p>
            </a>
            <a class="text-gray-700 no-underline" href="/contact">
              <p class="text-xs leading-4 my-2 cursor-pointer text-slate-400 hover:border-yellow-400 hover:text-yellow-400">
                Asia
              </p>
            </a>
          </div>
        </div>
        <hr class="text-white w-full !important"></hr>

        <div className="flex flex-row justify-between mt-1">
          <div className="sb__footer-copyright">
            <p class="text-white font-semibold text-xs leading-5">
              @{new Date().getFullYear()} NSP All rights reserved.
            </p>
          </div>
          <div className="flex flex-row">
            <a href="/terms">
              <div>
                <p class="text-white font-semibold text-xs leading-5 ml-8">
                  Terms & Conditions
                </p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p class="text-white font-semibold text-xs leading-5 ml-8">
                  Privacy
                </p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p class="text-white font-semibold text-xs leading-5 ml-8">
                  Security
                </p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p class="text-white font-semibold text-xs leading-5 ml-8">
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

