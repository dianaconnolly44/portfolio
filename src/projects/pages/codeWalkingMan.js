import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Follower </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104walkingMan/index.html"
        width="800"
        height="480"
      />
    </div>

    <div className="instructions" style={{ width: 800 }}>
      <b>Instructions</b>
      <br />
      Click your mouse within the canvas to make the follower walk to that spot.
    </div>


    <p>I built this follower as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this assignment, we were to create a walking character by: loading the 8 walk cycle images into an array, displaying the character with a cycling frame number, moving the character across the canvas, and flipping the character left/right appropriately. For this, I wrote a for loop that filled up the frames array with images obtained by loading the respective image files in the array of file names string.</p>



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)