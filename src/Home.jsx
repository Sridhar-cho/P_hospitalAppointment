import NavBar from "./NavBar";
import "./Home.css";

function Home({name}) {
    return (
        <>
            <NavBar />
            <div className="home-container">
                <div className="home-heading">
                    <h1>{name}! Book Your appointment today!</h1>
                </div>
                <div className="home-content">
                    <p>Welcome to our healthcare platform! We are dedicated to providing you with the best medical services and care. Our team of experienced healthcare professionals is here to assist you in booking appointments, managing your health records, and accessing a wide range of healthcare services.</p>
                    <p>Whether you need to schedule a routine check-up, consult with a specialist, or access emergency care, our platform makes it easy and convenient for you to get the care you need. We are committed to ensuring that your healthcare experience is seamless and stress-free.</p>
                    <p>Thank you for choosing our healthcare platform. We look forward to serving you and helping you maintain your health and well-being!</p>
                </div>
            </div>
        </>
    )
}

export default Home;
