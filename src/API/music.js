import axios from 'axios'

import config, { baseURL } from './config'

  const initApi = axios.create({
    ...config,
    baseURL: baseURL + 'music/',
  })

  const get = (url) => initApi.get(url);
  const post = (url, data) => initApi.post(url, data);
  const put = (url, data) => initApi.put(url, data);
  const del = (url) => initApi.delete(url);


export default {
  // Standard requests
  get,
  post,
  put,
  delete: del,

  // Custom helper requests
  getLatest: () => get('?limit=1'),
  getAll: () => get(''),
  getById: (id) => get(`${id}`),
  create: (data) => post('', data),
  update: (id, data) => put(`${id}`, data),
}
