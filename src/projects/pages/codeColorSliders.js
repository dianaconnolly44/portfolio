import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> RGB Sliders </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104colorSliders/index.html"
        width="500"
        height="500"
      />
    </div>

    <div className="instructions" style={{ width: 500 }}>
      <b>Instructions</b>
      <br />
      Use your mouse to drag the color sliders.
    </div>

    {/*<p>I built this piece as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were learning how to .</p>*/}

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)