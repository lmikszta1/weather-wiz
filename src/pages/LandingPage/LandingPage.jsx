import './LandingPage.css';

export default function LandingPage(){
    return (
        <div className="container">
            <h1 className="font-title mt-5 display-4">Welcome to Weather Wiz</h1><br/>
            <p className="lead">
            This is an intuitive weather app created by Luke Mikszta and Stephanie Talbott designed to provide users with
            accurate and reliable weather information at their fingertips. Our
            mission is to empower individuals to make informed decisions based on
            real-time weather data from trusted sources. With WeatherWiz, you can
            stay ahead of the weather curve, no matter where you are. Our app
            connects to a powerful 3rd party weather API, ensuring that you
            receive up-to-date and detailed weather forecasts for your current
            location or any other location worldwide. We believe that having
            access to precise weather information is essential for planning your
            day, staying safe during severe weather events, and making informed
            choices about your outdoor activities!
            <br /><br />
            Join us on this weather journey and experience the convenience,
            accuracy, and reliability of WeatherWiz. Sign up for an account today
            and be prepared for whatever the weather brings!
            </p>
        </div>
    );
}