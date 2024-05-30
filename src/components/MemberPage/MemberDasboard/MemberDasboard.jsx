import React, { useState } from "react";
import Membercard from "../MemberCard/MamberCard";
import { members } from "../../../constants/member";
import me from "../../../assets/User.jpeg";
import { filters } from "../../../constants/member";
import Filter from "../Filter/Filter";

export const MemberDashboard = () => {
  const [filtermembers, setfiltermembers] = useState(members);
  const [activeFilters, setActiveFilters] = useState([
    { type: "year", options: [] },
  ]);

  const onUpdateFilter = () => {
    let updatedFilterProducts = members.filter((fp) => {
      let options = activeFilters.find((af) => af.type === "year").options;
      return options.includes(fp.year.toLowerCase());
    });
    setfiltermembers(updatedFilterProducts);
  };
  const reset = () => {
    setfiltermembers(members);
    setActiveFilters([{ type: "year", options: [] }]);
  };

  return (
    <div className="p-4">
      <div className="text-3xl font-bold">
        <p>Member Dashboard</p>
      </div>
      <div className="flex justify-between mt-5">
        {/* Filter section STARTS here */}
        <div className="w-[33%] rounded-xl h-[620px] bg-white p-4">
          <div className="flex justify-between text-gray-500">
            <p className="text-center text-md">Filter Plans</p>
            <p className="text-md cursor-pointer">Reset</p>
          </div>
          <hr className="mt-2" />
          <div className="hidden lg:block">
            <form className="space-y-5 divide-gray-200">
              {filters.map((section, sectionIdx) => (
                <Filter
                  key={section.id}
                  section={section}
                  sectionIdx={sectionIdx}
                  activeFilters={activeFilters}
                  setActiveFilters={setActiveFilters}
                  activeFilterOptions={activeFilters.find(
                    (af) => af.type === section.id
                  )}
                  onUpdateFilter={onUpdateFilter}
                />
              ))}

              <div className="flex justify-between gap-3 bg-white text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-3 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                <label htmlFor="gender" className="text-gray-700 text-lg">
                  Gender
                </label>
                <div className="pt-1.5">
                  <input
                    id="male"
                    type="radio"
                    value="male"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-30 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="male-gender"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                  >
                    Male
                  </label>
                </div>
                <div className="pt-1.5">
                  <input
                    id="female"
                    type="radio"
                    value="female"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-30 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="female-gender"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                  >
                    Female
                  </label>
                </div>
              </div>
              <div className="py-10">
                <button className="bg-blue-600 px-6 py-1 rounded-3xl text-xl text-white w-full">
                  Find
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Filter section ENDS here */}

        {/* Members Card section STARTS here */}
        <div className="flex flex-wrap gap-10 ml-5">
          {filtermembers.length === 0 && (
            <div className="text-center w-full text-4xl font-normal tracking-tight text-gray-900">
              Sorry no members available
            </div>
          )}
          {filtermembers.length > 0 &&
            filtermembers.map((item, index) => (
              <div key={index} className="w-[22%]">
                <Membercard
                  name={item.name}
                  linkedin={item.linkedin}
                  instagram={item.instagram}
                  Github={item.Github}
                  Twitter={item.Twitter}
                  myimage={me}
                  company={item.company}
                  branch={item.branch}
                />
              </div>
            ))}
        </div>
        {/* Members Card section ENDS here */}
      </div>
    </div>
  );
};

export default MemberDashboard;
