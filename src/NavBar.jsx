import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div>
            <nav>
                <h1>Healthcare simplified for you</h1>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Exit">Exit</Link></li>
                    {/* <li><a href="/Cart">Cart</a></li> */}
                    {/* <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li> */}
                    {/* links intercepts the click - No page reload - React Router updates the URL to /Home - <Routes . is re-evaluated - the matching route renders */}
                    {/* the navbar link updates the URL, <Routes> evaluates the paths, and the matched route renders — 
                    as long as you use React Router navigation (<Link> or navigate) and not plain HTML <a> tags. */}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;