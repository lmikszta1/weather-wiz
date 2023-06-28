export default function ConditionCard({condition}){
    return (
        <>
            <div className='bg-blue-500 rounded-lg p-4 w-32 h-32 flex justify-center items-center'>
                <h1 className='font-semibold mb-2 text-sm'>{condition.text}</h1>
                <img src={condition.icon}/>
            </div>
        </>
    )
}

