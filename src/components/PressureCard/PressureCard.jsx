export default function PressureCard({pressure}){
    return (
        <>
            <div className='bg-blue-500 rounded-lg p-4 w-32 h-32'>
                <h1 className='text-lg font-semibold mb-2'>Pressure</h1>
                <p className="text-xl">{pressure} mB</p>
            </div>
        </>
    )
}

