import { useState } from 'react'
import MapView from './components/MapView'
import './App.css'
import 'leaflet/dist/leaflet.css' //import leaflet from download
import {getCheeses} from './services/cheeseService'


function App() {
  return (
    <>
      <div>
        <h1>Cheeses of World Map</h1>
        <MapView />
      </div>
    </>
  )
}

export default App;
