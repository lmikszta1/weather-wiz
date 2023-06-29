import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 991 })
    return isMobile ? children : null
}

export default function NavBar({user, setUser}){

    function handleLogOut(){
        // delete the token form storage
        userService.logOut()
        // set the user to null
        setUser(null)
    }

    return (
        <>
            <Desktop>
                <nav className='navbar navbar-expand-sm navbar-light bg-light nav-bar body-font justify-content-center'>
                    <Link to="/cities" className='nav-btn nav-link'>All Cities</Link>
                    &nbsp; | &nbsp;
                    <Link to="/" className='nav-btn nav-link'>About</Link>
                    &nbsp; | &nbsp;
                    <span className='navbar-text'>Welcome, {user.name}!</span>
                    &nbsp; | &nbsp;
                    <Link to="" onClick={handleLogOut} className='nav-btn nav-link'>Log Out</Link>
                </nav>
            </Desktop>
            <Mobile>
            <nav className='navbar navbar-expand-sm navbar-light bg-light nav-bar body-font justify-content-center'>
                    <Link to="/cities" className='nav-btn nav-link'>All Cities</Link>
                    &nbsp; | &nbsp;
                    <Link to="/" className='nav-btn nav-link'>About</Link>
                    &nbsp; | &nbsp;
                    <span className='navbar-text'>Welcome, {user.name}!</span>
                    <Link to="" onClick={handleLogOut} className='nav-btn nav-link'>Log Out</Link>
                </nav>
            </Mobile>
        </>
        
    )
}