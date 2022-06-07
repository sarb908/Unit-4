import React from "react";

const Filters = (props) => {
  return (
    <div>
      <select onChange={(e) => props.filterHandler(e.target.value)}>
        <option>Filter by Department </option>
        <option value="HR"> HR</option>
        <option value="Tech">Tech</option>
        <option value="Operations">Operations</option>
      </select>
      <select onChange={(e) => props.sortHandler(e.target.value)}>
        <option>Sort By Salary</option>
        <option value="HL"> High to Low</option>
        <option value="LH"> Low to High</option>
      </select>
    </div>
  );
};

export default Filters;
