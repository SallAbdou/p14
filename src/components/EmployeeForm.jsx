import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";
import Select from "./Select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker"; //nouveau date picker
import "react-datepicker/dist/react-datepicker.css";
import Modal from "./Modal";


const states = [
  { name: "Alabama", abbreviation: "AL" },
  { name: "Alaska", abbreviation: "AK" },
  { name: "American Samoa", abbreviation: "AS" },
  { name: "Arizona", abbreviation: "AZ" },
  { name: "Arkansas", abbreviation: "AR" },
  { name: "California", abbreviation: "CA" },
  { name: "Colorado", abbreviation: "CO" },
  { name: "Connecticut", abbreviation: "CT" },
  { name: "Delaware", abbreviation: "DE" },
  { name: "District Of Columbia", abbreviation: "DC" },
  { name: "Florida", abbreviation: "FL" },
  { name: "Georgia", abbreviation: "GA" },
  { name: "Hawaii", abbreviation: "HI" },
  { name: "Idaho", abbreviation: "ID" },
  { name: "Illinois", abbreviation: "IL" },
  { name: "Indiana", abbreviation: "IN" },
  { name: "Iowa", abbreviation: "IA" },
  { name: "Kansas", abbreviation: "KS" },
  { name: "Kentucky", abbreviation: "KY" },
  { name: "Louisiana", abbreviation: "LA" },
  { name: "Maine", abbreviation: "ME" },
  { name: "Maryland", abbreviation: "MD" },
  { name: "Massachusetts", abbreviation: "MA" },
  { name: "Michigan", abbreviation: "MI" },
  { name: "Minnesota", abbreviation: "MN" },
  { name: "Mississippi", abbreviation: "MS" },
  { name: "Missouri", abbreviation: "MO" },
  { name: "Montana", abbreviation: "MT" },
  { name: "Nebraska", abbreviation: "NE" },
  { name: "Nevada", abbreviation: "NV" },
  { name: "New Hampshire", abbreviation: "NH" },
  { name: "New Jersey", abbreviation: "NJ" },
  { name: "New Mexico", abbreviation: "NM" },
  { name: "New York", abbreviation: "NY" },
  { name: "North Carolina", abbreviation: "NC" },
  { name: "North Dakota", abbreviation: "ND" },
  { name: "Ohio", abbreviation: "OH" },
  { name: "Oklahoma", abbreviation: "OK" },
  { name: "Oregon", abbreviation: "OR" },
  { name: "Pennsylvania", abbreviation: "PA" },
  { name: "Rhode Island", abbreviation: "RI" },
  { name: "South Carolina", abbreviation: "SC" },
  { name: "South Dakota", abbreviation: "SD" },
  { name: "Tennessee", abbreviation: "TN" },
  { name: "Texas", abbreviation: "TX" },
  { name: "Utah", abbreviation: "UT" },
  { name: "Vermont", abbreviation: "VT" },
  { name: "Virginia", abbreviation: "VA" },
  { name: "Washington", abbreviation: "WA" },
  { name: "West Virginia", abbreviation: "WV" },
  { name: "Wisconsin", abbreviation: "WI" },
  { name: "Wyoming", abbreviation: "WY" },
];

const departments = [
  'Sales',
  'Marketing',
  'Engineering',
  'Human Resources',
  'Legal',
]


const EmployeeForm = () => {
  const dispatch = useDispatch();
  const [department, setDepartment] = useState('Sales');
  const [state, setState] = useState('AL');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [showModal, setShowModal] = useState(false); // État pour la modale

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Création de l'objet employé 
    const newEmployee = {
      firstName: form.current[0].value,
      lastName: form.current[1].value,
      dateOfBirth: form.current[2].value,
      startDate: form.current[3].value,
      street: form.current[4].value,
      city: form.current[5].value,
      state: state,
      zipCode: form.current[7].value,
      department: department
    };

    dispatch(addEmployee(newEmployee));

    // Ouvre la modale à la soumission
    setShowModal(true);

    // Réinitialisation auto du formulaire
    e.target.reset();
  };

  return (
    
    <div className="container">
  
    <a href="#">
      <img alt="logo" src="/img/logo.png" />
    </a>

      <h2>Create Employee</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <DatePicker
          selected={dateOfBirth}
          onChange={(date) => setDateOfBirth(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Date of Birth"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
        />

        <label htmlFor="startDate">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Start Date"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
        />

        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" />

          <label htmlFor="city">City</label>
          <input type="text" id="city" />

          <label htmlFor="state">State</label>
          <Select onChange={(value) => setState(value)} data={states} option={{ name: 'name', value: 'abbreviation' }} />

          <label htmlFor="zipCode">Zip Code</label>
          <input type="number" id="zipCode" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <Select onChange={(value) => setDepartment(value)} data={departments} />

        <button type="submit">Save</button>
      </form>

      {/* Lien vers la page EmployeeList */}
      <Link to="/employees">View Employee List</Link>

      {/* composant Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <p>Employee created successfully!</p>
      </Modal>
    </div>
  );
};

export default EmployeeForm;