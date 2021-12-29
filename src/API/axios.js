import axios from 'axios';

// api url
export const url = 'http://localhost:8080';

// instance of axios to use it everywhere
const instance = axios.create({
  baseUrl: url,
});

export default instance;