export default function PressureCard({pressure}){
    return (
        <>
            <div className='pressure-container'>
                <div className='pressure-card'>
                    <h1 className='card-title'>Pressure</h1>
                    <p>{pressure} mB</p>
                </div>
            </div>
        </>
    )
}