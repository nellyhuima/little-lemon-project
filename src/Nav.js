import { ReactComponent as Logo } from './icons_assets/Logo.svg';

function Nav() {
    return(
        <>
            <div>
                <Logo />
            </div>
            <div>
                <ul>
                    <a href='Home'><li>Home</li></a>
                    <a href='About'><li>About</li></a>
                    <a href='Menu'><li>Menu</li></a>
                    <a href='Reservations'><li>Reservations</li></a>
                    <a href='OrderOnline'><li>Order Online</li></a>
                    <a href='LogIn'><li>Log In</li></a>
                </ul>
            </div>
        </>
    )
}

export default Nav;