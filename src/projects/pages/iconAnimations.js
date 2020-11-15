import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Icon Explainer Videos </h1>

    <h2>Process:</h2>
    <div className="imgs max200">
        <div>
            <img 
                src={require('../assets/animations/plane.jpg')} 
                data-skip-gallery
            />
            <p>Assets designed and created in Illustrator</p>
        </div>
         <div>
            <img 
                src={require('../assets/animations/plane2.gif')} 
                data-skip-gallery
            />
            <p>Assets transferred to and animated in After Effects</p> 
        </div>
    </div>

    <h2>Works:</h2>
    
    <div className="video">
      <iframe 
        src="https://www.youtube.com/embed/oGzOwWHdXK8" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
      />
    </div>

    <br/>
    <br/>

    <div className="video">
      <iframe 
        src="https://www.youtube.com/embed/eM-U4uC2uhc" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
      />
    </div>

    

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)






// worked with the rabbi to developed visual 
    //symbols to represent each of the prayers in the Shabbat in order to guide the members 
    //with ASD through the ceremony. These symbols will be presented to the members via a 
    //large banner on the temple’s stage as well as on personal bookmarks that correspond 
    //with the banner. The bookmarks will also have a sticker packet with the symbols printed 
    //as stickers, to be placed on each of the corresponding sections for the current prayer 
    //on the bookmarks. The visually and physically interactive elements of these materials 
    //will help to add more sensorial aspects to the Shabbat, further benefitting Temple Sinai’s members with ASD.