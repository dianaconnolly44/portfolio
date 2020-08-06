import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Migraine Goggles </h1>

    
    

    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/migraine/1.jpg')} />
        </div>
    </div>

    <p>I created this interactive art piece during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/mixedMedia/maurides_Courses.pdf')}>60-101</a>, "Concept  
    Studio I: The Self and the Human Being". The assignment was to create a piece of art based off of any of Oliver Sacks, M.D.'s books. I 
    chose to reflect on his book "Migraine," because I also suffer from migraines. I created goggles with a collection of common 
    and rare visual impairments of migraines, ranging from the iconic C-shaped scintillating scotoma to more rare cases like blurred vision 
    or appearances of color splotches. The audience was instructed to try on the different migraine goggles to experience these 
    varying migraine visual changes.</p>

    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/migraine/3_v2.jpg')} />
            <p>Michelle, a classmate, demonstrating the scintillating scotoma goggle</p>
        </div>
        <div>
            <img src={require('../assets/mixedMedia/migraine/4.jpg')} />
            <p>Installation: all goggles in a box labeled "Impairment"</p>
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