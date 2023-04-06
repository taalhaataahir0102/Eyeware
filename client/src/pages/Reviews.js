import React from 'react';
import './reviews.css';

const Reviews = () => {
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
        <h2 className="left-aligned">Reviews</h2>
        <br></br>
        <p className="left-aligned">Following are the reviews of our satisfied customers</p>
        <br></br>
        <h2 className="left-aligned">Talha</h2>
		<p className="left-aligned">Aynak Store provided me with quality glasses for my party. </p>
        <br></br>
        <h2 className="left-aligned">Shahzaib</h2>
		<p className="left-aligned">Aynak Store provided me with quality glasses for my party. </p>
	  </div>
    <br></br>
    </React.Fragment>
  );
};

export default Reviews;
