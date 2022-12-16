import {NavLink} from "react-router-dom"
import Navbar from "../src/styles/Navbar.css"

function Nav() {
    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/dogs">
                My Dogs
            </NavLink>
            <NavLink to="/add-a-dog">
                Add a Dog
            </NavLink>
        </nav>
    )
}

export default Nav