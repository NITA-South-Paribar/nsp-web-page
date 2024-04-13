import { filters } from "../../constants/member";
import { useState } from "react";

import { SigninModal } from "../SigninModal/SigninModal";
export const MemberSignUp = () => {
  const [openModal, setOpenModal] = useState(false);
  const submitDetails = () => {};

  return (
    <div className="flex items-center justify-center p-12">
      <div className="bg-white w-[640px] rounded-lg p-5 justify-center h-auto">
        <p className="text-[26px] text-black font-bold text-center">
          Create your member account
        </p>
        <form>
          <div>
            <label
              htmlFor="name"
              className="block mt-6 text-black text-lg  font-extrabold"
            >
              Full Name
            </label>
            <input
              className="mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="FirstName LastName"
              value=""
            />
            {/* {emailError && <p className=" mt-2 text-red-500">{emailError}</p>} */}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mt-4 block text-lg font-extrabold text-black"
            >
              G-mail
            </label>
            <input
              className="mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white"
              placeholder="example@gmail.com"
              type="enter your mail id"
              value=""
            />
            {/* {passwordError && (
              <p className="mt-2 text-red-500">{passwordError}</p>
            )} */}
          </div>

          <div className="flex justify-between items-center">
            {/* Engineering Branch */}
            <div>
              <label
                htmlFor="passout_year"
                className="block mt-6 text-black text-lg  font-extrabold"
              >
                Passout Year
              </label>
              <select
                name="year"
                id="year"
                className="w-[200px] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {filters[0].options.map((year, yearIdx) => (
                  <option key={yearIdx}>{year.value}</option>
                ))}
              </select>
            </div>

            {/* Passout Year */}
            <div>
              <label
                htmlFor="department"
                className="block mt-6 text-black text-lg  font-extrabold"
              >
                Department
              </label>
              <select
                name="department"
                id="department"
                className="w-[200px] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {filters[1].options.map((department, departmentIdx) => (
                  <option key={departmentIdx}>{department.value}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled="false"
            onClick={submitDetails}
            className="w-[480px] ml-16 mt-8 text-white text-xl font-bold bg-gradient-to-r from-green-500 to-green-900 py-2 px-4 rounded-md cursor-pointer hover:bg-gradient-to-t hover:from-green-400 hover:to-green-900"
          >
            Create an account
          </button>
        </form>
        <div className=" mt-6 flex justify-center items-start ">
          <p className="text-xl text-black   font-bold  ">
            Already have an account
          </p>

          <div></div>
          <button
            onClick={() => setOpenModal(true)}
            className="  text-xl font-medium ml-4 text-yellow-600 "
          >
            Sign In
          </button>
          <SigninModal
            open={openModal}
            onOpen={() => setOpenModal(true)}
            onClose={() => setOpenModal(false)}
          />
        </div>
      </div>
    </div>
  );
};
