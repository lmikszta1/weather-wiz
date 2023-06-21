import {checkToken} from '../../utilities/users-service';

export default function AuthPage(){

    async function handleCheckToken(){
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <div>
            <h1>OrderHistoryPage</h1>
            <button onClick={handleCheckToken}>Check when my Login expires</button>
        </div>
    )
}