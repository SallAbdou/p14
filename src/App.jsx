import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
