import { BaseURL, axios } from './config';

export const getGroupList = params => { return axios.get(`${BaseURL}/group/List`, { params: params }); };

export const getAccountLevel = params => { return axios.get(`${BaseURL}/account/level`, { params: params }); };

export const getAccountViews = params => { return axios.get(`${BaseURL}/account/views`, { params: params }); };

export const getAccountOrderStatus = params => { return axios.get(`${BaseURL}/account/orderStatus`, { params: params }); };

export const getAccountComment = params => { return axios.get(`${BaseURL}/account/comment`, { params: params }); };

export const getAccountCitys = params => { return axios.get(`${BaseURL}/account/citys`, { params: params }); };

export const addGroup = params => { return axios.get(`${BaseURL}/group/add`, { params: params }); };

export const deleteGroup = params => { return axios.get(`${BaseURL}/group/delete`, { params: params }); };

export const getAccountStatistics = params => { return axios.get(`${BaseURL}/group/statistics`, { params: params }); };

export const getGroupDetail = params => { return axios.get(`${BaseURL}/account/detail/`, { params: params }); };