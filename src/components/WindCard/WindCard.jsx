export default function WindCard({windSpeed, windDirection}){
    return (
        <>
            <div className='feels-like-container'>
                <div className='feels-like-card'>
                    <h1 className='card-title'>Wind</h1>
                    <p>Speed: {windSpeed}</p>
                    <p>Direction: {windDirection}</p>
                </div>
            </div>
        </>
    )
}