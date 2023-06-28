export default function City({ city, setActiveCity, activeCity}) {
    return (
        <li 
        className={city === activeCity ? 'active' : ''}
        onClick={() => {
            setActiveCity(city)
            console.log('this is activeCity after onClick', activeCity)
        }}>
            <div className="text-3xl">{city.name}</div> 
        </li>
    );
}
