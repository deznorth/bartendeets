import axios from 'axios';

// READ
export const getExample = async () => await axios.get('/api/example');