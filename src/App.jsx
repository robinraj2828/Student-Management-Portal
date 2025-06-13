import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import RegistrationForm from './components/RegistrationForm';
import StudentDetails from './components/StudentDetails';
import EditStudentForm from './components/EditStudentForm'; 
import './App.css';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<StudentList />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/students/:id" element={<StudentDetails />} />
                <Route path="/students/:id/edit" element={<EditStudentForm />} /> {/* Route for editing */}
            </Routes>
        </Router>
    );
};

export default App;