import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> The Key to Us </h1>


    <div className="imgs max700">
        <div>
            <img src={require('../assets/mixedMedia/theKeyToUs/boxes.png')} data-skip-gallery/>
        </div>
    </div>

    <p>I created this piece during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/mixedMedia/artBio_syllabus.pdf')}>60-358</a>, "Art and Biology". 
    This class was focused on the intersection between the two areas of study, and for this project, I wanted to make an interactive 
    piece that demonstrated the "Lock and Key Theory" in biology.</p>
    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/mixedMedia/theKeyToUs/1.jpg')} data-skip-gallery/>
        </div>
    </div>

    <p>Enzymes have active sites where substrates bind and elicit the release of products. The "Lock and Key Theory" states that substrates have specific 
    binding structures that perfectly fit to the active site of the enzyme for which they are searching. To represent this searching process for the 
    “perfect fit,” I wanted the viewer to attempt to find the perfect matches for the keys displayed on the given key ring. The four boxes (labeled A,B,C,D) represent 
    four enzymes that break down sugar (fructose): Hexokinase takes in the sugar, Aldolase cuts it in two, and Cytochrome Complex and ATP Synthase 
    begin the process of creating energy from the breaking down of sugar. The locks and keys represent the "Lock and Key Theory", while the boxes and their 
    contents represent some key enzymes in cellular respiration.</p>

    <div className="imgs max700">
        <div>
            <img src={require('../assets/mixedMedia/theKeyToUs/2.jpg')} data-skip-gallery/>
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