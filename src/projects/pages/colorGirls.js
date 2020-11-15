import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Digital Color Study: Bridging </h1>

    
    <div className="imgs max800">
        <div>
            <img 
                src={require('../assets/drawing/colorBridging1.jpg')} 
                data-skip-gallery
                />
        </div>
    </div>

    <div className="imgs max800">
        <div>
            <img 
                src={require('../assets/drawing/colorBridging2.jpg')} 
                data-skip-gallery
                />
        </div>
    </div>

    <div className="imgs max800">
        <div>
            <img 
                src={require('../assets/drawing/colorBridging3.jpg')} 
                data-skip-gallery
                />
        </div>
    </div>

    <p>I created this illustration during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/drawing/s17_color.pdf')}>60-452</a>, "Advanced DP3: Color 
    Studio". The assignment was to create three versions of the same image, starting from 
    a very unified color palette, introducing an anomalous color in the second variation, 
    and then, in the third variation, introducing "bridging colors" to help mitigate 
    the anomalous color.</p>



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