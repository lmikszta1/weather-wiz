export default function CityDetails({activeCity, handleCityDelete}){
    console.log('this is activeCity in CityDetails', activeCity);
    return (
        <>
            {activeCity.name} Details
            <button onClick={handleCityDelete}>Delete City</button>
        </>
    )
}