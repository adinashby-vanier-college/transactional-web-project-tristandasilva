import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const [t, i18n] = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='text-white font-thin text-sm'>
      <button onClick={() => changeLang('en')}>EN</button>
      <span> | </span>
      <button onClick={() => changeLang('fr')}>FR</button>
    </div>
  );
};

export default LanguageToggle;
