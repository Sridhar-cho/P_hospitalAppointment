import NavBar from "./NavBar";
import "./About.css"

function About() {
    return (
        <>
            <NavBar />
            <div className="about-heading">
                <h1>About Us</h1>
                <p>Welcome to our healthcare platform!</p>
            </div>
        </>
    )
}

export default About;