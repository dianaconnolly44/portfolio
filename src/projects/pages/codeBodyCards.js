import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Mismatched </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104bodyCards/index.html"
        width="280"
        height="540"
      />
    </div>

    <div className="instructions" style={{ width: 270 }}>
      <b>Instructions</b>
      <br />
      Click on any card to change that card.
    </div>

    {/*<p>I built this card animation as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were learning how to .</p>*/}

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)