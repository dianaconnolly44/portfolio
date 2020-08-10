import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Randomized Pie Chart </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104randomPieChart/index.html"
        width="400"
        height="400"
      />
    </div>

    <div className="instructions" style={{ width: 400 }}>
      <b>Instructions</b>
      <br />
      Click your mouse in the canvas to randomize the pie chart segments.
    </div>

    <p>I built this piece as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were learning how to populate arrays and visualize information. The above pie chart starts at a set collection of data points and then randomizes the data points as well as the number of pie chart segments.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)