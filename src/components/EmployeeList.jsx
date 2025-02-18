import EmployeeTable from "./EmployeeTables";
import { Link } from "react-router-dom";


function EmployeeList() {
  return (
    <div>
      <EmployeeTable />
        {/* Lien vers la page EmployeeList */}
        <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
