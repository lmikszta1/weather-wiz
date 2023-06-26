export default function CityDetails({activeCity}){
    console.log('this is activeCity in CityDetails', activeCity);
    return (
        <>
            {activeCity.name} Details
        </>
    )
}