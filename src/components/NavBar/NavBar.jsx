import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'
export default function NavBar({user, setUser}){

    function handleLogOut(){
        // delete the token form storage
        userService.logOut()
        // set the user to null
        setUser(null)
    }

    return (
        <nav className='nav-bar body-font'>
            <Link to="/cities" className='nav-btn'>All Cities</Link>
            &nbsp; | &nbsp;
            <Link to="/" className='nav-btn'>About</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}!</span>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut} className='nav-btn'>Log Out</Link>
        </nav>
    )
}