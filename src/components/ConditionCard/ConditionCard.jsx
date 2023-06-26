export default function ConditionCard({condition}){
    return (
        <>
            <div className='feels-like-container'>
                <div className='feels-like-card'>
                    <h1 className='card-title'>{condition.text}</h1>
                    <img src={condition.icon}/>
                </div>
            </div>
        </>
    )
}