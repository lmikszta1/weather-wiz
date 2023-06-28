export default function FeelsLikeCard({feelsLike}){
    return (
        <>
            <div className='bg-blue-500 rounded-lg p-4 w-32 h-32 mx-auto'>
                <h1 className='text-lg font-semibold mb-2'>Feels Like</h1>
                <p className="text-xl">{feelsLike} °F</p>
            </div>
        </>
    )
}