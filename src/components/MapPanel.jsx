import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default icon path issue for Leaflet (so it knows where to get marker icons)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png'
});

const MapPanel = ({ filters }) => {
  const positions = [
    { id: 1, name: "Farm A", coords: [34.0, -118.2] },
    { id: 2, name: "Farm B", coords: [36.1, -119.5] }
    // ... could filter by region if filter.region is set
  ];
  // Optionally filter positions by region if applicable
  const filteredPositions = filters.region 
    ? positions.filter(p => p.region === filters.region) 
    : positions;
  
  return (
    <div className="map-panel">
      <h3>Map of Campaign Reach</h3>
      <MapContainer center={[34, -118]} zoom={6} style={{ height: '300px', width: '100%' }}>
        <TileLayer 
          attribution='&copy; <a href="https://osm.org/copyright">OSM</a> contributors' 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        {filteredPositions.map(loc => (
          <Marker key={loc.id} position={loc.coords}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
export default MapPanel;
