import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <React.Fragment>
      <div className="logo">
        <img src={ require('./images/logo.png') } alt="logo"/>
        <img src={ require('./images/header6.jpg') } alt="Logo"/>
        <img src={ require('./images/header7.jpeg') } alt="Logo"/>
        <img src={ require('./images/header8.jpeg') } alt="Logo"/>
        <img src={ require('./images/header9.jpeg') } alt="Logo"/>
        <img src={ require('./images/header10.jpeg') } alt="Logo"/>
        <img src={ require('./images/header13.jpg') } alt="Logo"/>
        <img src={ require('./images/header11.jpg') } alt="Logo"/>
      </div>
      <div class="container">
        <h1 className="left-aligned">ABOUT US</h1>
        <p className="left-aligned">Welcome to our online eyewear shop! We are passionate about providing high-quality eyewear at affordable prices.</p>
        <p className="left-aligned">Our team consists of experienced opticians and eyewear specialists who are dedicated to helping you find the perfect pair of glasses or sunglasses to fit your style and needs.</p>
        <h2 className="left-aligned">Our Products</h2>
        <p className="left-aligned">We offer a wide range of eyewear products, including:</p>
        <div class="row">
          <div class="col col-2">
            <ul>
              <li className="left-aligned">Party glasses</li>
              <li className="left-aligned">Prescription glasses</li>
              <li className="left-aligned">Non-prescription glasses</li>
              <li className="left-aligned">Sunglasses</li>
              <li className="left-aligned">Blue light blocking glasses</li>
              <li className="left-aligned">Reading glasses</li>
              <li className="left-aligned">Sport glasses</li>
              <li className="left-aligned">Kids glasses</li>
              <li className="left-aligned">Accessories (cases, cleaning cloths, etc.)</li>
            </ul>
          </div>
        </div>
        <h2 className="left-aligned">Our Mission</h2>
        <p className="left-aligned">Our mission is to make high-quality eyewear accessible to everyone. We believe that everyone deserves to see clearly and look great while doing it.</p>
        <h2 className="left-aligned">Contact Us</h2>
        <p className="left-aligned">If you have any questions or concerns, please don't hesitate to contact us:</p>
        <ul>
          <li className="left-aligned">Email: aynakstore@gmail.com</li>
          <li className="left-aligned">Phone: +92 306 9582454</li>
          <li className="left-aligned">Address: LUMS, DHA Phase 5, Lahore Pakistan</li>
        </ul>
	</div>
  <img src={ require('./images/home.jpg') } alt="Eyewear Shop"/>
  <br></br>
    </React.Fragment>
  );
}

export default AboutUs;