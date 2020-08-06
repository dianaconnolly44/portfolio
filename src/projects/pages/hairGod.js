import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Hair God </h1>


    <div className="imgs max700">
        <div>
            <img src={require('../assets/mixedMedia/hairGod/3.jpg')} />
        </div>
    </div>

    <p>I created this interactive art piece during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/mixedMedia/imaging_Syllabus.pdf')}>60-160</a>, "2D Media   
    Studio: Imaging". The assignment was to create an object to instill in the viewer a sense of a god-like being or structure. I 
    have a fascination with humankind's obsession over hair, e.g. what is too much, what is too little, how beauty is defined by long 
    hair, and how some people even pay to wear other humans' hair. Thus, I collected hair pieces from a local beauty store and began 
    constructing a "hair god" structure, one that was the ultimate long-hair being, sitting and ready for the audience to touch and 
    interact with it.</p>
    
    <div className="imgs max600">
        <div>
            <img src={require('../assets/mixedMedia/hairGod/1.jpg')} />
        </div>
        <div>
            <img src={require('../assets/mixedMedia/hairGod/2.jpg')} />
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