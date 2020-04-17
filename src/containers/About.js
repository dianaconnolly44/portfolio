import React, { Component } from 'react';
require('./About.css');

export default class About extends Component {
  state = {}
  meta = {}

  render = () => {
    return (
      <div className="about">
        <div>
          <div className="top">
            <img src={require('../propic.jpeg')} />
            <div className="header">
              <div className="divider" />
              <p>
                <div id="hi">Hi, I'm Diana!</div>
                I'm a <b className="blue">creative</b> in NYC with interest in <b className="yellow">education</b> and <b className="orange">communcation</b>.
              </p>
            </div>
          </div>

          <div className="body">
            <p>I have a passion to use my art for <b className="yellow">education</b> (e.g. animated <a>explainer videos</a>, educational and literacy-oriented <a>children's books</a>, education and career <a>guidebooks</a> for immigrants), and <b className="orange">communication</b> (e.g. <a>speech symbols</a> for nonverbal or disabled individuals, <a>editorial illustrations</a> for news and other media, and animated <a>gifs</a> to convey a topic visually).</p>
            <p>In 2017, I received an <a>interdisciplinary degree</a> from Carnegie Mellon University in Cognitive Neuroscience and Art. In this crossover of science and art, I am especially interested in visual perception and how to make the most effective visuals for their intended audience. As Dega put it, "art is not what you see, but what you make others see."</p>
          </div>

          <div className="footer">
            <b className="blue">Let's connect!</b> 
            <a href="https://www.linkedin.com/in/diana-connolly-ba5133b4/" target="_blank">linkedin</a>
            //
            <a href="">resume</a>
            //
            <a href="mailto:dianaconnolly44@gmail.com">email</a>
          </div>
        
{/*          <section className="hello">
            <div>
              <h1>Hey I'm Diana!</h1>
              <h1>I'm a <span className="teal">creative</span> in NYC with interest in <span className="yellow">education</span> and <span className="orange">communcation</span>.</h1>
            </div>
          </section>

          <img src={require('../test.jpeg')} />

          <section className="text">
            <p>I have a passion to use my art for <span className="yellow">education</span> (e.g. animating <a>math</a> and <a>science</a> topics, illustrating <a>books</a> to teach children new concepts, making a <a>flipbook</a> to break down a complicated health condition) and <span className="orange">communication</span> (e.g. designing <a>symbols</a> for nonverbal people to use on a speech generating devices, creating <a>symbols and visual schedules</a> to aid social interactions in people with Autism, animating <a>gifs</a> to convey a topic without text, and illustrating <a>news magazine</a> covers and articles).</p>
            <p>In 2017, I received an <a>interdisciplinary degree</a> from Carnegie Mellon University in Cognitive Neuroscience and Art. In this crossover of science and art, I am especially intersted in visual perception and how to make the most effective visuals for their intended audience. As Degas put it, <i>"art is not what you see, but what you make others see"</i></p>
            <p className="footer"><span className="teal">Come say hi!</span> <a href="https://www.linkedin.com/in/diana-connolly-ba5133b4/" target="_blank">linkedin</a>//<a href="">resume</a>//<a href="mailto:dianaconnolly44@gmail.com">email</a></p>
          </section>*/}

        </div>
      </div>
    )
  }
}