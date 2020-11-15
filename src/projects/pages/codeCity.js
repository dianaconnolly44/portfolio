import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> City Scape </h1>
	
	<div className="code">
      <iframe 
        src="/code-projects/104city/index.html"
        width="600"
        height="400"
      />
    </div>

    <p>I built this city scape as one of my projects in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. For this project, we were assigned to create a program which presents an ever-changing (generative) and imaginative “landscape”. This incorporated populating the landscape with generative objects, as well as having the landscape move past the viewer in some way. In the above canvas, I made a repeating static image as the background (the buildings and road), and have used code to randomize attributes of moving objects such as the clouds, cars, and planes. For example, the clouds randomize their color, transparency, and size every time they have made it off of the screen, and the cars change speed, color, and frequency.</p>

    <div className="imgs max200">
        <div>
            <img src={require('../assets/code/citySketch.jpg')} data-skip-gallery/>
            <p>Initial concept sketch</p>
        </div>
    </div>

    <div className="imgs max300">
        <div>
            <img src={require('../assets/code/cityBG.png')} data-skip-gallery/>
            <p>Static background to loop</p>
        </div>
    </div>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)