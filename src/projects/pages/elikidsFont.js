import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Children's Book Font </h1>

    
    <p>I designed the below font to pair with a children's book for preschool age readers. The font was 
    designed with an energetic and freeform feeling to it, thus the mismatched letter placement and variances in shape. 
    I wrote out the font in several different language translations for the children's book, with some select examples seen below.</p>

    <div className="imgs max200">
        <div>
            <img src={require('../assets/lettering/flikidsEnglish.jpg')} />
            <p>English</p>
        </div>
    </div>

    <div className="imgs max200">
        <div>
            <img src={require('../assets/lettering/flikidsSpanish.jpg')} />
            <p>Spanish</p>
        </div>
    </div>

    <div className="imgs max200">
        <div>
            <img src={require('../assets/lettering/flikidsDutch copy.jpg')} />
            <p>Dutch</p>
        </div>
    </div>

    <div className="imgs max200">
        <div>
            <img src={require('../assets/lettering/flikidsTurkish.jpg')} />
            <p>Turkish</p>
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