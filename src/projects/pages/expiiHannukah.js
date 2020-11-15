import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Hannukah Candles": Math Problem GIF </h1>

    <div className="imgs max600">
      <div>
          <img 
                src={require('../assets/expiiGIFs/hanukkah.gif')} 
                data-skip-gallery
            />
      </div>
    </div>

<p> I created this GIF to pair with a math problem written by an Expii content
creator about algebra, with the theme of Hanukkah. Below is what the GIF 
looks like on Expii's site, embedded with the math problem itself as well as 
my illustrations to represent the multiple choice options. 
If the web-page is broken, click <a target="_blank" href={require('../assets/expiiGIFs/hanukkah.jpg')}>here</a> to view a screen capture of what the page looked like.</p>
    
    <br />

    <iframe 
      src="https://www.expii.com/t/algebra-tree-diagram-for-number-of-outcomes-5375?type=problem&id=18193" 
      title="Hannukah Candles"
    />

    <p>Scroll within the webpage's box to see full contents.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)