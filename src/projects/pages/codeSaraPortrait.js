import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Bubble Portrait </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104saraPortrait/index.html"
        width="720"
        height="500"
      />
    </div>

    <div className="instructions" style={{ width: 720 }}>
      <b>Instructions</b>
      <br />
      Click or drag your mouse within the canvas to reveal the bubble portrait.
    </div>

    <p>I built this piece as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were assigned to create a computational portrait using some kind of original surface treatment (such as a “custom pixel”) of a hidden underlying photograph. For this, I created a randomized paintbrush effect that looked like bubbles, and this is what is used to fill in the underlying photograph of my portrait's subject.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)