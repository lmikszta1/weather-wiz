import City from "../City/City";
export default function CityList({ cities }) {

    const cityItems = cities.map((city) => (
        <City
            key={city._id}
            city={city}
        />
    ));
    return (
        <div>
        {
        cities.length === 0 ? <p>No cities yet!</p> : <>{cityItems}</>
        }
        </div>)



}