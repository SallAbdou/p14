import React from "react";

const Select = React.forwardRef((props, ref) => {
  return (
    <select ref={ref} {...props}>
      <option value="Sales">Sales</option>
      <option value="Marketing">Marketing</option>
      <option value="Engineering">Engineering</option>
      <option value="Human Resources">Human Resources</option>
      <option value="Legal">Legal</option>
    </select>
  );
});

export default Select;
