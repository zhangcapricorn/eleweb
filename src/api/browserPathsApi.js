import { BaseURL, axios } from './config';

export const getBrowserPathsList = params => { return axios.get(`${BaseURL}/browserPaths/List`, { params: params }); };