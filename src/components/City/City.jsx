import {Dropdown} from 'react-bootstrap'

export default function City({ city, setActiveCity, activeCity}) {
    return (
        <Dropdown.Item>
            <li 
            className={city === activeCity ? 'active' : ''}
            onClick={() => {
                setActiveCity(city)
                console.log('this is activeCity after onClick', activeCity)
            }}>
                <div className="">{city.name}</div> 
            </li>
        </Dropdown.Item>
    );
}
