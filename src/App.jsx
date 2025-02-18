import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import Modal from './components/Modal';

function App() {
  return (
    <Router>
      <div>
        <h1>HRnet</h1>
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/modal" element={<Modal />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
