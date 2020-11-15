import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Star Maps </h1>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/graphicDesign/starMaps/hizalMockup.jpg')} data-skip-gallery/>
        </div>
    </div>

    <h2>Process</h2>
    
    <div className="imgs max600">
        <div>
            <img src={require('../assets/graphicDesign/starMaps/latLong.png')} data-skip-gallery/>
            <p>Retrieved location's GPS coordinates</p>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/starMaps/yourSky.png')} data-skip-gallery/>
            <p>Input coordinates, date, time into YourSky.com</p>
        </div>
    </div>

    <div className="imgs max400">
        <div>
            <img src={require('../assets/graphicDesign/starMaps/data.jpg')} data-skip-gallery/>
            <p>Star location data points collected from website</p>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/starMaps/trace.jpg')} data-skip-gallery/>
            <p>Traced over each star & made sky background in Illustrator</p>
        </div>
    </div>

    <br/>
    <div className="imgs max600">
        <div>
            <img src={require('../assets/graphicDesign/starMaps/hizal-01.jpg')} data-skip-gallery/>
            <p>Combined night sky with text for final print</p>
        </div>
    </div>



    <br/>
    <h2>Gifts</h2>

    <p>Valentine's Day gift for my partner:</p>
    <div className="imgs max500">
        <div>
            <img src={require('../assets/graphicDesign/starMaps/hizal-01.jpg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/starMaps/hizalMockup.jpg')} data-skip-gallery/>
        </div>
    </div>

    <p>Wedding anniversary gift for my sister and brother-in-law:</p>
    <div className="imgs max500">
        <div>
            <img src={require('../assets/graphicDesign/starMaps/sara-01.png')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/starMaps/saraPhoto.jpg')} data-skip-gallery/>
        </div>
    </div>

    <p>Mother's Day gift for my mom:</p>
    <div className="imgs max500">
        <div>
            <img src={require('../assets/graphicDesign/starMaps/mom1.jpg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/starMaps/mom2.jpg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/starMaps/momPhoto.jpeg')} data-skip-gallery/>
        </div>
    </div>

    <p>Father's Day gift for my dad:</p>
    <div className="imgs max500">
        <div>
            <img src={require('../assets/graphicDesign/starMaps/dad1.jpg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/starMaps/dad2.jpg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/starMaps/dadPhoto.jpeg')} data-skip-gallery/>
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