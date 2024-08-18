import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { filterTasks } from './redux/actions';
import './App.css';

const App = () => {
    const [taskToEdit, setTaskToEdit] = useState(null);
    const dispatch = useDispatch();

    const clearEdit = () => setTaskToEdit(null);

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <TaskForm taskToEdit={taskToEdit} clearEdit={clearEdit} />
            <div className="filter-buttons">
                <button onClick={() => dispatch(filterTasks('ALL'))}>All Tasks</button>
                <button onClick={() => dispatch(filterTasks('COMPLETED'))}>Completed Tasks</button>
                <button onClick={() => dispatch(filterTasks('INCOMPLETE'))}>Incomplete Tasks</button>
            </div>
            <TaskList setTaskToEdit={setTaskToEdit} />
        </div>
    );
};

export default App;
