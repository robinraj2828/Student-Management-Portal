import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../redux/studentSlice';
import { useNavigate } from 'react-router-dom';

const StudentRow = ({ student }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            dispatch(deleteStudent(student.id));
        }
    };

    return (
        <tr>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.class}</td>
            <td>
                <button onClick={() => navigate(`/students/${student.id}`)}>View</button>
                <button onClick={() => navigate(`/students/${student.id}/edit`)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    );
};

export default StudentRow;