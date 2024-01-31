const mode = 'development';

export const isInProdMode = () => {
  return mode == 'production';
};

const baseUrl = isInProdMode()
  ? 'http://3.98.137.239'
  : 'http://localhost:5050';

export default baseUrl;
