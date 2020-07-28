import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Botanical Self Portraits </h1>

    
    <p>Upon moving to New York City, I wanted to paint some wall art for my new bedroom. I 
    thought to paint "botanical self portraits" of the places I have lived, creating botanical 
    illustrations of each location's most memorable plant.</p>

    <div className="imgs max900">
        <div>
            <img src={require('../assets/painting/botanicalSequoia.jpg')} />
            <p>Coastal Redwood Tree - I grew up in California, in a town called "Palo Alto," or "Tall Tree" in Spanish, named after the notably tall Sequioa strain that naturally grows in town.</p>
        </div>
        <div>
            <img src={require('../assets/painting/botanicalGinkgo.jpg')} />
            <p>Ginkgo Tree - I attended college in Pittsburgh, and the campus was covered in these. Most memorably, they turned a bright yellow in Fall, which corresponds with the city's bridges and sports team colors.</p>
        </div>
        <div>
            <img src={require('../assets/painting/botanicalPoppy.jpg')} />
            <p>California Poppy - The state flower, as well as one of the most coveted plants (it is illegal to pick them). Visiting home would often involve spottings of these pops of orange.</p>
        </div>
        <div>
            <img src={require('../assets/painting/botanicalSnakePlant.jpg')} />
            <p>Snake Plant - Now living in New York City, the only plant that comes to mind for this region is the Snake Plant, as most city dwellers, including myself, adorn their apartments with these.</p>
        </div>
    </div>

    <div className="imgs max800">
        <div>
            <img src={require('../assets/painting/botanicalBedroom.jpg')} />
        </div>
    </div>

    <div className="imgs max800">
        <div>
            <img src={require('../assets/painting/botanicalSequoia.jpg')} />
        </div>
        <div>
            <img src={require('../assets/painting/botanicalGinkgo.jpg')} />
        </div>
    </div>

    <div className="imgs max800">
        <div>
            <img src={require('../assets/painting/botanicalPoppy.jpg')} />
        </div>
        <div>
            <img src={require('../assets/painting/botanicalSnakePlant.jpg')} />
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