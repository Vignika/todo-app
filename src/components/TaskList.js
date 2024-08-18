import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = ({ setTaskToEdit }) => {
    const { tasks, filter } = useSelector(state => state);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'COMPLETED') return task.completed;
        if (filter === 'INCOMPLETE') return !task.completed;
        return true;
    });

    return (
        <div className="task-list">
            {filteredTasks.map(task => (
                <TaskItem key={task.id} task={task} setTaskToEdit={setTaskToEdit} />
            ))}
        </div>
    );
};

export default TaskList;
