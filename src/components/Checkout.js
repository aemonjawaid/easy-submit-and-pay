import React from "react";
import "../styles.css";

const Checkout = () => {
    const handlePayment = () => {
        alert("Payment Processed Successfully!");
    };

    return (
        <div className="container">
            <h2>Checkout</h2>
            <p>Complete your purchase below.</p>
            <button onClick={handlePayment}>Checkout</button>
        </div>
    );
};

export default Checkout;
