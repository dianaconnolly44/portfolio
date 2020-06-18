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
            <img src={require('../headshot2_v2.gif')} />
            <div className="header">
              <div className="divider" />
              <p>
                <div id="hi">Hi, I'm Diana!</div>
                I'm a creative in NYC with interest in <b className="blue">education</b> and <b className="yellow">communcation</b>.
              </p>
            </div>
          </div>

          <div className="body">
            <p>I have a passion to use my art for <b className="blue">education</b> (e.g. animated <a onClick={e => this.props.history.push("/videos")}>explainer videos</a>, educational and literacy-oriented <a onClick={e => this.props.history.push("/childrens")}>children's books</a>, digital <a>graphics</a> for an e-learning site), and <b className="yellow">communication</b> (e.g. animated <a onClick={e => this.props.history.push("/loops")}>gifs</a> to convey a topic visually, <a onClick={e => this.props.history.push("/iconography")}>communication symbols</a> for nonverbal individuals, <a onClick={e => this.props.history.push("/media")}>editorial illustrations</a> for news and other media).</p>
            <p>In 2017, I received an <a href="https://www.cmu.edu/interdisciplinary/programs/bha.html" target="_blank">interdisciplinary degree</a> from Carnegie Mellon University in Cognitive Neuroscience and Art. In this crossover of science and art, I am especially interested in visual perception and how to make the most effective visuals for an intended audience. As Degas put it, "art is not what you see, but what you make others see."</p>
          </div>

          <div className="footer">
            <b className="orange">Let's connect!</b> 
            <a href="https://www.linkedin.com/in/diana-connolly-ba5133b4/" target="_blank">linkedin</a>
            //
            <a target="_blank" href={require('../resume.pdf')}>resume</a>
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