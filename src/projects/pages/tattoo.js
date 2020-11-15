import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Heart Tattoo </h1>


    <div className="imgs max600">
        <div>
            <img src={require('../assets/mixedMedia/tattoo/tatGrid.jpg')} data-skip-gallery/>
        </div>
        
    </div>
    
    <p>I created this piece during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/mixedMedia/imaging_Syllabus.pdf')}>60-160</a>, "2D Media   
    Studio: Imaging". The assignment was to design an image for a tattoo, using the location on the body as an influence for the shape and 
    contents of the tattoo itself. Being interested in biology, I decided to create a tattoo of an anatomical heart, above where one's 
    actual heart exists. I also decided to make the tattoo have a fun and interactive element, making a "connect the dots" tattoo, for 
    people to draw out the anatomical heart themselves.</p>
    

    <div className="imgs max600">
        <div>
            <img src={require('../assets/mixedMedia/tattoo/1.jpg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/mixedMedia/tattoo/prints.jpg')} data-skip-gallery/>
        </div>
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