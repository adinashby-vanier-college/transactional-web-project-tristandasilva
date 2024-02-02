import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function useUserFound() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedInUser = Cookies.get('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  return user;
}

export default useUserFound;
