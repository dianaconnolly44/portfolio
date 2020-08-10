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

    <p>I built this card animation as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were given scans of the popular game "Mixies" from 1956, which consisted of 12 heads, 12 bodies, and 12 legs, which players could mix up in different ways. The goal of this project was to build a randomization system that allows one to play this game virtually, in which our code populates the arrays of images using a string to represent the image files.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)