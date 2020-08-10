import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Pong Game </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104paddleBall/index.html"
        width="400"
        height="400"
      />
    </div>

    <div className="instructions" style={{ width: 400 }}>
      <b>Instructions</b>
      <br />
      Hover your mouse over the canvas to move the paddle. Try to not allow the ball to fall.
    </div>

  <p>I built this game as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were to build a single player pong game in which the ball acquires a random vertical velocity once it bounces or once it is touched.</p>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)