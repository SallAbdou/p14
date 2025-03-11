import { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

const EmployeeTable = () => {
  const employees = useSelector((state) => state.employees);
  const [search, setSearch] = useState("");

  // Filtrer les employés en fonction de la recherche
  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

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

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un employé..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default EmployeeTable;
