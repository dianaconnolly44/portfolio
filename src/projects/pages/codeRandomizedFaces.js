import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Randomized Faces </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104faces/index.html"
        width="480"
        height="640"
      />
    </div>
   
    <div className="instructions" style={{ width: 480 }}>
      <b>Instructions</b>
      <br />
      Click your mouse within the canvas to randomize the facial features.
    </div>


    <p>I built this piece as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were learning about “Chernoff Faces,” which are an information visualization technique to visualize multivariate data points in the form of a face. I created these randomized faces where the variables were: face size, face shape, skin color, hair color, hair style, and smile size.</p>


    

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)