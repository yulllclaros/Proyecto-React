import React from 'react';
import NavBar from './components/index.jsx';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <header className="header" id="home">
        <h1>Welcome to My Coffee Shop</h1>
        <p>Your favorite place for the best coffee in town.</p>
      </header>
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>We are a local coffee shop that believes in serving the best coffee.</p>
      </section>
      <section className="menu" id="menu">
        <h2>Our Menu</h2>
        <ul>
          <li>Espresso</li>
          <li>Americano</li>
          <li>Latte</li>
          <li>Cappuccino</li>
        </ul>
      </section>
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Email: info@mycoffeeshop.com</p>
        <p>Phone: 123-456-7890</p>
      </section>
    </div>
  );
};

export default App;
