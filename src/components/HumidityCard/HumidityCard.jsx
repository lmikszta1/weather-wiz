export default function HumidityCard({humidity}){
    return (
        <>
            <div className='humidity-container'>
                <div className='humidity-card'>
                    <h1 className='card-title'>Humidity</h1>
                    <p>{humidity}%</p>
                </div>
            </div>
        </>
    )
}