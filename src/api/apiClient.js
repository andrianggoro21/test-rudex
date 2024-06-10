import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-type': 'application/json',
  },
});

export const getSales = () => apiClient.get('/sales');
export const getSalesByProduct = (product) => apiClient.get(`/sales?product=${product}`);
export const getSalesByDateRange = (startDate, endDate) => apiClient.get(`/sales?start_date=${startDate}&end_date=${endDate}`);
