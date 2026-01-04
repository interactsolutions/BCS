import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = ({ currentLanguage, onLanguageChange }) => {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <h1>{t('appTitle')}</h1>
      <div className="language-switcher">
        <label htmlFor="lang-select" className="visually-hidden">{t('language')}</label>
        <select 
          id="lang-select" 
          value={currentLanguage} 
          onChange={e => onLanguageChange(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          {/* other languages as needed */}
        </select>
      </div>
    </nav>
  );
};
export default Navbar;
