import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../redux/actions';
import '../styles/TaskForm.css';

const TaskForm = ({ taskToEdit, clearEdit }) => {
    const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
    const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskToEdit) {
            dispatch(updateTask({ ...taskToEdit, title, description }));
            clearEdit();
        } else {
            const newTask = {
                id: Date.now(),
                title,
                description,
                completed: false,
            };
            dispatch(addTask(newTask));
        }

        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">
                {taskToEdit ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    );
};

export default TaskForm;
