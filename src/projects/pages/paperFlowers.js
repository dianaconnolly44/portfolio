import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Paper Flowers </h1>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/craft/paperFlowers/weddingWindow/window2.jpg')} data-skip-gallery/>
        </div>
    </div>

    <h2>Process</h2>
    
    <div className="imgs max600">
        <div>
            <img src={require('../assets/craft/paperFlowers/process1.jpeg')} data-skip-gallery/>
            <p>Hot glue individual petals encompassing each other</p>
        </div>
        <div>
            <img src={require('../assets/craft/paperFlowers/process2.jpeg')} data-skip-gallery/>
            <p>Repeat process until desired size is achieved</p>
        </div>
    </div>

    <h2>Collections</h2>

    <p>Wedding Window:</p>
    <div className="imgs max600">
        <div>
            <img src={require('../assets/craft/paperFlowers/weddingWindow/collection.jpeg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/craft/paperFlowers/weddingWindow/whiteRose.jpeg')} data-skip-gallery/>
        </div>
    </div>
    <div className="imgs max600">
        <div>
            <img src={require('../assets/craft/paperFlowers/weddingWindow/window2.jpg')} data-skip-gallery/>
        </div>
    </div>

    <p>Spring Windows:</p>
    <div className="imgs max600">
        <div>
            <img src={require('../assets/craft/paperFlowers/springWindow/rose.jpeg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/craft/paperFlowers/springWindow/box1.jpeg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/craft/paperFlowers/springWindow/box2.jpeg')} data-skip-gallery/>
        </div>
    </div>
    <div className="imgs max600">
        <div>
            <img src={require('../assets/craft/paperFlowers/springWindow/frontDay.jpeg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/craft/paperFlowers/springWindow/side1.jpeg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/craft/paperFlowers/springWindow/side2.jpeg')} data-skip-gallery/>
        </div>
    </div>
    
    <p>Rose Wreath:</p>
    <div className="imgs max600">
        <div>
            <img src={require('../assets/craft/paperFlowers/wreaths/rose1.jpeg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/craft/paperFlowers/wreaths/rose2.jpeg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/craft/paperFlowers/wreaths/rose3.jpeg')} data-skip-gallery/>
        </div>
    </div>

    <p>Daffodil Wreath:</p>
    <div className="imgs max600">
        <div>
            <img src={require('../assets/craft/paperFlowers/wreaths/daffodil.jpeg')} data-skip-gallery/>
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