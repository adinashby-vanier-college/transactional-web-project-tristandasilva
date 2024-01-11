import axios from 'axios';

const baseUrl = 'http://99.79.60.159:5050';

export default axios.create({
  baseURL: baseUrl,
});
