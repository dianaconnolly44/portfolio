import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "The Elephant in the Classroom" News Magazine Cover </h1>

    <p> During my time as Art Director of Verde Magazine, I illustrated the external
    covers and the internal graphics to pair with news articles. The below cover 
    illustration was made to pair with Volume 13 Edition 4, which covered the topic of 
    race and education. To view the full magazine edition, visit <a href="https://issuu.com/verdemagazine/docs/verdeedition13ssue4" target="_blank">here</a>.</p>

    <div className="imgs max700">
        <div>
            <img src={require('../assets/verde/covers/verdeElephant.jpg')} />
        </div>
    </div>



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)