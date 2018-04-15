export const baseURL = process.env.API_URL || '/api/v1/';

export default {
  baseURL,
  responseType: 'json',
  withCredentials: true,
}
