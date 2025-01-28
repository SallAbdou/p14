import { useSelector } from 'react-redux';

function EmployeeList() {
  const employees = useSelector((state) => state.employees);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.firstName} {employee.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
