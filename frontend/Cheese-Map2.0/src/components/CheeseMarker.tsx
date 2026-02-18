//render single marker on map 
import React from 'react';
import { Icon, type LatLngExpression } from 'leaflet';

//define the type for marker data 
interface MarkerData {
    id: number;
    position: LatLngExpression; //leaflet type for [lat, lng]
    content: string;
}

//custom icon setup -> picture of a cheese 
const cheeseSpot = new Icon({
    iconUrl: require('/images/cheese.png'), //currently a node.js not vite + react
    iconRetinaUrl: require('/images/cheese-2x.png'), //higher resolution version img
    shadowUrl: undefined, //null = none
    iconSize:   [25, 37], //size of the icon
    iconAnchor: [9, 29], //point of the icon which correspond to marker's location 
    popupAnchor:[-3, -15] // point from which popup should open relative to the iconAnchor
});

const highlightCheese = new Icon({
    iconUrl: require('/images/chosenCheese.png'), 
    iconRetinaUrl: require('/images/chosenCheese-2x.png'), //higher resolution version img
    shadowUrl: undefined, //null = none
    iconSize:       [25*1.5, 30*1.5],
    iconAnchor:     [15*1.5, 25*1.5], 
     popupAnchor:    [-3*1.5, -20*1.5]
});

export {cheeseSpot, highlightCheese};

