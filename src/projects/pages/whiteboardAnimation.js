import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Whiteboard Animation </h1>

    <p>The below videos are sample whiteboard-style animations done in Adobe After Effects, to explain
    mental health to young audiences. The bottom video is my first draft style, 
    and the top video is the final draft style.</p>

    <br/>

    <div className="video">
      <iframe 
        src="https://www.youtube.com/embed/OjmkhpeGdco"
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
      />
    </div>

    <br/>
    <br/>

    <div className="video">
      <iframe 
        src="https://www.youtube.com/embed/QiHeylj_ksQ"
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
      />
    </div>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)