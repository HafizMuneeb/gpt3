import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early  Access to Get Started</h4>
        <h1 className="gradient__text">The Possibilities are beyond your Imaginations</h1>
        <p>What is a paragraph? Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality</p>
        <h4>Request early  Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility