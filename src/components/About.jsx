import User from "./User";
const About = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>
                Welcome to our Food Delivery App! 🍔🍕 We bring your favorite meals
                from local restaurants right to your doorstep. Our goal is to make
                ordering food easy, fast, and enjoyable.
            </p>
            <p>
                Explore a variety of cuisines, check ratings, and place your orders
                conveniently. Bon appétit! 😋
            </p>

            <h2>Team Member</h2>
            <User/>
        </div>
    )
}

export default About;