import React from 'react';

function Filter({
  section,
  sectionidx,
  activeFilters,
  setActiveFilters,
  activeFilterOptions,
  onUpdateFilter,
}) {
  const onChangeFilter = (type, value) => {
    if (isExisted(value)) {
      removeOption(value, type);
    } else {
      addOption(value, type);
    }
    onUpdateFilter();
  };

  const isExisted = (value) => {
    return activeFilterOptions.includes(value);
  };

  const addOption = (value, type) => {
    activeFilterOptions.push(value);
    updateFilter(type);
  };

  const removeOption = (value, type) => {
    let index = activeFilterOptions.indexOf(value);
    activeFilterOptions.splice(index, 1);
    updateFilter(type);
  };

  const updateFilter = (type) => {
    let updatedFilters = activeFilters.map((af) => {
      if (af.type == type) {
        af.options = activeFilterOptions;
      }
      return af;
    });
    setActiveFilters(updatedFilters);
  };

  return (
    <div key={section.name} className={sectionidx === 0 ? null : "pt-10 rounded"}>
      <fieldset>
        <legend className="block text-lg  text-gray-900 text-center ml-5">
          {/* Centered section name */}
          {section.name}
        </legend>
        <div className="space-y-6 pt-4 ml-5">
          {/* {section.options.map((option, optionIdx) => ( */}
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {section.options.map((option, optionIdx) => (
                      <option key={optionIdx}>{option.value}</option>

                ))}
              
              </select>


        </div>
      </fieldset>
    </div>

  );
}

export default Filter;
