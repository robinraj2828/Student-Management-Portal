import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: students.length + 1 }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};