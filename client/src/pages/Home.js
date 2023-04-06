import React from 'react';
import './home.css';

const Home = () => {
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
      <h1 className="left-aligned">Home</h1>
      <img src={ require('./images/Home1.jpg') } alt="Logo"/>
      <br></br>
    </React.Fragment>
  );
};

export default Home;
