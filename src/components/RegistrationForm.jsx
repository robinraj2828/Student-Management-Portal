import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux/studentSlice';

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        class: '',
        address: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = { ...formData, id: Date.now() }; // Simple ID generation
        dispatch(addStudent(newStudent));
        setFormData({
            name: '',
            email: '',
            age: '',
            class: '',
            address: '',
            phone: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="registration-form">
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Student Name" required />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required />
            <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
            <input name="class" value={formData.class} onChange={handleChange} placeholder="Class" required />
            <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone No." required />
            <button type="submit">Register Student</button>
        </form>
    );
};

export default RegistrationForm;