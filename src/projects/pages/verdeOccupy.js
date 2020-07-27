import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Occupy [Here]" News Magazine Cover </h1>


    <p> During my time as Art Director of Verde Magazine, I illustrated the external
    covers and the internal graphics to pair with news articles. The below cover 
    illustration was made to pair with Volume 13 Edition2, which covered the topic of 
    the Occupy movement hitting Stanford University and other college campuses in the United States.
    To view the full magazine edition, visit <a href="https://issuu.com/verdemagazine/docs/verde_vol13ed2" target="_blank">here</a>.</p>

    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/verde/covers/verdeOccupy.jpg')} />
        </div>
    </div>



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)