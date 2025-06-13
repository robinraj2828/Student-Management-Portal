import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './redux/studentSlice';
import App from './App';
import './index.css'; 

const store = configureStore({
    reducer: {
        students: studentReducer,
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);