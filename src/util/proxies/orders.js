import axios from 'axios';

export const getOrders = async () => await axios.get('/api/orders');

export const createOrder = async order => await axios.post('/api/orders', order);

export const updateOrder = async id => await axios.put(`/api/orders/${id}`);

export const deleteOrder = async id => await axios.delete(`/api/orders/${id}`);
