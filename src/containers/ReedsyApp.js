import React, { Component } from 'react';
require('./DuoLingoApp.css');

export default class DuoLingoApp extends Component {
  state = {}
  meta = {}

  render = () => {
    const nav = url => this.props.history.push(url);

    return (
      <div className="about job-app">
        <div>
          <div className="top">
            <img src={require('../headshot2_v2.gif')} />
            <div className="header">
              <div className="divider" />
              <div style={{ marginBottom: -5 }}>
                <div id="hi">Hi, I'm Diana!</div>
                I'm an artist applying to create <b className="blue">illustrations</b> and <b className="pink">animations</b> for you.
              </div>
            </div>
          </div>

          <div className="body">
            <p>Dear Reedsy Recruiter,</p>

<p>I am thrilled to be applying for a position as an Illustrator at Reedsy. In 2017, I completed an interdisciplinary degree from Carnegie Mellon University in Art and Cognitive Neuroscience, a blend of my passion for both the arts and academia. My passion is to use art as a medium for communication or education, with a personal graphics style focused on achieving a lively, engaging, and compelling impact. Upon discovering Reedsy, I was so happy to learn about your product and mission, both of which I believe in strongly. I also was happily surprised to learn that Savannah Cordova works at your company; I was Art Director and she was Staff Writer of Verde Magazine, our high school news magazine. What a great coincidence that after all of these years we might have the opportunity to collaborate again, and on such a meaningful tool that brings the power of creative collaboration and self-publishing to so many users around the world.</p>

<p>I am an accomplished illustrator, and hope to grow my career and enhance my skills with Reedsy. One of my strongest skills is producing visuals that turn complex ideas into fun and easy to digest content, and I know I could offer this to Reedsy’s blog posts, social media, newsletters, and ads. I have experience doing so with: illustrating covers and internal graphics for news magazine Verde Magazine; illustrating Picture Communication Symbols (PCS) and literacy-oriented children’s books at health-tech company Tobii Dynavox; creating for my undergraduate thesis a diverse communication symbol library for children and sensory sensitive individuals at Temple Sinai Pittsburgh; illustrating children’s books and animating videos to explain medical topics at children’s healthcare company Jumo Health; and creating engaging illustrations and short animations to pair with math and science content at ed-tech company Expii. I enjoyed my experience with each of these companies because I contributed to content that helped and compelled others, similar to Reedsy’s product and brand! In addition to the above, I have experience illustrating and animating for social media and marketing campaigns. In all of my professional roles, I excel at maintaining style and branding standards, produce high quality content, and have excellent attention to detail.</p>

<p>I love to collaborate and always welcome feedback. I believe in Reedsy’s mission and would be thrilled to join such a driven, diverse, and creative team. As mentioned in the “Bonus Points” section of your job listing, my favorite color actually really is #12a4e2! Or as I called it growing up, “Cinderella Blue”, which can be seen in my personal logo. I am eager to be a hardworking addition to your team, and believe this would be a great fit!</p>

<p>Please find my résumé below for your review, and I would be happy to discuss my skills and experiences further. Thank you for your consideration!</p>

<p>Best Regards,</p>
<p>Diana Connolly</p>

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
              <li><a onClick={e => nav("/media")}>editorial illustrations <span className="arrow">➜</span></a></li> 
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
              <div><a target="_blank" href={require('../resume.pdf')}>résumé <span className="arrow">➜</span></a></div>
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