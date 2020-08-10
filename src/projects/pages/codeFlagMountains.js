import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> King of the Hill </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104flagMountains/index.html"
        width="640"
        height="240"
      />
    </div>

    <p>I built this piece as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were given a sketch file that generated an ever-changing green terrain against a blue sky. We were to compute the terrain's hilltops and plant a flag at those highest points of the terrain. This assignment was geared at helping us to feel comfortable analyzing and interacting wtih elements of an array.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)