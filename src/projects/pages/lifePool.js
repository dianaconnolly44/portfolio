import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Life Pool </h1>

    <p>I created this interactive piece during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/mixedMedia/artBio_syllabus.pdf')}>60-358</a>, "Art and Biology". 
    This class was focused on the intersection between the two areas of study, and for one of the class projects, we observed and 
    documented chicken embryos. The class was granted access to the Mellon College of 
    Science's <a href="https://www.cmu.edu/engineering/materials/facilities/roberts_suite/electron_microscopy_facilities/microscope/fei-quanta_600-feg-sem.html" target="_blank">Scanning Electron Microscope</a> (SEM), 
    with which we acquired video probe microscope images, seen below.</p>
   

    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/lifePool/microscope1.jpg')} />
        </div>
        <div>
            <img src={require('../assets/mixedMedia/lifePool/microscope2.jpg')} />
        </div>
        <div>
            <img src={require('../assets/mixedMedia/lifePool/microscope3.jpg')} />
        </div>
    </div>

    <p>For the respective class assignment, I wanted to reflect on this experience. While collecting the video probe imagery, 
    I felt a sense of guilt and sadness over the chicken embryos we were breaking into and potentially destroying, all for our own 
    human interest. This reminded me of how humankind disregards and uses animals for our own gain in rituals such as science experimentation. 
    This thought is the focus of my piece "Life Pool," in which rubber ducks are suspended in water in transparent balls to 
    symbolize the young and peaceful ducklings awaiting birth in their eggs. However, these "eggs" are being used by us humans for 
    entertainment in a game of pool, as the balls rest in a billiards rack. The more that the rack is moved around, the more 
    the ducks' liquid spills out and the "eggs" become destroyed.</p>
    
    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/lifePool/1.jpg')} />
        </div>
    </div>

    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/lifePool/2.jpg')} />
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