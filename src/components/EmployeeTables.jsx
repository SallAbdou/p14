import React from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

const EmployeeTable = () => {
  const employees = useSelector((state) => state.employees);

  // Définition des colonnes
  const columns = [
    { name: "First Name", selector: (row) => row.firstName, sortable: true },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    { name: "Start Date", selector: (row) => row.startDate, sortable: true },
    { name: "Department", selector: (row) => row.department, sortable: true },
    { name: "Date of Birth", selector: (row) => row.dateOfBirth, sortable: true },
    { name: "Street", selector: (row) => row.street },
    { name: "City", selector: (row) => row.city },
    { name: "State", selector: (row) => row.state },
    { name: "Zip Code", selector: (row) => row.zipCode },
  ];

  return (
    <div>

      <h2>Employee List</h2>


        {/* //ajouter placeholder de search  */}

      
      <DataTable
        columns={columns}
        data={employees}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default EmployeeTable;
