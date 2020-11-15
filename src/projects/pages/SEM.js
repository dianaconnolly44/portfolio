import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Invisible Beauty </h1>

    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/mixedMedia/SEM/blueSeed.jpg')} data-skip-gallery/>
        </div>
    </div>

    <p>I created this piece during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/mixedMedia/artBio_syllabus.pdf')}>60-358</a>, "Art and Biology". 
    This class was focused on the intersection between the two areas of study, and for one of the class projects, we were 
    granted access to the Mellon College of Science's <a href="https://www.cmu.edu/engineering/materials/facilities/roberts_suite/electron_microscopy_facilities/microscope/fei-quanta_600-feg-sem.html" target="_blank">Scanning Electron Microscope</a> (SEM). 
    The class first visited <a href="https://www.phipps.conservatory.org/" target="_blank">Phipps Botanical Garden</a>'s green houses and back storage rooms, to collect varying microscopic botanical samples. Then, we 
    took these samples to the SEM machine and collected varying scale microscopic imaging, some examples of which can be seen below.</p>

    

    

    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/SEM/sample1.jpg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/mixedMedia/SEM/sample2.jpg')} data-skip-gallery/>
        </div>
        <div>
            <img src={require('../assets/mixedMedia/SEM/sample3.jpg')} data-skip-gallery/>
        </div>
    </div>

    <p>Once we had collected these SEM images, we had free reign to build an art piece out of the collected images. To me, the most 
    profound element of these images was the fact that a botanical sample still can look like nature at such a microscopic level. This 
    influenced my final art piece, as my sample of fern mimicked ocean waves. I colorized and composed the final image to correspond with 
    such a finding.</p>

    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/SEM/blueWave.jpg')} data-skip-gallery/>
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