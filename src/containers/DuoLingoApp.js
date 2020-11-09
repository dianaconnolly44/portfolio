import React, { Component } from 'react';
require('./DuoLingoApp.css');

export default class DuoLingoApp extends Component {
  state = {}
  meta = {}

  render = () => {
    const nav = url => this.props.history.push(url);

    return (
      <div className="about">
        <div>
          <div className="top">
            <img src={require('../headshot2_v2.gif')} />
            <div className="header">
              <div className="divider" />
              <div style={{ marginBottom: -5 }}>
                <div id="hi">Hi, I'm Diana!</div>
                I'm a creative applying for your positions in <b className="blue">illustration</b> and <b className="pink">animation</b>.
              </div>
            </div>
          </div>

          <div className="body">
            <p>In 2017, I received a dual degree from Carnegie Mellon University in Cognitive Neuroscience and Art. In this crossover of science and art, I have been especially interested in visual perception and how to make the most effective visuals for an intended audience. As Degas put it, "art is not what you see, but what you make others see."</p>

            <div className="project">
              <h3>Demo Reel</h3>
              <div className="video">
                <iframe 
                  src="https://www.youtube.com/embed/ohu9O_62gas" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen 
                />
              </div>
            </div>

            <p style={{ marginTop: 21 }}>I have a passion to use my iol for <b className="blue">education</b>, such as:</p>
            <ul className="blue">
              <li><a onClick={e => nav("/childrens")}>educational and literacy oriented children's books <span className="arrow">➜</span></a></li> 
              <li><a onClick={e => nav("/videos")}>animated explainer videos <span className="arrow">➜</span></a></li>
              <li><a onClick={e => nav("/expii")}>digital graphics for an e-learning site <span className="arrow">➜</span></a></li> 
            </ul>
            
            <p style={{ marginTop: -9 }}>and for <b className="pink">communication</b>, such as:</p>
            <ul className="pink">
              <li><a onClick={e => nav("/iconography")}>communication symbols for nonverbal individuals <span className="arrow">➜</span></a></li>
              <li><a onClick={e => nav("/loops")}>animated gifs to convey a topic visually <span className="arrow">➜</span></a></li>
              <li><a onClick={e => nav("/media")}>editorial illustrations for news and other media <span className="arrow">➜</span></a></li>
            </ul>
          </div>

          <div className="footer">
            <b>Let's connect!</b> 
            <div className="tags">
              <div><a href="https://www.linkedin.com/in/diana-connolly-ba5133b4/" target="_blank">linkedin <span className="arrow">➜</span></a></div>
              <div><a href="mailto:dianaconnolly44@gmail.com">email <span className="arrow">➜</span></a></div>
              <div><a target="_blank" href={require('../resume.pdf')}>résumé <span className="arrow">➜</span></a></div>
            </div>
          </div>
        
{/*          <section className="hello">
            <div>
              <h1>Hey I'm Diana!</h1>
              <h1>I'm a <span className="teal">creative</span> in NYC with interest in <span className="pink">education</span> and <span className="orange">communcation</span>.</h1>
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