const mode = 'production';

export const isInProdMode = () => {
  return mode == 'production';
};

const baseUrl = isInProdMode()
  ? 'http://35.183.197.147'
  : 'http://localhost:5050';

export default baseUrl;
