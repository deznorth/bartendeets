import axios from 'axios';

export const login = async (username, password) => await axios.post('/api/auth', {
  data: JSON.stringify({ username, password }),
});

export const logout = async () => await axios.post('/api/auth/logout');
