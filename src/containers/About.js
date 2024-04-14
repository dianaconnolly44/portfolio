import React, { Component } from 'react';
require('./About.css');

export default class About extends Component {
  state = {}
  meta = {}

  render = () => {
    const nav = url => this.props.history.push(url);

    // march 22, 2021
    var doxDiff = Date.now() - new Date('March 21, 2021');
    const yearsSinceDox = Math.abs(new Date(doxDiff).getUTCFullYear() - 1970);

    return (
      <div className="about">
        <div>
          <div className="top">
            <img src={require('../headshot2_v2.gif')} />
            <div className="header">
              {/*<div className="divider" />*/}
              <div style={{ marginBottom: -5 }}>
                <div id="hi"><p>Hi, I'm Diana!<br />I'm a creative with<br /> interest in the crossover <br />of <b className="blue">art</b> & <b className="pink">science</b>.</p></div>
              </div>
            </div>
          </div>

          <div className="body">
            <p>I received a dual degree from Carnegie Mellon University in Cognitive Neuroscience and Art. For the past {yearsSinceDox} years, I've been a medical editorial illustrator at Doximity,
            an online network for doctors.</p>
            <p>
            <ul className="blue">
              <li><a onClick={e => nav("/editorial")}>Doximity editorial illustration <span className="arrow">➜</span></a></li>
            </ul>
            </p>


            {/*<p>I received a dual degree from Carnegie Mellon University in Cognitive Neuroscience and Art. In this crossover of science and art, I've been especially interested 
            in visual perception and how to make 
            the most effective visuals for an intended audience. As Degas put it, "art is not what you see, but what you make others see."</p>

            <p>For the past 3 years, I've been an <b className="blue">editorial illustrator</b> at Doximity,
            an online network for medical professionals.
             I create medical themed
            illustrations and animations for "Op-Med" articles, which are Op-Eds written by and for our physician users. </p>*/}
            
            <p>Some of my previous work has included:</p>
            <p> 

            <ul className="pink">
                            <li><a onClick={e => nav("/childrens")}>children's books for education & literacy <span className="arrow">➜</span></a></li>

              <li><a onClick={e => nav("/iconography")}>communication symbols for nonverbal people <span className="arrow">➜</span></a></li>
                            <li><a onClick={e => nav("/expii")}>graphics for an e-learning site <span className="arrow">➜</span></a></li>

              <li><a onClick={e => nav("/loops")}>seasonal loop animations <span className="arrow">➜</span></a></li>
              <li><a onClick={e => nav("/graphic")}>graphic design <span className="arrow">➜</span></a></li>
            </ul>
            </p>

            
          </div>

          <div className="footer">
            <b>Let's connect!</b>
            <div className="tags blue">
              <div><a href="https://www.linkedin.com/in/diana-connolly-ba5133b4/" target="_blank">linkedin <span className="arrow">➜</span></a></div>
              <div><a href="mailto:dconnoll@alumni.cmu.edu">email <span className="arrow">➜</span></a></div>
              <div><a target="_blank" href={require('../resume.pdf')}>résumé <span className="arrow">➜</span></a></div>
            </div>
          </div>

{/*          <section className="hello">
            <div>
              <h1>Hey I'm Diana!</h1>
              <h1>I'm a <span className="teal">creative</span> in NYC with interest in <span className="pink">education</span> and <span className="orange">communication</span>.</h1>
            </div>
          </section>

          <img src={require('../test.jpeg')} />

          <section className="text">
            <p>I have a passion to use my art for <span className="pink">education</span> (e.g. animating <a>math</a> and <a>science</a> topics, illustrating <a>books</a> to teach children new concepts, making a <a>flipbook</a> to break down a complicated health condition) and <span className="orange">communication</span> (e.g. designing <a>symbols</a> for nonverbal people to use on a speech generating devices, creating <a>symbols and visual schedules</a> to aid social interactions in people with Autism, animating <a>gifs</a> to convey a topic without text, and illustrating <a>news magazine</a> covers and articles).</p>
            <p>In 2017, I received an <a>interdisciplinary degree</a> from Carnegie Mellon University in Cognitive Neuroscience and Art. In this crossover of science and art, I am especially intersted in visual perception and how to make the most effective visuals for their intended audience. As Degas put it, <i>"art is not what you see, but what you make others see"</i></p>
            <p className="footer"><span className="teal">Come say hi!</span> <a href="https://www.linkedin.com/in/diana-connolly-ba5133b4/" target="_blank">linkedin</a>//<a href="">resume</a>//<a href="mailto:dianaconnolly44@gmail.com">email</a></p>
          </section>*/}

        </div>
      </div>
    )
  }
}