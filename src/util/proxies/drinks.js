import axios from 'axios';

export const getDrinks = async () => await axios.get('/api/drinks');
