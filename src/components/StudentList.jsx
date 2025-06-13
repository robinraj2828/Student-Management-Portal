import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StudentRow from './StudentRow';

const StudentList = () => {
    const students = useSelector((state) => state.students.students);
    const [searchTerm, setSearchTerm] = useState('');
    const [classFilter, setClassFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 5; // Number of students to show per page

    // Get unique classes for filtering
    const uniqueClasses = [...new Set(students.map(student => student.class))];

    // Filter students based on search and class filter
    const filteredStudents = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesClass = classFilter ? student.class === classFilter : true;
        return matchesSearch && matchesClass;
    });

    // Calculate the index of the first and last student on the current page
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

    // Calculate total pages
    const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <h2>Student List</h2>
            <div className="search-filter">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select onChange={(e) => setClassFilter(e.target.value)} value={classFilter}>
                    <option value="">Filter by class</option>
                    {uniqueClasses.map((className, index) => (
                        <option key={index} value={className}>{className}</option>
                    ))}
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentStudents.length > 0 ? (
                        currentStudents.map((student) => (
                            <StudentRow key={student.id} student={student} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No students found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* Pagination Controls */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StudentList;