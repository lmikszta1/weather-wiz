import City from "../City/City";
import './CityList.css'
export default function CityList({ cities, activeCity, setActiveCity}) {

    console.log('this is cities in CityList', cities)

    if(!cities || cities.length === 0 ) {
        return <p>No cities yet</p>
    }

    const cityItems = cities.map((city, idx) => (
        <City
            key={idx}
            setActiveCity={setActiveCity}
            activeCity={activeCity}
            city={city}
        />
    ));
    return (
        <ul className='city-list'>
            {cityItems}
        </ul>
    )
}