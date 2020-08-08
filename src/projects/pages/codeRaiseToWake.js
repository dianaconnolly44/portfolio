import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Raise to Wake </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104eyes/index.html"
        width="480"
        height="640"
      />
    </div>

    <div className="instructions" style={{ width: 480 }}>
      <b>Instructions</b>
      <br />
      Move your mouse up and down to wake up the monster with the sun and put him to sleep with the moon. Bonus: click for a little surprise!
    </div>

    <p>I built this piece as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were assigned to code a "dynamic drawing," such that our drawings would change based on input from a user's mouse. For this, I wanted to have the user's interaction be with a monster character, who would be awakened when the user causes the sun to rise or calmed back to sleep when the user lowers the sun. This sunsetting and sunrising is further highlighted by the background changing colors accordingly.</p>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)