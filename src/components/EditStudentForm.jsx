import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStudent } from '../redux/studentSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudentForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const student = useSelector(state => state.students.students.find(student => student.id === parseInt(id)));

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        class: '',
        address: '',
        phone: '',
    });

    useEffect(() => {
        if (student) {
            setFormData(student);
        }
    }, [student]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateStudent({ ...formData }));
        navigate('/students'); // Redirect back to student list
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Student Name" required />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required />
            <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
            <input name="class" value={formData.class} onChange={handleChange} placeholder="Class" required />
            <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone No." required />
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditStudentForm;