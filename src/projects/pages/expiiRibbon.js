import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Cut the Ribbon": Math Problem GIF </h1>

<div className="imgs max600">
            <div>
                <img src={require('../assets/expiiGIFs/ribbon-sm.gif')} />
            </div>
    </div>

<p> I created this GIF to pair with a math problem written by an Expii content
creator about geometry, with the theme of Christmas. Below is what the GIF 
looks like on Expii's site, embedded with the math problem itself as well as 
my illustrations to represent the multiple choice options. 
If the web-page is broken, click <a target="_blank" href={require('../assets/expiiGIFs/ribbon.jpg')}>here</a> to view a screen capture of what the page looked like.</p>
   <br />
<iframe src="https://www.expii.com/t/altitude-above-or-below-a-sphere-8947?type=problem&id=18302" title="Pumpkin Overload"></iframe>
<p>Scroll within the webpage's box to see full contents.</p>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)