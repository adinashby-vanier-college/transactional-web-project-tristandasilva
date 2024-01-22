const mode = 'production';

export const isInProdMode = () => {
  return mode == 'production';
};

const baseUrl = isInProdMode()
  ? 'http://99.79.60.159'
  : 'http://localhost:5050';

export default baseUrl;
