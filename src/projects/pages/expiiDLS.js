import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Save the Day(light)": Math Problem GIF </h1>

<div className="imgs max600">
            <div>
                <img src={require('../gallery/expiiGIFs/clockFinal.gif')} />
            </div>
    </div>

<p> I created this GIF to pair with a math problem written by an Expii content
creator about pre-algebra, with the theme of Daylight Saving Time. Below is what the GIF 
looks like on Expii's site, embedded with the math problem itself as well as 
my illustrations to represent the multiple choice options. 
If the web-page is broken, click <a target="_blank" href={require('../gallery/expiiGIFs/dls.png')}>here</a> to view a screen capture of what the page looked like.</p>
   <br />
<iframe src="https://www.expii.com/t/what-is-a-percent-9062?type=problem&id=18056" title="Pumpkin Overload"></iframe>
<p>Scroll within the webpage's box to see full contents.</p>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)