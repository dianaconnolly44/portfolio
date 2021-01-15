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
                I'm a <b className="pink">creative</b> in NYC applying for Slumberkins's position in <b className="blue">illustration</b>.
              </div>
            </div>
          </div>

          <div className="body">
            <p>Welcome, Slumberkins recruiter! I am so happy to have you here on my portfolio website. I have collected for you below a few links to some relevant works on this website.</p>
            <p>Thank you, and have a great day!</p>
              
            <br/>

              <h3>Projects</h3>
            <p style={{ marginTop: 21 }}>You might want to check out these <b className="blue">illustration</b> projects:</p>
            <ul className="blue">
              <li><a onClick={e => nav("/childrens")}>children's book illustrations <span className="arrow">➜</span></a></li>
              <li><a onClick={e => nav("/media")}>media and editorial illustrations <span className="arrow">➜</span></a></li>
              <li><a onClick={e => nav("/expii")}>children's educational graphics <span className="arrow">➜</span></a></li>
              <li><a onClick={e => nav("/iconography")}>communication symbols <span className="arrow">➜</span></a></li>
            </ul>
            
            <p style={{ marginTop: -9 }}>You can also find some <b className="pink">other</b> projects here:</p>
            <ul className="pink">
              <li><a onClick={e => nav("/lettering")}>lettering <span className="arrow">➜</span></a></li>
              <li><a onClick={e => nav("/painting")}>watercolor and other paintings <span className="arrow">➜</span></a></li>
              <li><a onClick={e => nav("/drawing")}>some non-digital drawings <span className="arrow">➜</span></a></li>
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
        


        </div>
      </div>
    )
  }
}