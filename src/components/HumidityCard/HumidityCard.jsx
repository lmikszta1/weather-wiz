export default function HumidityCard({humidity}){
    return (
        <>
            <div className='bg-blue-500 rounded-lg p-4 w-32 h-32'>
                <h1 className='text-lg font-semibold mb-2'>Humidity</h1>
                <p className="text-xl">{humidity}%</p>
            </div>
        </>
    )
}

