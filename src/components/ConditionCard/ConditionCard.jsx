export default function ConditionCard({condition}){
    return (
        <>
            <div className='bg-gradient-to-b from-blue-200 to-blue-600 rounded-lg p-4 w-32 h-32 flex justify-center items-center mx-auto'>
                <h1 className='font-semibold mb-2 text-sm'>{condition.text}</h1>
                <img alt="condition icon" src={condition.icon}/>
            </div>
        </>
    )
}

