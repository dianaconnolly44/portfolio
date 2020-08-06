import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Nail Art </h1>

    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/craft/nailArt/coverPhoto.jpg')} />
        </div>
    </div>

    <p>As a hobby during my middle and high school years, I enjoyed painting my nails with 
    various scenes and images. I remember my classmates would often grab my hand come every 
    Monday, interested to see what I had painted next. Below is a selection of some of 
    the paintings I did on my own nails during this time period.</p> 

    <h2>Works</h2>

    <div className="imgs max300">
        <div>
            <img src={require('../assets/craft/nailArt/tiger_v2.jpg')} />
            <p>Tiger's eye</p>
        </div>
        <div>
            <img src={require('../assets/craft/nailArt/sunset.jpg')} />
            <p>Tropical sunset</p>
        </div>
    </div>

    <div className="imgs max300">
        <div>
            <img src={require('../assets/craft/nailArt/moon.jpg')} />
            <p>Night sky</p>
        </div>
        <div>
            <img src={require('../assets/craft/nailArt/nyc.jpg')} />
            <p>City skyline</p>
        </div>
    </div>

    <div className="imgs max300">
        <div>
            <img src={require('../assets/craft/nailArt/xmas_v2.jpg')} />
            <p>Santa's sleigh</p>
        </div>
        <div>
            <img src={require('../assets/craft/nailArt/pier.jpg')} />
            <p>Night pier</p>
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