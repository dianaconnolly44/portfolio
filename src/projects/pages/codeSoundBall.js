import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Ball Sound Effects </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104soundBall/index.html"
        width="600"
        height="400"
      />
    </div>

    <p>I built this piece as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were learning how to incorporate sound files into our animations, which are caused by certain instances in our animation such as the above ball bouncing off the four walls encompassing it.</p>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)