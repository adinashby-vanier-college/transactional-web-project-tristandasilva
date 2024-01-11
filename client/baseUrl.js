const mode = 'development';

export const isInProdMode = () => {
  return mode == 'production';
};

const baseUrl = isInProdMode()
  ? 'http://99.79.60.159:5050'
  : 'http://localhost:5050';

export default baseUrl;
