import './App.css';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const [t, i18n] = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  return (
    <div className='h-screen'>
      <Outlet />
    </div>
  );
}

export default App;
