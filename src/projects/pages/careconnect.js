import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Character Explainer Videos </h1>

    <p>The below character animations were produced to help a healthcare company explain to its users 
    about a new support program being offered. I produced four separate animation scenes to pair with 
    their voice overs, parsed below. To view these scenes within the context of the rest of the video's topics, 
    view the fifth video linked below.</p>

    <br/>

    <div className="video">
      <iframe 
        src="https://www.youtube.com/embed/-H_074Zrvbw" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
      />
    </div>
    
    <br/>
    <br/>

    <div className="video">
      <iframe 
        src="https://www.youtube.com/embed/ohu9O_62gas" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
      />
    </div>
    
    <br/>
    <br/>

    <div className="video">
      <iframe 
        src="https://www.youtube.com/embed/abSpVPw4xBI" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
      />
    </div>
    
    <br/>
    <br/>

    <div className="video">
      <iframe 
        src="https://www.youtube.com/embed/5dFTB50oh0E" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
      />
    </div>
    
    <br/>
    <br/>

    <div className="video">
      <iframe 
        src="https://www.youtube.com/embed/QBMJQDhYPH4" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
      />
    </div>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)