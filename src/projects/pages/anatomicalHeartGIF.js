import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Anatomical Valentine": Animated Heart GIF </h1>

<div className="imgs max600">
            <div>
                <img src={require('../gallery/heart.gif')} />
                <p>"From our heart to yours...wishing everyone a very Happy Valentine’s Day!"</p>
            </div>
    </div>

<p> I created this GIF to be a digital valentine for a healthcare company, thus the reason
I depicted the heart not as ♥️, but rather as an anatomical human heart. To see the post,
visit it <a href="https://www.instagram.com/p/BfLobsUlIMx/?hl=en" target="_blank">here</a>.
If the web-page is broken, click <a target="_blank" href={require('../assets/heartPost.png')}>here</a> to view a screen capture of what it looked like.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)