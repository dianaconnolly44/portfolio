import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "I Want YOU to be Happy" News Magazine Cover </h1>

    <p> During my time as Art Director of Verde Magazine, I illustrated the external
    covers and the internal graphics to pair with news articles. The below cover 
    illustration was made to pair with Volume 13 Issue 3, which covered the topic of 
    happiness in Palo Alto High School.
    To view the full magazine edition, visit <a href="https://issuu.com/verdemagazine/docs/verdeedition13issue3" target="_blank">here</a>.</p>



    <div className="imgs max700">
        <div>
            <img 
                src={require('../assets/verde/covers/verdeSam.jpg')} 
                onClick={props.open}
            />
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