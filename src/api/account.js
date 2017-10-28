import { BaseURL, axios } from './config';

export const getAccounts = params => { return axios.get(`${BaseURL}/account/List`, { params: params }); };