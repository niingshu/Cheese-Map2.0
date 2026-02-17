//render leaflet map 
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import L from 'leaflet';
import { Icon } from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

//fix default leaflet icon in vite 
// Delete the internal method that causes issues with bundlers
(delete (L.Icon.Default.prototype as any)._getIconUrl);
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const position: [number, number] = [51.505, -0.09];

export function MapView() {
    //set the inital position and zoom level of the map 
    const position: [number, number] = [51.505, -0.09]; //lat and lng

    return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="map-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
            Pop up example
        </Popup>
      </Marker>
    </MapContainer>
  );

}

export default MapView;