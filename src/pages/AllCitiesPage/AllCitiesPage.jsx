import { useState, useEffect, useRef } from "react";
import { createCity } from "../../utilities/cities-service";
import * as citiesAPI from "../../utilities/cities-api";
import CityList from "../../components/CityList/CityList";
import CityDetails from '../../components/CityDetails/CityDetails';
import './AllCitiesPage.css'

export default function AllCitiesPage({ user }) {
    const [cities, setCities] = useState([]); 
    const [newCityName, setNewCityName] = useState({ name: "" });
    const [activeCity, setActiveCity] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();
        const newCity = {
        name: newCityName.name,
        user: user._id,
    };
        const city = await createCity(newCity);
        setCities([...cities, city]);
        console.log("these are all the cities", cities);
        console.log("this is the user in handleSubmit", user);
        setNewCityName({ name: "" });
    }

    function handleChange(event) {
        setNewCityName({
        ...newCityName,
        [event.target.name]: event.target.value,
        });
        console.log("newNotetext in handleChange", newCityName);
    }

    useEffect(function () {
        async function getCities() {
            const cities = await citiesAPI.getCities();
            setActiveCity(cities[0])
            setCities(cities);
        }
        getCities();
    }, []);


    return (
        <div>
            <div style={{ display: "flex" }}>
                <div style={{ flex: "1" }}>
                    {/* Render CityDetail component here */}
                    <CityDetails activeCity={activeCity} />
                </div>
                <div style={{ flex: "1" }}>
                <form onSubmit={handleSubmit}>
                    <input
                    name="name"
                    value={newCityName.name}
                    onChange={handleChange}
                    />
                    <button type="submit">Add City</button>
                </form>
                <aside>
                    {/* Render CityList component here */}
                    <CityList cities={cities} activeCity={activeCity} setActiveCity={setActiveCity} />
                </aside>
            </div>
        </div>
    </div>
    );
}
