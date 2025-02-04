import React from "react";
import { useSelector } from "react-redux";

function EmployeeList() {
  const employees = useSelector((state) => state.employees);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.length === 0 ? (
          <p>Aucun employé enregistré</p>
        ) : (
          employees.map((employee, index) => (
            <li key={index}>
              {employee.firstName} {employee.lastName} {employee.department} {employee.dateOfBirth}  
              {employee.startDate} {employee.street} {employee.city}
            </li>
            
           ))
        )}
      </ul>
    </div>
  );
}

export default EmployeeList;
