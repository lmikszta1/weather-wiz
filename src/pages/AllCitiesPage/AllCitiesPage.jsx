import { useState, useEffect } from "react";
import { createCity, deleteCity } from "../../utilities/cities-service";
import * as citiesAPI from "../../utilities/cities-api";
import CityList from "../../components/CityList/CityList";
import CityDetails from '../../components/CityDetails/CityDetails';
import './AllCitiesPage.css'
import {Form, Button} from 'react-bootstrap'

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
        <div className="container mx-auto pt-5">
            <div className="row">
                <div className="col">
                    {/* Render CityDetail component here */}
                    <CityDetails activeCity={activeCity} handleCityDelete={handleCityDelete}/>
                </div>
                <div className="col flex-column items-center justify-start">
                    <Form onSubmit={handleSubmit} className="d-flex align-items-baseline justify-content-start">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control name="name" value={newCityName.name} onChange={handleChange} />
                            <Form.Text className="text-muted text-sm">
                                Enter a city name, state, country, or postal code
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" className='w-50 border border-dark'>
                            Add City
                        </Button>
                    </Form>
                    <aside className="mt-5 p-0 overflow-auto max-h-96 d-flex justify-content-center blue-scroll">
                        {/* Render CityList component here */}
                        <CityList cities={cities} activeCity={activeCity} setActiveCity={setActiveCity}/>
                    </aside>
                </div>
            </div>
        </div>
    );
}
