import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Turtle Race </h1>

    <div className="code">
      <iframe 
        src="/code-projects/104turtlesRacing/index.html"
        width="640"
        height="300"
      />
    </div>

    <div className="instructions" style={{ width: 640 }}>
      <b>Instructions</b>
      <br />
      Refresh the page to start a new race.
    </div>

    <p>I built this piece for one of my exams in the computer science course <a href="https://courses.ideate.cmu.edu/15-104/f2016/" target="_blank">15-104</a>, "Coding for Creative Practice" at Carnegie Mellon University. In this exam, we were tested on how to use turtle graphics in our code, which are vector graphics produced using a relative cursor (the "turtle") within a Cartesian plane. The "turtle" acts as a first-person cursor, being told how and where to move. In this test, we were to randomize four turtles in their race to a finish line, stopping the race when the first turtle hits the line and labelling the scene with which one won.</p>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)