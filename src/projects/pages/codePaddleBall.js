import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Paddle Ball </h1>

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
      Hover your mouse over the canvas to move the paddle. Do not allow the ball to fall.
    </div>

  {/*<p>I built this game as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were learning how to .</p>*/}


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)