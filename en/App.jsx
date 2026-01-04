import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import KPIGroup from './components/KPIGroup';
import ChartPanel from './components/ChartPanel';
import MapPanel from './components/MapPanel';
import MediaGallery from './components/MediaGallery';
import SessionList from './components/SessionList';

const App = () => {
  const { t, i18n } = useTranslation();

  // We could manage global state for filters here
  const [filters, setFilters] = React.useState({ year: null, region: null });
  // Handler to update filters (passed down to FilterBar)
  const updateFilter = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app-container">
      <Navbar 
        currentLanguage={i18n.language} 
        onLanguageChange={lang => i18n.changeLanguage(lang)} 
      />
      <Hero />
      <div className="content-wrapper">
        <FilterBar filters={filters} onFilterChange={updateFilter} />
        <KPIGroup filters={filters} />
        <div className="data-visuals">
          <ChartPanel filters={filters} />
          <MapPanel filters={filters} />
        </div>
        <MediaGallery filters={filters} />
        <SessionList filters={filters} />
      </div>
    </div>
  );
};

export default App;
