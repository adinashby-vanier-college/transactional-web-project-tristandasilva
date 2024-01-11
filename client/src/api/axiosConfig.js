import axios from 'axios';

const mode = 'production';
let baseUrl;

mode == 'production'
  ? (baseUrl = 'http://99.79.60.159:5050')
  : (baseUrl = 'http://localhost:5050');

export default axios.create({
  baseURL: baseUrl,
});
