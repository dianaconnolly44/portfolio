import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Don't Call Me Sweetheart" News Magazine Cover </h1>

    <p> During my time as Art Director of Verde Magazine, I illustrated the external
    covers and the internal graphics to pair with news articles. The below cover 
    illustration was made to pair with Volume 14 Issue 6, which covered the topic of 
    women and gender equality in Silicon Valley.
    To view the full magazine edition, visit <a href="https://issuu.com/verdemagazine/docs/issue14p6" target="_blank">here</a>.</p>


    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/verde/covers/verdeSweetheart.jpg')} />
        </div>
    </div>





    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)