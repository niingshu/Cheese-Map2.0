import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import '../App.css'; //.. means go up one directory
import L from 'leaflet';
import { Icon } from 'leaflet';
import type { Cheese } from '../types/Cheese'

//props (properties)
interface SidePanelprops {
    selectedCheese: Cheese|null
}

