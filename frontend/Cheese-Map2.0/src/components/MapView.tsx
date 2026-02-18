//render leaflet map 
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../App.css'; //.. means go up one directory
import L from 'leaflet';
import { Icon } from 'leaflet';
import {cheeseSpot, highlightCheese} from './CheeseMarker'; //cheeseSpot is a var

//fix default leaflet icon in vite 
// Delete the internal method that causes issues with bundlers
(delete (L.Icon.Default.prototype as any)._getIconUrl);
//created a customized icon as cheeseSpot

const position: [number, number] = [51.505, -0.09];
//set the map view bounds: 
var bounds: Array<[number,number]> = []; //[lat, lng]

export default function MapView() {
    
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