import React, { Component } from 'react';
require('./About.css');

export default class About extends Component {
  state = {}
  meta = {}

  render = () => {
    return (
      <div className="about">
        <div>
        
          <section className="hello">
            <div>
              <h1>Hey there!</h1>
              <h1>I'm Diana Connolly.</h1>
            </div>
          </section>

          <img src={require('../test.jpeg')} />

          <section className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </section>

          <section className="footer">
            <ul>
              <li><a href="">resume</a></li>
              <li><a href="https://www.linkedin.com/in/diana-connolly-ba5133b4/" target="_blank">linkedin</a></li>
              <li><a href="mailto:dianaconnolly44@gmail.com">email</a></li>
            </ul>
          </section>

        </div>
      </div>
    )
  }
}