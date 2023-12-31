import React from 'react';
import {Article} from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">Alot of happening.We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupA">
              <Article imgUrl={blog01} date="Aug 26, 2023" title="Open AI is the future, lets' explore how it is?"/>
            </div>
            <div className="gpt3__blog-container_groupB">
              <Article imgUrl={blog02} date="Aug 26, 2023" title="Open AI is the future, lets' explore how it is?"/>
              <Article imgUrl={blog03} date="Aug 26, 2023" title="Open AI is the future, lets' explore how it is?"/>
              <Article imgUrl={blog04} date="Aug 26, 2023" title="Open AI is the future, lets' explore how it is?"/>
              <Article imgUrl={blog05} date="Aug 26, 2023" title="Open AI is the future, lets' explore how it is?"/>
            </div>
        </div>
    </div>
  )
}

export default Blog