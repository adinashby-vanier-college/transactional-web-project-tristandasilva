const mode = 'production';

export const isInProdMode = () => {
  return mode == 'production';
};

const baseUrl = isInProdMode()
  ? 'http://35.182.209.67/'
  : 'http://localhost:5050';

export default baseUrl;
