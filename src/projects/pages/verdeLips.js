import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> News Magazine Cover </h1>


    <p> During my time as Art Director of Verde Magazine, I illustrated the external
    covers and the internal graphics to pair with news articles. The below cover 
    illustration was made to pair with Volume 14 Issue 1, which covered the topic of 
    American patriotism through social, politcal, and cultural lenses.
    To view the full magazine edition, visit <a href="https://issuu.com/verdemagazine/docs/verdevolume14issue1" target="_blank">here</a>.</p>

    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/verde/covers/verdeLips.jpg')} />
        </div>
    </div>



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)