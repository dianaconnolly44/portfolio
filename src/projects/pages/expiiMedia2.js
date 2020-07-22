import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Editorial Illustration </h1>

    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/expiiMedia/expii2.jpg')} />
        </div>
    </div>


<p>I created this illustration to signify to Expii's members the sense of communication 
and a community, reachable online through Expii's various social media platforms. This can be
    viewed on Expii's homepage <a href="https://www.expii.com/" target="_blank">here</a>.
    If the web-page is broken, click <a target="_blank" href={require('../assets/expiiMedia/expiiHomepage.jpg')}>here</a> to view a screen capture of what the page looked like.</p>



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)