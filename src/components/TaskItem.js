import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';
import '../styles/TaskItem.css';

const TaskItem = ({ task, setTaskToEdit }) => {
    const dispatch = useDispatch();

    return (
        <div className="task-item">
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
            <div className="task-actions">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => dispatch(toggleTask(task.id))}
                />
                <button onClick={() => setTaskToEdit(task)}>Edit</button>
                <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            </div>
        </div>
    );
};

export default TaskItem;
