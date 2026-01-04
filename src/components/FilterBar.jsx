import React from 'react';
import { useTranslation } from 'react-i18next';

const FilterBar = ({ filters, onFilterChange }) => {
  const { t } = useTranslation();
  const years = [2023, 2024, 2025]; // example options, could be dynamic
  const regions = ['North', 'South', 'East', 'West'];
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="year-filter">{t('filterLabel.year')}</label>
        <select 
          id="year-filter" 
          value={filters.year || ''} 
          onChange={e => onFilterChange('year', e.target.value)}
        >
          <option value="">{t('filterLabel.year')} (All)</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="region-filter">{t('filterLabel.region')}</label>
        <select 
          id="region-filter" 
          value={filters.region || ''} 
          onChange={e => onFilterChange('region', e.target.value)}
        >
          <option value="">{t('filterLabel.region')} (All)</option>
          {regions.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      {/* ... other filters as needed ... */}
    </div>
  );
};
export default FilterBar;
