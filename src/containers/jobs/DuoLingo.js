import React, { Component } from 'react';

export default class JobApp extends Component {
  state = {}
  meta = {}

  render = () => {
    const nav = url => this.props.history.push(url);

    return (
      <div className="about job-app">
        <div>
          <div className="top">
            <img src={require('../../headshot2_v2.gif')} />
            <div className="header">
              <div className="divider" />
              <div style={{ marginBottom: -5 }}>
                <div id="hi">Hi, I'm Diana!</div>
                I'm a creative applying for your positions in <b className="blue">illustration</b> and <b className="pink">animation</b>.
              </div>
            </div>
          </div>

          <div className="body">
            <p>Welcome, Duolingo recruiter! I am so happy to have you here on my portfolio website. I have collected for you below my animation demo reel as well as a few links to some relevant works on this website. Thank you, and have a great day!</p>

            <div className="project">

              <h3>Demo Reel</h3>
              <div className="video">
                <iframe 
                  src="https://www.youtube.com/embed/Mrckc2JDkm0" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen 
                />
              </div>
            </div>

              
              <h3>Projects</h3>
            <p style={{ marginTop: 21 }}>You might want to check out these <b className="blue">illustration</b> projects:</p>
            <ul className="blue">
              <li><a onClick={e => nav("/childrens")}>children's illustrations <span className="arrow">➜</span></a></li> 
              <li><a onClick={e => nav("/iconography")}>icons and symbols <span className="arrow">➜</span></a></li>
            </ul>
            
            <p style={{ marginTop: -9 }}>You can find my <b className="pink">animation</b> projects here:</p>
            <ul className="pink">
              <li><a onClick={e => nav("/loops")}>loops <span className="arrow">➜</span></a></li>
              <li><a onClick={e => nav("/videos")}>videos <span className="arrow">➜</span></a></li>
            </ul>
          </div>

          <div className="footer">
            <b>Let's connect!</b> 
            <div className="tags">
              <div><a href="https://www.linkedin.com/in/diana-connolly-ba5133b4/" target="_blank">linkedin <span className="arrow">➜</span></a></div>
              <div><a href="mailto:dianaconnolly44@gmail.com">email <span className="arrow">➜</span></a></div>
              <div><a target="_blank" href={require('../../resume.pdf')}>résumé <span className="arrow">➜</span></a></div>
              <div><a onClick={e => nav("/about")}>about me <span className="arrow">➜</span></a></div>
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