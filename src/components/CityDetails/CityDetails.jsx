import { useState, useEffect} from 'react'
import FeelsLikeCard from '../FeelsLikeCard/FeelsLikeCard'
import HumidityCard from '../HumidityCard/HumidityCard';
import PressureCard from '../PressureCard/PressureCard'
import ConditionCard from '../ConditionCard/ConditionCard';
import './CityDetails.css';
export default function CityDetails({activeCity, handleCityDelete}){
    console.log("this is activeCity in CityDetails", activeCity);

    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("This is activeCity in useEffect in CityDetails", activeCity);
        if (activeCity) {
        fetch(
            `http://api.weatherapi.com/v1/current.json?key=d423372cc92443e6a8d201342232306&q=${activeCity.name}&days=3&aqi=yes`
        )
            .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
            })
            .then((data) => {
            setWeatherData(data);
            })
            .catch((error) => {
            console.error("error fetching data", error);
            })
            .finally(() => {
            setLoading(false);
            console.log("this is weatherData in cityDetails", weatherData);
            });
        }
        setWeatherData(null);
        setLoading(true);
        console.log("this is weatherData in useEffect", weatherData);
    }, [activeCity]);

    if (loading) {
        return (
        <div className="loader-wrapper">
            <div className="loader"></div>
        </div>
        );
    }

    if (!weatherData) {
        return (
        <>
            <p>Invalid city name</p>
            <button onClick={handleCityDelete}>Delete City</button>
        </>
        );
    }

    return (
        <div className="flex flex-col place-content-center">
            <div className="mb-4 text-2xl font-semibold">
                {weatherData.location.name}, {weatherData.location.region}
            </div>
                {weatherData.location.country} 
            <div className='text-6xl p-10 font-bold text-neutral-900'>
                {weatherData.current.temp_f} °F
            </div>
            <div className='max-w-xs place-self-center'>
                <div className="grid grid-cols-2 gap-x-1 gap-y-2">
                    <FeelsLikeCard feelsLike={weatherData.current.feelslike_f} />
                    <HumidityCard humidity={weatherData.current.humidity} />
                    <PressureCard pressure={weatherData.current.pressure_mb} />
                    <ConditionCard condition={weatherData.current.condition} />  
                </div>
            </div>
            <div className='p-10'>
                <button onClick={handleCityDelete}>Delete City</button>
            </div>
        </div>
    );
}