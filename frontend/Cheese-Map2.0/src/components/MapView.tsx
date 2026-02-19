//render leaflet map 
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import '../App.css'; //.. means go up one directory
import L from 'leaflet';
import { Icon } from 'leaflet';
import type { Cheese } from '../types/Cheese'

//fix default leaflet icon in vite 
// Delete the internal method that causes issues with bundlers
(delete (L.Icon.Default.prototype as any)._getIconUrl);
//created a customized icon as cheeseSpot

interface MapViewProps {
    cheeses: Cheese[]
}

const defaultCenter: [number, number] = [51.505, -0.09];

//js variable/function -> custom React component -> capitalize first letter
function RecenterMap({position}: {position: [number, number]}) {
        const map = useMap() 
        useEffect(() => { //contains a hook, cannot be wrapped around anything
            map.flyTo(position, 6)
        }, [position, map]) //everytime the position

        return null
}

export default function MapView({ cheeses }: MapViewProps) {
    const [selectedCheese, setSelectedCheese] = useState<Cheese|null>(null)

    const onCheeseClick = (cheese: Cheese) => { //arrow helper function
        setSelectedCheese(cheese)
    }

    return (
    <MapContainer center={defaultCenter} 
                zoom={13} 
                scrollWheelZoom={false} 
                className="map-container">
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> 

        {selectedCheese && (
            <RecenterMap 
                position={[selectedCheese.location.coordinates[1],
                            selectedCheese.location.coordinates[0]]}
            />
        )}

        {cheeses.map(cheese => {
            const [lng, lat] = cheese.location.coordinates

            return (
                <Marker key={cheese._id} position={[lat,lng] as [number, number]}
                    eventHandlers={{click: () => onCheeseClick(cheese)}}>
                    <Popup>
                        {cheese.name} ({cheese.region}, {cheese.country})
                    </Popup>
                </Marker>
            )
        })}
    </MapContainer>
  );

}