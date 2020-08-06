import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Pumpkin Overload": Math Problem GIF </h1>

    <div className="imgs max600">
      <div>
        <img src={require('../assets/expiiGIFs/pumpkins-sm.gif')} />
      </div>
    </div>

<p> I created this GIF to pair with a math problem written by an Expii content
creator about algebra, with the theme of fall and pumpkins. Below is what the GIF 
looks like on Expii's site, embedded with the math problem itself as well as 
my illustrations to represent the multiple choice options. 
If the web-page is broken, click <a target="_blank" href={require('../assets/expiiGIFs/pumpkins.jpg')}>here</a> to view a screen capture of what the page looked like.</p>

    <br />

    <iframe 
      src="https://www.expii.com/t/fibonacci-sequence-5066?type=problem&id=18065" 
      title="Pumpkin Overload"
    />

    <p>Scroll within the webpage's box to see full contents.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)