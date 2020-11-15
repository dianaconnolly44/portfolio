import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Personalized Snellen Chart </h1>

    
    <div className="imgs max800">
        <div>
            <img src={require('../assets/graphicDesign/snellen.jpg')} data-skip-gallery/>
        </div>
    </div>

    <p>The <a href="https://en.wikipedia.org/wiki/Snellen_chart" target="_blank">Snellen Chart</a> is a tool invented by ophthalmologist Herman Snellen to 
    estimate visual acuity in patients based on how well they can read varying 
    sized text. See below for an image of a classic Snellen Chart.

    <div className="imgs max800">
        <div>
            <img src={require('../assets/graphicDesign/snellenDemo.jpg')} data-skip-gallery/>
        </div>
    </div>


    The Snellen Chart is still commonly used by ophthalmologists today, and since my mom is 
    an ophthalmologist herself, I thought a personalized version would be a 
    great gift for her on Mother's Day. For her gift, I mimicked the look of the original 
    Snellen Chart and altered the text to include a message to my mom.</p>

    <div className="imgs max800">
        <div>
            <img src={require('../assets/graphicDesign/snellenDesign.jpg')} data-skip-gallery/>
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