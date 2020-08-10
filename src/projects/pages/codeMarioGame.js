import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Mario Platformer Game </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104marioGame/index.html"
        width="600"
        height="300"
      />
    </div>

    <div className="instructions" style={{ width: 600 }}>
      <b>Instructions</b>
      <br />
      Click within the canvas. Then use your space bar to make Mario jump onto the platforms.
    </div>

    <p>I built this game as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were learning how to build platformer games. For my assignment, I recreated the colors of the original Mario platformer jumping game.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)