export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const updateTask = (task) => ({ type: UPDATE_TASK, payload: task });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });
export const filterTasks = (filter) => ({ type: FILTER_TASKS, payload: filter });
