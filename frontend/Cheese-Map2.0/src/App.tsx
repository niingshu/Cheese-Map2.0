import { useState } from 'react'
import MapView from './MapView'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'leaflet/dist/leaflet.css' //import leaflet from download

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

export default App
