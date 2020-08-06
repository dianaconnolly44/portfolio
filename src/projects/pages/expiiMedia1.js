import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Editorial Illustration </h1>

    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/expiiMedia/expii1.jpg')} />
        </div>
    </div>

    <p>I created this illustration to signify to Expii's members the three types of
    math and science explanations housed on the site: text, video, drawn. This can be
    viewed on Expii's homepage <a href="https://www.expii.com/" target="_blank">here</a>.
    If the web-page is broken, click <a target="_blank" href={require('../assets/expiiMedia/expiiHomepage.jpg')}>here</a> to view a screen capture of what the page looked like.</p>

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