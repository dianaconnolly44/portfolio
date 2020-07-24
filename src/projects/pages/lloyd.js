import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "The Eleventh Hour" Prog Rock Album Cover</h1>

    <p>The below art was made for 
    musician <a href="https://lloydlandesman.com/" target="_blank">Lloyd Landesman</a>, who is known for his works that 
    include the CBS college football theme and musical ad campaigns such as "Every kiss begins with Kay". For the 
    design of his prog rock album "The Eleventh Hour," I selected typeface and illustrated imagery 
    to fit his album's theme of intensity and time. Some of my preliminary sketches and the album's Spotify sample are included below.</p>

    <div className="imgs max700">
        <div>
            <img src={require('../assets/lloyd/lloyd_hires.jpg')} />
        </div>
    </div>


    <p>Some other sketches:</p>

    <div className="imgs max300">
        <div>
            <img src={require('../assets/lloyd/bloodyClock.jpg')} />
            <p>Photo manipulation</p>
        </div>
        <div>
            <img src={require('../assets/lloyd/fractal.jpg')} />
            <p>Fractal art</p>
        </div>
        <div>
            <img src={require('../assets/lloyd/glow.jpg')} />
            <p>Fractal art</p>
        </div>
    </div>
    <div className="imgs max300">
        <div>
            <img src={require('../assets/lloyd/collage.jpg')} />
            <p>Sketch in Adobe Illustrator</p>
        </div>
        <div>
            <img src={require('../assets/lloyd/punchy.jpg')} />
            <p>Sketch in Adobe Illustrator</p>
        </div>
        <div>
            <img src={require('../assets/lloyd/swan.jpg')} />
            <p>When Lloyd pondered title "Black Swan"</p>
        </div>
    </div>

    <p>Spotify 30-second samples of album's songs:</p>
    <br/>

    <iframe class="video" src="https://open.spotify.com/embed/album/3p6q7uN4nGuO2bv2urrLvk" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>



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