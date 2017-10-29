import { BaseURL, axios } from './config';

export const getTaskLists = params => { return axios.get(`${BaseURL}/task/List`, { params: params }); };
