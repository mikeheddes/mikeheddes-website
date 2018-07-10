export const baseURL = process.env.API_URL || '/api/v2/';

export default {
  baseURL,
  responseType: 'json',
  withCredentials: true,
};
