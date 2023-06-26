import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser}){

    function handleLogOut(){
        // delete the token form storage
        userService.logOut()
        // set the user to null
        setUser(null)
    }

    return (
        <nav>
            <Link to="/cities">All Cities</Link>
            &nbsp; | &nbsp;
            <Link to="/">About</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}!</span>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}