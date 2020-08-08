import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Yin and Yang </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104yinAndYang/index.html"
        width="600"
        height="300"
      />
    </div>

    <div className="instructions" style={{ width: 600 }}>
      <b>Instructions</b>
      <br />
      Hover your mouse over the canvas to move the yin and yang balls.
    </div>

    {/*<p>I built this piece as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were learning how to .</p>*/}

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)