import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text"> Let's Build Something Amazing
        with GPT-3 Open AI
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sed sint unde repudiandae accusantium adipisci in, 
          eum consequuntur minus, iure deserunt quaerat, voluptatum numquam soluta!
        </p>
        <div className="gpt3__header-content__input">
          <input type="text" placeholder=" Your Email Address"/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="People"/>
          <p>More Than 1,600 people requested in 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="Ai" />
      </div>
    </div>
  )
}

export default Header