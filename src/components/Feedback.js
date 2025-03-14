import React, { useState } from "react";
import "../styles.css";

const Feedback = () => {
    const [feedback, setFeedback] = useState("");

    const handleChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Feedback submitted!");
    };

    return (
        <div className="container">
            <h2>Feedback</h2>
            <form onSubmit={handleSubmit}>
                <textarea name="feedback" placeholder="Your feedback..." onChange={handleChange} required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Feedback;
