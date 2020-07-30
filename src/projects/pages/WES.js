import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> InDesign e-Guides </h1>

    
    <div className="imgs max500">
        <div>
            <img src={require('../assets/graphicDesign/WES/wes-01.jpg')} />
        </div>
    </div>

    <p><a href="https://www.wes.org/" target="_blank">World Education Services</a> (WES) is 
    a non-profit organization that helps international students 
    and professionals achieve their educational and career goals in the United States and Canada. 
    In my work as Graphic Design Consultant for WES, I have been producing InDesign 
    e-guides as part of 
    the <a href="https://www.wes.org/advisor-e-guides/" target="_blank">Career Pathways</a> book series, 
    which explains to international individuals the requisites for  
    career paths in certain regions. For this book making process, I receive Word documents 
    from copy writers and build out fully designed books in InDesign, keeping in 
    line with the company's brand guidelines and the style template for this series.</p>

    <p>Some of the e-guides I have created (listed for free on WES's site):</p>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/graphicDesign/WES/IT.png')} />
            <p>Visit <a href="https://knowledge.wes.org/globaltalentbridge-e-guide-career-pathways-in-information-technology.html" target="_blank">here</a> to download.</p>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/WES/alliedHealth.png')} />
            <p>Visit <a href="https://knowledge.wes.org/globaltalentbridge-e-guide-career-pathways-in-allied-health.html" target="_blank">here</a> to download.</p>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/WES/law.png')} />
            <p>Visit <a href="https://knowledge.wes.org/globaltalentbridge-e-guide-career-pathways-in-law.html" target="_blank">here</a> to download.</p>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/WES/dentistry.png')} />
            <p>Visit <a href="https://knowledge.wes.org/globaltalentbridge-e-guide-career-pathways-in-dentistry.html" target="_blank">here</a> to download.</p>
        </div>
        <div>
            <img src={require('../assets/graphicDesign/WES/pharmacy.png')} />
            <p>Visit <a href="https://knowledge.wes.org/globaltalentbridge-e-guide-career-pathways-in-pharmacy.html" target="_blank">here</a> to download.</p>
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