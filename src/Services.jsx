import NavBar from "./NavBar";
import { useState } from "react";
import "./Services.css";

function Services() {
    const [token, setToken] = useState("");
    const [service, setService] = useState("general");
    const [time, setTime] = useState("morning");
    const [date, setDate] = useState("today");   

    const handleOnClick = () => {
        setService(document.getElementById("service").value);
        setTime(document.getElementById("time").value);
        setDate(document.getElementById("date").value);
        setToken(`Your token number is: ${Math.floor(Math.random() * 15) + 1} for ${service} on ${date} during ${time}.`);
    };

    return (
        <>
            <NavBar />
            <div className="services-heading">
                <h1>Our Services</h1>
                <p>Discover the range of healthcare services we offer.</p>
            </div>
            <div className="services-content">
                <div className="services-list">
                    
                    <h2>General Consultation</h2>
                    <p>Get expert advice and diagnosis from our experienced doctors.</p>
                    <h2>Specialist Consultations</h2>
                    <p>Access a wide network of specialists for personalized care.</p>
                    <h2>Diagnostic Services</h2>
                    <p>Utilize our state-of-the-art diagnostic tools for accurate results.</p>
                    <h2>Emergency Care</h2>
                    <p>Receive immediate medical attention in case of emergencies.</p>
                </div>
                <div className="services-token">
                    <h2>Token Booking</h2>
                    <p>Book your appointment token online for a hassle-free experience.</p>
                    <form>
                        <label htmlFor="service">Select Service:</label>
                        <select id="service" name="service">
                            <option value="general consultation">General Consultation</option>
                            <option value="specialist consultation">Specialist Consultation</option>
                            <option value="diagnostic services">Diagnostic Services</option>
                            <option value="emergency care">Emergency Care</option>
                        </select>
                        <br />
                        <br />
                         <label htmlFor="time">Select Time Slot:</label>
                        <select id="time" name="time">
                            <option value="morning">Morning (9 AM - 12 PM)</option>
                            <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                            <option value="evening">Evening (5 PM - 8 PM)</option>
                        </select>
                        <br />
                        <br />
                         <label htmlFor="date">Select Day:</label>
                        <select id="date" name="date">
                            <option value="today">Today</option>
                            <option value="tomorrow">Tomorrow</option>
                        </select>
                    </form> 
                    <br />
                    <button className="book-token-button"
                    onClick={() => handleOnClick()}>
                        Generate Token
                    </button>
                    <br />
                    <br />
                    <div className="token-info">{token}</div>  
                    <br />
                </div>
            </div>
        </>
    )
}

export default Services;