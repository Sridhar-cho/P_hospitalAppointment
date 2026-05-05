import NavBar from "./NavBar";
import { useState } from "react";
import "./Services.css";

function Services({ name }) {
    const [token, setToken] = useState(null);
    const [service, setService] = useState("general consultation");
    const [time, setTime] = useState("morning");
    const [date, setDate] = useState("today");
    const [booking, setBooking] = useState(null);

    const handleOnClick = () => {
        // setService(document.getElementById("service").value); //direct DOM manipulation is not recommended in React, instead we use state to manage form values
        // setTime(document.getElementById("time").value);
        // setDate(document.getElementById("date").value);
        // setToken(`Your token number is: ${Math.floor(Math.random() * 15) + 1} for ${service} on ${date} during ${time}.`);
        const generatedToken = Math.floor(Math.random() * 15) + 1;
        setToken(generatedToken);
        setBooking({
            //setBooking stores an immutable snapshot of the user’s selected values and generated token at the exact moment the button is clicked, 
            // schedules a re-render, and ensures the confirmation UI remains stable even if inputs change later.

            //booking holds an immutable snapshot of the current state values, and it is rewritten only when the Generate Token button is clicked, 
            // because setBooking is only invoked in that event handler; the React lifecycle merely applies and renders this update afterward.
            // What react does - I will remember this request and apply it after this event finishes. (onClick is the even here) also This object is detached from future state changes

            //State updates cause re-renders, but re-renders do not change state unless setState is called.

            service,
            time,
            date,
            token: generatedToken // why token: generatedToken and not token - You do not depend on async state & You store a computed value
        });
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
                    <form onSubmit={(e) => e.preventDefault()}>
                        {/* label                         
                        the <label> element serves three main purposes: accessibility, usability, and clarity.

                        In the form, <label> describes the input, links to it using htmlFor, improves accessibility, 
                        and makes the form easier to use, but it does not manage state or logic.
                        */}

                        {/* 'VALUE' attribute in SELECT, OPTION & ONCHANGE
                        In a React form, value, option, and onChange are tightly linked together.
                        This pattern is called a controlled component.

                        User selects option (option value)
                                ↓
                        onChange fires
                                ↓
                        setService(newValue)
                                ↓
                        React re-renders
                                ↓
                        value={service} updates UI
                        
                        value={state} - React decides what is selected
                        option value = "" - possible choices
                        onChange - User tells React to change state
                        */}
                        <label htmlFor="service">Select Service:</label>
                        <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)}>
                            <option value="general consultation">General Consultation</option>
                            <option value="specialist consultation">Specialist Consultation</option>
                            <option value="diagnostic services">Diagnostic Services</option>
                            <option value="emergency care">Emergency Care</option>
                        </select>
                        <br />
                        <br />
                        <label htmlFor="time">Select Time Slot:</label>
                        <select id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)}>
                            <option value="morning">Morning (9 AM - 12 PM)</option>
                            <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                            <option value="evening">Evening (5 PM - 8 PM)</option>
                        </select>
                        <br />
                        <br />
                        <label htmlFor="date">Select Day:</label>
                        <select id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}>
                            <option value="today">Today</option>
                            <option value="tomorrow">Tomorrow</option>
                        </select>
                        <br />
                        <br />
                        <button type="button"
                            className="book-token-button"
                            onClick={handleOnClick}>
                            Generate Token
                        </button>
                    </form>
                    {booking && (<div className="token-info" >{name}, Your token number is: {booking.token} for {booking.service} on {booking.date} during {booking.time}.</div>)}
                    <br />
                </div>
            </div>
        </>
    )
}

export default Services;