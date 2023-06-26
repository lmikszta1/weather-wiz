import { useState, useEffect } from "react";
import { createCity } from "../../utilities/cities-service";
import * as citiesAPI from "../../utilities/cities-api";
import CityList from "../../components/CityList/CityList";

export default function AllCitiesPage({ user }) {
    const [cities, setCities] = useState([]); 
    const [newCityName, setNewCityName] = useState({ name: "" });

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
        setCities(cities);
        }
        getCities();
    }, []);


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                name="name"
                value={newCityName.name}
                onChange={handleChange}
                />
                <button type="submit">Add City</button>
            </form>
            <CityList cities={cities} />
        </div>
    );
}
