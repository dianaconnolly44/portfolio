import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Darwinian Portraits </h1>

    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/mixedMedia/finches1.jpg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/mixedMedia/finches2.jpg')} data-skip-gallery/>
        </div>
    </div>

    <p>I created this piece during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/mixedMedia/imaging_Syllabus.pdf')}>60-160</a>, "2D Media   
    Studio: Imaging". The course helped us first-year students to become familiar and comfortable with digital photo manipulation tools 
    such as Adobe Photoshop. I used this project to practice photo manipulations to create "Darwinian portraits" of my family members. 
    Charles Darwin famously discovered the finch beaks unique to the Galapagos Islands and used it in support of the theory of evolution. I 
    used images of Galapagos finches to switch my family members' noses with their famous beaks. This was to highlight the concept of 
    evolution in which each individual finch has developed beaks for their own needs, originating from one same ancestor finch. This is similar 
    to family members, as each originated from the same ancesotrs, but each individual's phenotypes are nonetheless varied and passed on to 
    their subsequent offspring as new variations of the original phenotype.</p>
    

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