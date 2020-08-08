import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Follower </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104walkingMan/index.html"
        width="800"
        height="480"
      />
    </div>

    <div className="instructions" style={{ width: 800 }}>
      <b>Instructions</b>
      <br />
      Use your mouse to click within the canvas to move the follower.
    </div>


    {/*<p>I built this follower as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were learning how to .</p>*/}



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)