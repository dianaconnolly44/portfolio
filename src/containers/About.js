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
            I am an illustrator, animator, and creative in New York City, with special interest in using my art for education, communication, or causing joy. In 2017, I received an interdisciplinary degree from Carnegie Mellon University in Cognitive Neuroscience and Art. In this crossover of science and art, I am especially interested in visual perception and how to make the most effective visuals for their intended audience. As Degas put it, “art is not what you see, but what you make others see.”
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