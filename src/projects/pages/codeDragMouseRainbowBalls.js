import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Rainbow Bubbles </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104dragMouseRainbowBalls/index.html"
        width="400"
        height="400"
      />
    </div>

    <div className="instructions" style={{ width: 400 }}>
      <b>Instructions</b>
      <br />
      Once the rainbow bubbles have fallen, drag your mouse in the canvas to place new bubbles.
    </div>

    <p>I built this piece as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were experimenting with physics and simulating gravity for the falling "bubbles". The colors and sizes of the bubbles are randomized, and more are created when you drag your mouse throughout the canvas.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)