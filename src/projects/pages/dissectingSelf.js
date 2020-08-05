import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Dissecting Myself" </h1>

    
    <div className="imgs max800">
        <div>
            <img src={require('../assets/painting/dissectingSelf.jpg')} />
            <p>Acrylic, 3.5' x 6'</p>
        </div>
    </div>
    <div className="imgs max800">
        <div>
            <img src={require('../assets/painting/dissectDetail1.jpeg')} />
        </div>
        <div>
            <img src={require('../assets/painting/dissectDetail2.jpeg')} />
        </div>
    </div>


    <h2>Process:</h2>
    <div className="imgs max600">
        <div>
            <img src={require('../assets/painting/dissectProcess1.jpeg')} />
        </div>
        <div>
            <img src={require('../assets/painting/dissectProcess2.jpeg')} />
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