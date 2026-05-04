import "./NavBar.css";

function NavBar() {
    return (
        <div>
            <nav>
                <h1>Healthcare simplified for you</h1>
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Services">Services</a></li>
                    {/* <li><a href="/Cart">Cart</a></li> */}
                    {/* <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li> */}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
