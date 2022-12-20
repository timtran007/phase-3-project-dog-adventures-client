import {NavLink} from "react-router-dom"
import Navbar from "../src/styles/Navbar.css"

function Nav() {
    return (
        <nav>
            <NavLink exact className="nav" activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink className="nav" to="/dogs">
                My Dogs
            </NavLink>
            <NavLink exact className="nav" to="/dogs/new">
                Add a Dog
            </NavLink>
        </nav>
    )
}

export default Nav