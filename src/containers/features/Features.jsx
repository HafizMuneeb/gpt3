import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'improving and distrusts instantly',
    text: 'What is a paragraph? Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length'
  },
  {
    title: 'Become the tended active',
    text: 'What is a paragraph? Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length'
  },
  {
    title: 'Message or am nothing',
    text: 'What is a paragraph? Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length'
  },
  {
    title: 'Realboy law countly',
    text: 'What is a paragraph? Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length'
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding " id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and you just need to realize it. Step into future today & make it happen</h1>
        <p>Requesst early access to our gpt3</p> 
      </div>
      <div className="gpt3__features-container">
          {featuresData.map((item, index) =>(
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
      </div>

    </div>
  )
}

export default Features