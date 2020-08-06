import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Halloween: All Grown Up?" News Magazine Cover </h1>

    <p> During my time as Art Director of Verde Magazine, I illustrated the external
    covers and the internal graphics to pair with news articles. The below cover 
    illustration was made to pair with Volume 13 Edition 1, which covered the topic of 
    Halloween and how the holiday had come to have new meanings for high schoolers.
    To view the full magazine edition, visit <a href="https://issuu.com/verdemagazine/docs/verde_vol13ed1" target="_blank">here</a>.</p>

    <div className="imgs max700">
        <div>
            <img src={require('../assets/verde/covers/verdeBaby.jpg')} />
        </div>
    </div>
   



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)