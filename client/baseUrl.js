const mode = 'production';

export const isInProdMode = () => {
  return mode == 'production';
};

const baseUrl = isInProdMode()
  ? 'http://3.96.167.136/'
  : 'http://localhost:5050';

export default baseUrl;
