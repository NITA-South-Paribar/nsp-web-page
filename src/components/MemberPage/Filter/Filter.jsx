import React from "react";

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
    <div
      key={section.name}
      className={sectionidx === 0 ? null : "pt-10 rounded"}
    >
      <fieldset>
        <div className="space-y-3">
          {/* {section.options.map((option, optionIdx) => ( */}
          <select className="block w-full px-4 py-3 text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md">
            <option value={section.name}>{section.name}</option>
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
