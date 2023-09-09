import { Link } from "react-router-dom";    
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav>
                <Link to="/">
                    <img src="/nav_icon.png" alt="Valorank" />
                </Link>
            </nav>
        </>
    )
}

export default Navbar