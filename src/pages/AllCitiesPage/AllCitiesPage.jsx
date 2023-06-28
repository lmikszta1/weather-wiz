import { useState, useEffect } from "react";
import { createCity, deleteCity } from "../../utilities/cities-service";
import * as citiesAPI from "../../utilities/cities-api";
import CityList from "../../components/CityList/CityList";
import CityDetails from '../../components/CityDetails/CityDetails';

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

    async function handleCityDelete(){
        try{
            console.log("this is activeCity._id in handleCityChange", activeCity._id)
            await deleteCity(activeCity._id)
            const updatedCities = cities.filter(city => city._id !== activeCity._id)
            setCities(updatedCities)
            setActiveCity(updatedCities[0])
        } catch(err){
            console.log('Error deleting city')
        }
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
        <div className="container mx-auto pt-10">
            <div className="flex flex-nowrap">
                <div className="flex-1">
                    {/* Render CityDetail component here */}
                    <CityDetails activeCity={activeCity} handleCityDelete={handleCityDelete}/>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end">
                    <form className="flex items-end justify-center mb-2" onSubmit={handleSubmit}>
                        <input
                        className="border border-gray-400 rounded px-4 py-2"
                        placeholder="city name or zip code"
                        name="name"
                        value={newCityName.name}
                        onChange={handleChange}
                        />
                        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add City</button>
                    </form>
                    <aside className="mt-5 p-0 overflow-auto w-64 h-96 flex justify-center">
                        {/* Render CityList component here */}
                        <CityList cities={cities} activeCity={activeCity} setActiveCity={setActiveCity}/>
                    </aside>
                </div>
            </div>
        </div>
    );
}
