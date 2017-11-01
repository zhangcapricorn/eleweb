import { BaseURL, axios } from './config';

export const getTaskLists = params => { return axios.get(`${BaseURL}/task/List`, { params: params }); };
export const addNewTask = params => { return axios.get(`${BaseURL}/tasks/add`, { params: params }); };
export const getTodoLists = params => { return axios.get(`${BaseURL}/tasks/todoList/list`, { params: params }); };
export const filterTodoList = params => { return axios.get(`${BaseURL}/tasks/todoList/filter`, { params: params });};