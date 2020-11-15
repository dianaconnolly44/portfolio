import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Uncanny" </h1>

    
    <div className="imgs max800">
        <div>
            <img 
                src={require('../assets/painting/boobs_v2.jpg')} 
                data-skip-gallery
                />
            <p>Oil, 4' x 2.5'</p>
        </div>
    </div>

    <p>I created this art piece during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/mixedMedia/maurides_Courses.pdf')}>60-250</a>, "2D Media   
    Studio: Painting". This piece was for the "Uncanny" assignment, in which our professor assigned us to produce an uncanny feeling in the 
    viewer by painting something that straddled the line between two images in a strange way. I chose to paint the cross between 
    sea shells and breasts, because a photo I had of sea shells reminded me of that shape. In my painting, I combined the color and shape of breasts  
    with the texture, lighting, and shape of sea shells.</p>


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