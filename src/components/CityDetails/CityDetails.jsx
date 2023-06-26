import { useState, useEffect} from 'react'
export default function CityDetails({activeCity, handleCityDelete}){
    console.log('this is activeCity in CityDetails', activeCity);

    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("This is activeCity in useEffect in CityDetails", activeCity)
        if(activeCity){
            fetch(`http://api.weatherapi.com/v1/current.json?key=d423372cc92443e6a8d201342232306&q=${activeCity.name}&aqi=no`).then(response => {
            if(response.ok){
                return response.json()
            }
            throw response
            }).then(data => {
                setWeatherData(data)
            }).catch(error => {
                console.error('error fetching data', error)
            }).finally(() => {
                setLoading(false)
                console.log('this is weatherData in cityDetails', weatherData)
            })
        }
        console.log('this is weatherData in useEffect', weatherData)
    }, [activeCity])

    if(!weatherData) return

    return (
        <>
            {activeCity.name} Details
            <button onClick={handleCityDelete}>Delete City</button>
        </>
    )
}