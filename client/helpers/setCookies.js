import Cookies from 'js-cookie';

const setCookies = (data) => {
  const envMode = 'development';
  Cookies.set('token', data.token, {
    secure: envMode === 'production',
  });
  Cookies.set('user', JSON.stringify(data.user), {
    secure: envMode === 'production',
  });
};

export default setCookies;
