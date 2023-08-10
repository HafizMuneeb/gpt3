import React from 'react';
import './footer.css';
import gpt3Logo  from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the furture before other</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links-logo">
          <img src={gpt3Logo} alt="logo"/>
          <p>Green Valley Samundri Road Faisalabad</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Socila Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>email@gmail.com</p>
          <p>+000 0000 0</p>
          <p>Green Valley</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&#169; GPT-3 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer