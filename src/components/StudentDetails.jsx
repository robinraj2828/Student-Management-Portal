import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StudentDetails = () => {
    const { id } = useParams();
    const student = useSelector(state => state.students.students.find(student => student.id === parseInt(id)));

    if (!student) return <h2>Student not found</h2>;

    return (
        <div className="student-details">
            <h2>{student.name}</h2>
            <p>Email: {student.email}</p>
            <p>Age: {student.age}</p>
            <p>Class: {student.class}</p>
            <p>Address: {student.address}</p>
            <p>Phone: {student.phone}</p>
        </div>
    );
};

export default StudentDetails;