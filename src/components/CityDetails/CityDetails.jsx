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
        <div className="detail-container">
        <div className="mb-4">
            {weatherData.location.name}, {weatherData.location.region},{" "}
            {weatherData.location.country} {weatherData.current.temp_f} °F
        </div>
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4">
            <div className="mb-4">
                <FeelsLikeCard feelsLike={weatherData.current.feelslike_f} />
            </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4">
            <div className="mb-4">
                <HumidityCard humidity={weatherData.current.humidity} />
            </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4">
            <div className="mb-4">
                <PressureCard pressure={weatherData.current.pressure_mb} />
            </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4">
            <div className="mb-4">
                <ConditionCard condition={weatherData.current.condition} />
            </div>
            </div>
        </div>
        <button onClick={handleCityDelete}>Delete City</button>
        </div>
    );
}