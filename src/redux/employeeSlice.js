import { createSlice } from "@reduxjs/toolkit";

const initialEmployees = [
  {
    firstName: "John",
    lastName: "Doe",
    startDate: "2023-01-15",
    department: "Engineering",
    dateOfBirth: "1990-05-20",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    startDate: "2022-08-12",
    department: "Marketing",
    dateOfBirth: "1985-11-30",
    street: "456 Broadway",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90012",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    startDate: "2021-06-05",
    department: "Human Resources",
    dateOfBirth: "1988-04-22",
    street: "789 Sunset Blvd",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
  },
  {
    firstName: "Bob",
    lastName: "Williams",
    startDate: "2020-09-30",
    department: "Sales",
    dateOfBirth: "1992-07-15",
    street: "101 Ocean Dr",
    city: "Miami",
    state: "FL",
    zipCode: "33139",
  },
  {
    firstName: "Emma",
    lastName: "Brown",
    startDate: "2023-03-22",
    department: "Legal",
    dateOfBirth: "1995-12-10",
    street: "222 Elm St",
    city: "Chicago",
    state: "IL",
    zipCode: "60616",
  },
];

const employeesSlice = createSlice({
  name: "employees",
  initialState: initialEmployees,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload); 
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
