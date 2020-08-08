import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Geometric Peaches </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104peaches/index.html"
        width="680"
        height="620"
      />
    </div>

    <div className="instructions" style={{ width: 680 }}>
      <b>Instructions</b>
      <br />
      Hover your mouse over the canvas to adjust the geometric borders of the peaches.
    </div>

    <p>I built this piece as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were experimenting with mathematical curves. Using formulas on Wolfram's MathWorld site, we were to turn in a piece using the aesthetics of curves of our choosing. For my piece, I built a bunch of “peaches” that start off looking like normal peaches while your mouse is at the top of the canvas. Once your mouse goes down the canvas, the edges of each of the peaches creates a new shape. Moving your mouse left or right changes the rotation of those edge shapes. The original curve that I found on the MathWorld site was called a “Cardioid”. I rotated it 270˚ in order to look more like a peach. Then while playing around with the values set in my curve equation, I found that I could create different-looking edge shapes, like how the top left curve’s edges seem to make star shapes, and the bottom left curve’s edges create more of a loop shape.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)