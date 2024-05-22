import { filters } from "../../constants/member";
import { useState } from "react";
import { SigninModal } from "../SigninModal/SigninModal";

export const MemberSignUp = () => {
  const [openModal, setOpenModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [gender, setGender] = useState("");
  const [aadhaarFile, setAadhaarFile] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPwd, setConfirmPwd] = useState("")

  const submitDetails = () => {};

  return (
    <div className="flex items-center justify-center p-12">
      <div className="bg-white w-[640px] rounded-lg p-5 justify-center h-auto">
        <p className="text-[26px] text-black font-bold text-center">
          Create your member account
        </p>
        <form onSubmit={submitDetails}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* {nameError && <p className=" mt-2 text-red-500">{nameError}</p>} */}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mt-4 block text-lg font-extrabold text-black"
            >
              G-email
            </label>
            <input
              className="mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white"
              placeholder="example@gmail.com"
              type="enter your email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                Admission Year
              </label>
              <select
                name="year"
                id="year"
                className="w-[240px] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {filters[0].options.map((year, yearIdx) => (
                  <option key={yearIdx}>{year.value}</option>
                ))}
              </select>
            </div>

            {/* Admission Year */}
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
                className="w-[240px] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {filters[1].options.map((department, departmentIdx) => (
                  <option key={departmentIdx}>{department.value}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* NIT Roll No Input Field */}
            <div>
              <label
                htmlFor="rollNo"
                className="block mt-6 text-black text-lg  font-extrabold"
              >
                NIT Roll No
              </label>
              <input
                className="w-[240px] mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                value={rollNo}
                type="text"
                onChange={(e) => setRollNo(e.target.value)}
              />
              {/* {rollnoError && <p className=" mt-2 text-red-500">{rollnoError}</p>} */}
            </div>

            {/* NIT Registration Input Field */}
            <div>
              <label
                htmlFor="registrationNo"
                className="block mt-6 text-black text-lg  font-extrabold"
              >
                NIT Registration No
              </label>
              <input
                className="w-[240px] mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                value={registrationNo}
                type="text"
                onChange={(e) => setRegistrationNo(e.target.value)}
              />
              {/* {registrationError && <p className=" mt-2 text-red-500">{registrationError}</p>} */}
            </div>
          </div>

          <div className="flex justify-between items-center">

            {/* Gender */}
            <div>
              <label
                htmlFor="gender"
                className="block mt-6 text-black text-lg  font-extrabold"
              >
                Gender
              </label>
              <div className="flex justify-between gap-3 w-[240px] mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                <div>
                  <input
                    id="male"
                    type="radio"
                    value={gender}
                    name="male-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-30 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="male-gender"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                  >
                    Male
                  </label>
                </div>
                <div>
                  <input
                    id="female"
                    type="radio"
                    value={gender}
                    name="female-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-30 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="female-gender"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                  >
                    Female
                  </label>
                </div>
                <div>
                  <input
                    id="other"
                    type="radio"
                    value={gender}
                    name="other-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-30 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="other-gender"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                  >
                    Other
                  </label>
                </div>
              </div>
            </div>

            {/* Aadhaar */}
            <div>
              <div>
                <label
                  htmlFor="aadhaarFile"
                  className="block mt-6 text-black text-lg  font-extrabold"
                >
                  Aadhaar
                </label>
                <input
                  className="w-[240px] mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder="Aadhaar No"
                  type="file"
                  value={aadhaarFile}
                  onChange={(e) => setAadhaarFile(e.target.value)}
                />
                {/* {aadhaarFileError && <p className=" mt-2 text-red-500">{registrationError}</p>} */}
              </div>
            </div>
          </div>

          {/* Password Section */}
          <div className="flex justify-between items-center">
            {/* Password Section */}
            <div>
              <label
                htmlFor="rollNo"
                className="block mt-6 text-black text-lg  font-extrabold"
              >
                Password
              </label>
              <input
                className="w-[240px] mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* {rollnoError && <p className=" mt-2 text-red-500">{rollnoError}</p>} */}
            </div>

            {/* Confirm Password Section */}
            <div>
              <label
                htmlFor="registrationNo"
                className="block mt-6 text-black text-lg  font-extrabold"
              >
                Confirm Password
              </label>
              <input
                className="w-[240px] mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                value={confirmPwd}
                type="password"
                onChange={(e) => setConfirmPwd(e.target.value)}
              />
              {/* {registrationError && <p className=" mt-2 text-red-500">{registrationError}</p>} */}
            </div>
          </div>

          <button
            type="submit"
            disabled="false"
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
