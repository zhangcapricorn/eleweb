import { BaseURL, axios } from './config';

export const getBrowserPathsList = params => { return axios.get(`${BaseURL}/browserPaths/List`, { params: params }); };

export const deleteBrowserPath = params => { return axios.get(`${BaseURL}/browserPaths/delete`, { params: params }); };
