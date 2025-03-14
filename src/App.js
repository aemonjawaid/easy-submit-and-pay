import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import "./styles.css"; // Import global styles

const Home = () => (
  <div className="container">
    <h1 className="title">Welcome to Our Website</h1>
    <nav>
      <Link className="nav-link" to="/contact">Contact</Link>
      <Link className="nav-link" to="/feedback">Feedback</Link>
      <Link className="nav-link" to="/signup">Signup</Link>
      <Link className="nav-link" to="/checkout">Checkout</Link>
    </nav>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </Router>
);

export default App;
