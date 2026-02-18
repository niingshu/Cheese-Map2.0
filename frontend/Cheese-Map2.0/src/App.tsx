import { useState, useEffect } from 'react'
import MapView from './components/MapView'
import './App.css'
import 'leaflet/dist/leaflet.css' //import leaflet from download

//define the data fetched from MongoDB (BE)
interface Cheese {
    id: string,
    name: string,
    region: string,
    country: string,
    location: [number, number], //empty array of 2 numbers
    rating: null,
    fun: string,
    url: string,
    img: string, 
    createAt: Date
}

function App() {
    //cheese is an object, set default
    const [cheeses, setCheese] = useState<Cheese[]>([])

    useEffect(() => { //fetch data
        fetch('htpp://localhost:5001/api/cheeses')
            .then(response => {
                if (!response.ok) throw new Error('Error in fetching from database')
                return response.json()
            })
            .then(data => setCheese(data)) //store 
            .catch(error => console.error('Error in fetching', error))
    }, []) //taking the cheese data from backend and storing it into local storage

    //submit event listener
    const handleSearch = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        //filter the set to create/zoom in the cheese location?  

    }

    //click on result from search list
    const handleResultClick = (id: string, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        //find the cheese with the id, if right, then show popup panel 
        
    }

    const regionOptions = [
        { label: "All", value: "all" },
        { label: "Brazil", value: "brazil" },
        { label: "Croatia", value: "croatia" },
        { label: "France", value: "france" },
        { label: "Georgia", value: "georgia" },
        { label: "Greece", value: "greece" },
        { label: "Italy", value: "italy" },
        { label: "Japan", value: "japan" },
        { label: "Mexico", value: "mexico" },
        { label: "Poland", value: "poland" },
        { label: "Slovakia", value: "slovakia" },
        { label: "Apain", value: "spain" },
        { label: "Switzerland", value: "swiss" },
        { label: "Turkiye", value: "turkiye" },
        { label: "USA", value: "united states of america" },
    ]

    //click on the filter by region 
    const handleFilterClick = (event: React.MouseEvent<HTMLOptionElement, MouseEvent>) => {
        event.preventDefault()

        //only show the cheeses in by the region that was chosen
    }


    return ( //return entire fragment
        <>
        <h1>Cheeses of World Map</h1>

        <form onSubmit={handleSearch} action="search">
            <div className="search-tool">
                <input type="text" id="find-cheese" />
                <ul className="result-list">
                    {cheeses.map(cheese => (
                        <li key={cheese.id}
                            onClick={(e) => handleResultClick(cheese.id, e)}
                            style={{ cursor: 'pointer' }}>
                            {cheese.name}
                        </li>
                    ))}
                </ul>
            </div>
        </form>

        <div className="filter">
            <button className="filtet-btn">Filter Cheese By Categories</button>
                <select name="region" id="category">
                    {regionOptions.map((region) => ( //render all options
                        <option key={region.value} value={region.value}
                                onClick={handleFilterClick}>
                            {region.label}
                        </option>
                    ))}
                </select>
        </div>

        <div className='side-panel'>
            <div className='resizeable-panel'></div>
            <a href="javascript:void(0)" id="closebtn" className="closebtn">&times;</a>

            <img id="cheeseImage" draggable="false" src="" alt="Cheese Image" className="panel-image"></img>
            <p id="name" className="name">Name</p>
            <p id="origin">Origin</p>
            <p id="rating">Rating</p>
            <p id="fun_fact">Fun Fact</p>
            <p id="summary">Summary</p>
            <a id="more" href="#" target="_blank">More Information</a>
        </div>

        <div className="map">
            <MapView />
        </div>
        </>
    )
}

export default App; //export default function App()
