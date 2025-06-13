import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const totalStudents = useSelector(state => state.students.totalStudents);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>Total Students: {totalStudents}</p>
        </div>
    );
};

export default Dashboard;