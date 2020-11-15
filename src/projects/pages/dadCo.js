import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Dad Co" Shirt and Card </h1>

    
    <div className="imgs max800">
        <div>
            <img src={require('../assets/craft/dadCo/combo_v2.png')} data-skip-gallery/>
        </div>
    </div>

    <h2>Greeting card cover: "Dad Co" album cover</h2>
    <div className="imgs max400">
        <div>
            <img src={require('../assets/craft/dadCo/badCoCover.png')} data-skip-gallery/>
            <p>Original Bad Co album cover</p>
        </div>
        <div>
            <img src={require('../assets/craft/dadCo/cardCover.png')} data-skip-gallery/>
            <p>Photoshopped with Dad as the band leader</p>
        </div>
    </div>


    <h2>Bad Co shirt as "Dad Co"</h2>
    <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/dadCo/badCoShirt.jpg')} data-skip-gallery/>
            <p>Original vintage shirt</p>
        </div>
        <div>
            <img src={require('../assets/craft/dadCo/dad.jpeg')} data-skip-gallery/>
            <p>Handmade "Dad Co" shirt</p>
        </div>
    </div>

    Process:
    <div className="imgs max400">
        <div>
            <img src={require('../assets/craft/dadCo/dadCutout-01.jpg')} data-skip-gallery/>
            <p>Printed backwards logo for vinyl cutouts</p>
        </div>
        <div>
            <img src={require('../assets/craft/dadCo/vinyl.png')} data-skip-gallery/>
            <p>Hand cut letters out of silver heat transfer vinyl</p>
        </div>
    </div>

    Final products:
    <div className="imgs max600">
        <div>
            <img src={require('../assets/craft/dadCo/dad1.png')} data-skip-gallery/>
            <p>Finished shirt by ironing on heat transfer vinyl, and printed out the 
            "Dad Co" album cover for the Father's Day card.</p>
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