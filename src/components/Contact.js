const Contact = () => {
   return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>
                Have questions, feedback, or just want to say hi? Reach out to us!
            </p>

            <h2>Contact Information</h2>
            <p>Email: support@foodapp.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Pune, Maharashtra, India</p>

            <h2>Send us a message</h2>
            <form>
                <input
                    type="text"
                    placeholder="Your Name"
                    style={{ marginBottom: "8px", padding: "6px", width: "100%" }}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    style={{ marginBottom: "8px", padding: "6px", width: "100%" }}
                />
                <textarea
                    placeholder="Your Message"
                    style={{ marginBottom: "8px", padding: "6px", width: "100%", height: "80px" }}
                />
                <button type="submit" style={{ padding: "6px 12px", backgroundColor: "#ff4d4f", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;