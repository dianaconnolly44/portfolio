import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Handmade Soaps </h1>

    
    <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/soaps/wave2.jpg')} data-skip-gallery/>
        </div>
    </div>

    <h2>Process:</h2>

    <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/soaps/melted.jpeg')} data-skip-gallery/>
            <p>Melt down soap base, add in colorants and essential oils</p>
        </div>
        <div>
            <img src={require('../assets/craft/soaps/mold.png')} data-skip-gallery/>
            <p>Pour the mixtures into the soap bar molds</p>
        </div>
    </div>

    <h2>Soaps:</h2>

    <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/soaps/set1.png')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/craft/soaps/set2.png')} data-skip-gallery/>
        </div>
    </div>

    <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/soaps/batch.jpeg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/craft/soaps/carved.jpeg')} data-skip-gallery/>
        </div>
    </div>
    <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/soaps/wave2.jpg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/craft/soaps/wave.jpeg')} data-skip-gallery/>
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