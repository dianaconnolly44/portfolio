import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Greeting Cards </h1>

    
    <div className="imgs max800">
        <div>
            <img src={require('../assets/craft/cards/sara.jpeg')} data-skip-gallery/>
        </div>
    </div>

    <div className="imgs max800">
        <div>
            <img src={require('../assets/craft/cards/dad.jpeg')} data-skip-gallery/>
        </div>
    </div>

    <div className="imgs max800">
        <div>
            <img src={require('../assets/craft/cards/mom.jpeg')} data-skip-gallery/>
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