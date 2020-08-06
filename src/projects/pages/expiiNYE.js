import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Drop the Ball": Math Problem GIF </h1>

    <div className="imgs max600">
      <div>
        <img src={require('../assets/expiiGIFs/nyeBig.gif')} />
      </div>
    </div>

<p> I created this GIF to pair with a math problem written by an Expii content
creator about rate-time-distance, with the theme of New Year's Eve. Below is what the GIF 
looks like on Expii's site, embedded with the math problem itself as well as 
my illustrations to represent the multiple choice options. 
If the web-page is broken, click <a target="_blank" href={require('../assets/expiiGIFs/NYE.jpg')}>here</a> to view a screen capture of what the page looked like.</p>
    
    <br />

    <iframe 
      src="https://www.expii.com/problem/18549" 
      title="Drop the Ball"
    />

    <p>Scroll within the webpage's box to see full contents.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)