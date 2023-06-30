import { useState, useEffect} from 'react'
import FeelsLikeCard from '../FeelsLikeCard/FeelsLikeCard'
import HumidityCard from '../HumidityCard/HumidityCard';
import PressureCard from '../PressureCard/PressureCard'
import ConditionCard from '../ConditionCard/ConditionCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CityDetails.css';
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 991 })
    return isMobile ? children : null
}

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
        <>
            <Desktop>
                <div>
                    <div className="fs-3 fw-bold">
                        {weatherData.location.name}, {weatherData.location.region}
                    </div>
                        {weatherData.location.country} 
                    <div className='fs-1 fw-bold'>
                        {weatherData.current.temp_f} °F
                    </div>
                    <Container className='mt-4 w-60'>
                        <Row className='my-4'>
                            <Col className='d-flex align-items-center justify-content-center'>
                                <FeelsLikeCard feelsLike={weatherData.current.feelslike_f} />
                            </Col>
                            <Col className='d-flex align-items-center justify-content-center'>
                                <HumidityCard humidity={weatherData.current.humidity} />
                            </Col>
                        </Row>
                        <Row className='my-4'>
                            <Col className='d-flex align-items-center justify-content-center'>
                                <PressureCard pressure={weatherData.current.pressure_mb} />
                            </Col>
                            <Col className='d-flex align-items-center justify-content-center'>
                                <ConditionCard condition={weatherData.current.condition} />
                            </Col>
                        </Row>
                    </Container>
                    <div>
                        <button className='text-black border border-dark' onClick={handleCityDelete}>Delete City</button>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div >
                    <div className="fs-3 fw-bold">
                        {weatherData.location.name}, {weatherData.location.region}
                    </div>
                        {weatherData.location.country} 
                    <div className='fs-1 fw-bold'>
                        {weatherData.current.temp_f} °F
                    </div>
                    <Container className='mt-4 w-60'>
                        <Row className=''>
                            <Col className='d-flex align-items-center justify-content-center px-0'>
                                <FeelsLikeCard feelsLike={weatherData.current.feelslike_f} />
                            </Col>
                            <Col className='d-flex align-items-center justify-content-center px-0'>
                                <HumidityCard humidity={weatherData.current.humidity} />
                            </Col>
                        </Row>
                        <Row className=''>
                            <Col className='d-flex align-items-center justify-content-center px-0'>
                                <PressureCard pressure={weatherData.current.pressure_mb} />
                            </Col>
                            <Col className='d-flex align-items-center justify-content-center px-0'>
                                <ConditionCard condition={weatherData.current.condition} />
                            </Col>
                        </Row>
                    </Container>
                    <div>
                        <button className='text-black border border-dark btn-warning btn-lg' onClick={handleCityDelete}>Delete City</button>
                    </div>
                </div>
            </Mobile>
        </>
    );
}