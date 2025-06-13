import { createSlice } from '@reduxjs/toolkit';
import studentsData from '../data/studentsData.json';

const initialState = {
    students: studentsData,
    totalStudents: studentsData.length,
};

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
            state.totalStudents++;
        },
        updateStudent: (state, action) => {
            const index = state.students.findIndex(student => student.id === action.payload.id);
            if (index !== -1) {
                state.students[index] = action.payload;
            }
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload);
            state.totalStudents--;
        },
    },
});

export const { addStudent, updateStudent, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;