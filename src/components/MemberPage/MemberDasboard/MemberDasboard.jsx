import React, { useState } from 'react';
import Membercard from "../MemberCard/MamberCard";
import { members } from "../../../constants/index";
import me from "../../../assets/User.jpeg"
import { filters } from "../../../constants/index"
import Filter from "../Filter/Filter"

export const MemberDashboard = () => {
  const [filtermembers, setfiltermembers] = useState(members)
  const [activeFilters, setActiveFilters] = useState([
    { type: "companies", options: [] }
  ]);

  const onUpdateFilter = () => {
    let updatedFilterProducts = members
      .filter((fp) => {
        let options = activeFilters.find((af) => af.type === "companies").options;
        return options.includes(fp.companies.toLowerCase());
      });
    setfiltermembers(updatedFilterProducts);
  };
  const reset = () => {
    setfiltermembers(members);
    setActiveFilters([
      { type: "companies", options: [] }
    ]);
  };

  return (
    <div className="flex mt-5">
      <div className="bg-slate-400 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 ml-5 rounded-2xl">
        <aside>
          <h4 className="sr-only text-center">Filters</h4>

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
                      .options
                  }
                  onUpdateFilter={onUpdateFilter}
                />
              ))}
            </form>
          </div>
        </aside>
      </div>

      <div className="flex-1 flex-shrink-0 h-screen" >
        <div className="p-4 h-7px w-17px flex flex-wrap" style={{ overflowY: 'auto' }}>
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

    </div>
  );
};

export default MemberDashboard;

