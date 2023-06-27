export default function ConditionCard({condition}){
    return (
        <>
            <div className='bg-blue-500 rounded-lg p-4 w-32 h-32'>
                <h1 className='text-lg font-semibold mb-2'>{condition.text}</h1>
                <img src={condition.icon}/>
            </div>
        </>
    )
}

