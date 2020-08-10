import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Clock </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104pinkClock/index.html"
        width="300"
        height="300"
      />
    </div>

    <p>I built this clock as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were learning about simple string formatting, how to use graphical rotations, and how to use the system's functions for accessing the current time. My clock rendition above used rotation calculations to build out the clock's dots as well as rotate the arms.</p>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)