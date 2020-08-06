import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Clay Pet Urn </h1>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/craft/urn/final.jpeg')} />
        </div>
    </div>

    <h2>Inspiration:</h2>
    <div className="imgs max300">
        <div>
            <img src={require('../assets/craft/urn/inspo.jpg')} />
            <p>Clay pet urns found online, inspiration</p>
        </div>
    </div>

    <h2>Process:</h2>

    <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/urn/notes.jpg')} />
            <p>Planning notes</p>
        </div>
    </div>
    <div className="imgs max200">
        <div>
            <img src={require('../assets/craft/urn/goldTests.png')} />
            <p>Research: Best gold paint for polymer clay</p>
        </div>
    </div>

    Purchased:
    <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/urn/sculpey.png')} />
            <p>White polymer clay</p>
        </div>
        <div>
            <img src={require('../assets/craft/urn/gold.png')} />
            <p>Gold paint, for the urn's ♥ icon</p>
        </div>
        <div>
            <img src={require('../assets/craft/urn/varnish.png')} />
            <p>Gloss varnish and polyurethane sealant</p>
        </div>
    </div>

    Step 1:
        <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/urn/step1.jpeg')} />
            <p>Build out rough size and shape</p>
        </div>
    </div>

    Step 2:
        <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/urn/step2.jpeg')} />
            <p>Smooth the urn and carve out text</p>
        </div>
    </div>

    Step 3:
        <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/urn/step3.jpeg')} />
            <p>Paint the text and icon</p>
        </div>
    </div>

    Final:
        <div className="imgs max500">
        <div>
            <img src={require('../assets/craft/urn/step4.jpeg')} />
            <p>The final result, baked and hardened</p>
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