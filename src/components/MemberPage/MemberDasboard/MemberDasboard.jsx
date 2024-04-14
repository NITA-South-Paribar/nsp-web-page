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
    <div className="flex justify-between mt-5">
      {/* Filter section STARTS here */}
      <div className="bg-slate-400 mt-[30px] ml-4 rounded-xl h-[620px]">
        <aside className="p-8">
          <h4 className="text-center">Filters</h4>

          <div className="hidden lg:block">
            <div
              className=" flex items-center justify-end cursor-pointer hover:text-gray-600"
              onClick={reset}
            >
              Reset
            </div>
            <form className="space-y-10 divide-y divide-gray-200">
              {filters.map((section, sectionIdx) => (
                <Filter
                  key={section.id}
                  section={section}
                  sectionIdx={sectionIdx}
                  activeFilters={activeFilters}
                  setActiveFilters={setActiveFilters}
                  activeFilterOptions={
                    activeFilters.find((af) => af.type === section.id)
                  }
                  onUpdateFilter={onUpdateFilter}
                />
              ))}
            </form>
          </div>
        </aside>
      </div>
      {/* Filter section ENDS here */}

      {/* Members Card section STARTS here */}
      <div className="flex-1 flex-shrink-0 h-screen">
        <div
          className="p-4 h-7px w-17px flex flex-wrap"
          style={{ overflowY: "auto" }}
        >
          {filtermembers.length === 0 && (
            <div className="text-center w-full text-4xl font-normal tracking-tight text-gray-900">
              Sorry no members available
            </div>
          )}
          {filtermembers.length > 0 &&
            filtermembers.map((item, index) => (
              <div key={index} className="w-1/4 p-3 ">
                <div className="bg-slate-800 rounded-2xl">
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
              </div>
            ))}
        </div>
      </div>
      {/* Members Card section ENDS here */}
    </div>
  );
};

export default MemberDashboard;
