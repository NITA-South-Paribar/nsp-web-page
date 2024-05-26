import { filters } from "../../constants/member";
import { useState } from "react";
import { SigninModal } from "../SigninModal/SigninModal";
import { useForm } from "react-hook-form";

export const MemberSignUp = () => {
  const [openModal, setOpenModal] = useState(false);

  /** This hook return an object that contains several useful properties and methods that can be used with forms */
  /** React hook form doesn't re-render on every key strocks on form control that improves performance a lot */
  const form = useForm();

  const { register, handleSubmit, formState, watch, reset } = form;
  let pwd = watch("password");

  const { errors } = formState;

  const submitDetails = (data) => {
    console.log("Submitted", data);
    console.log("Name", data.username);
    console.log("Email", data.email);
    console.log("Password", data.password);
    console.log("Confirm Password", data.confirmPassword);
    alert(JSON.stringify(data));
    reset()
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="bg-white w-[640px] rounded-lg p-5 justify-center h-auto mt-10">
        <p className="text-[26px] text-black font-bold text-center">
          Create your member account
        </p>
        <form onSubmit={handleSubmit(submitDetails)}>
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
              type="text"
              id="username"
              {...register("username", {
                required: "You must enter your name",
              })}
            />
            <p className="mt-2 text-red-500">{errors.username?.message}</p>
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
              type="email"
              id="email"
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
                validate: {
                  notValidEmail: (fieldValue) => {
                    if (fieldValue) {
                      return (
                        fieldValue.endsWith("gmail.com") ||
                        "This email domain is not supported, Enter your gmail id"
                      );
                    }
                    return "You must have to put your gmail";
                  },
                },
              })}
            />
            <p className="mt-2 text-red-500">{errors.email?.message}</p>
          </div>

          <div className="flex justify-between items-center">
            {/* Admission Year */}
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
                {...register("year", {
                  required: "Admission Year is required",
                })}
              >
                {filters[0].options.map((year, yearIdx) => (
                  <option key={yearIdx}>{year.value}</option>
                ))}
              </select>
              <p className="mt-2 text-red-500">{errors.year?.message}</p>
            </div>

            {/* Engineering Branch */}
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
                {...register("department", {
                  required: "Department is required",
                })}
              >
                {filters[1].options.map((department, departmentIdx) => (
                  <option key={departmentIdx}>{department.value}</option>
                ))}
              </select>
              <p className="mt-2 text-red-500">{errors.department?.message}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            {/* NIT Roll No Input Field */}
            <div>
              <label
                htmlFor="rollNo"
                className="block mt-6 text-black text-lg  font-extrabold"
              >
                NIT-A Enrollment No
              </label>
              <input
                className="w-[240px] mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                type="text"
                id="rollNo"
                {...register("rollNo", { required: "Roll No is required" })}
              />
              <p className=" mt-2 text-red-500">{errors.rollNo?.message}</p>
            </div>

            {/* NIT Registration Input Field */}
            <div>
              <label
                htmlFor="registrationNo"
                className="block mt-6 text-black text-lg  font-extrabold"
              >
                NIT-A Registration No
              </label>
              <input
                className="w-[240px] mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                id="registrationNo"
                type="text"
                {...register("registrationNo", {
                  required: "Registration No is required",
                })}
              />
              <p className=" mt-2 text-red-500">
                {errors.registrationNo?.message}
              </p>
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
                    value="male"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-30 dark:bg-gray-700 dark:border-gray-600"
                    {...register("gender", {required: "Gender is required"})}
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
                    value="female"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-30 dark:bg-gray-700 dark:border-gray-600"
                    {...register("gender", {required: "Gender is required"})}
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
                    value="other"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-30 dark:bg-gray-700 dark:border-gray-600"
                    {...register("gender", {required: "Gender is required"})}
                  />
                  <label
                    for="other-gender"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                  >
                    Other
                  </label>
                </div>
              </div>
              <p className="mt-2 text-red-500">{errors.gender?.message}</p>
            </div>

            {/* Aadhaar */}
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
                id="aadhaar"
                {...register("aadhaar", {
                  required: "Aadhaar is required"
                })}
              />
              <p className="mt-2 text-red-500">{errors.aadhaar?.message}</p>
            </div>
          </div>

          {/* Password Section */}
          <div className="flex justify-between items-center">
            {/* Password Section */}
            <div>
              <label
                htmlFor="password"
                className="block mt-6 text-black text-lg  font-extrabold"
              >
                Password
              </label>
              <input
                className="w-[240px] mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                type="password"
                id="password"
                {...register("password", {
                  required: "You must specify a password",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <p className=" mt-2 text-red-500">{errors.password?.message}</p>
            </div>

            {/* Confirm Password Section */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mt-6 text-black text-lg  font-extrabold"
              >
                Confirm Password
              </label>
              <input
                className="w-[240px] mt-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === pwd || "The passwords do not match",
                })}
              />
              <p className=" mt-2 text-red-500">
                {errors.confirmPassword?.message}
              </p>
            </div>
          </div>

          <button className="w-[480px] ml-16 mt-8 text-white text-xl font-bold bg-gradient-to-r from-green-500 to-green-900 py-2 px-4 rounded-md cursor-pointer hover:bg-gradient-to-t hover:from-green-400 hover:to-green-900">
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
