import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Petri Portraits </h1>

    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/mixedMedia/petri/allDishes.png')} />
        </div>
    </div>

    <p>I created this piece during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/mixedMedia/artBio_syllabus.pdf')}>60-358</a>, "Art and Biology". 
    This class was focused on the intersection between the two areas of study, and for my final project I wanted to create a 
    piece that was likewise focused on both art and science. For this, I combined a family portrait with petri dish swabs of 
    each of my family members' saliva bacterial growths.</p>
    
    <h2>Process:</h2>

    First, I collected saliva swabs from my four family members, and cultivated the bacterial growths in petri dishes individually labeled for each person.

    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/petri/dadSwatch.jpg')} />
        </div>
        <div>
            <img src={require('../assets/mixedMedia/petri/meSwatch.jpg')} />
        </div>
    </div>

    Next, I useed the cultivated bacterial growths as the "ink" in each person's portrait, using a general pencil sketch of each person's face as a guide.

    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/petri/process.jpg')} />
        </div>
    </div>


    <h2>Result:</h2>

    The resulting petri dish is demonstrated below, where the individual's own bacteria was used to illustrate themself.

    <div className="imgs max500">
        <div>
            <img src={require('../assets/mixedMedia/petri/dadDish.jpg')} />
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