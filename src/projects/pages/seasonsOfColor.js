import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Seasons of Color" Children's Book</h1>

    <p>The below sample pages are from a collaborative children's book in which I and three other artists each 
    illustrated a page to depict the wonderful color tied with each of the four seasons. I illustrated the 
    page for fall, highlighting the orange colors of that season. I illustrated the Asian-American main character 
    based on the first artist's character in the white winter page.</p>
    
    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/seasonsOfColor/fallOrange.jpg')} />
            <p>Fall is an orange season. The trees are orange. There are pumpkins, and leaves changing color.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/seasonsOfColor/winterWhite.jpg')} />
            <p>Winter is a white season. The snow is white. The sky is white. And my fur boots are, too!</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/seasonsOfColor/springGreen.jpg')} />
            <p>Spring is a green season. The trees grow green leaves. All of the parks look green.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/seasonsOfColor/summerBlue.jpg')} />
            <p>Summer is a blue season. The water is blue. The sky is too. The city looks blue in summer.</p>
        </div>
    </div>


    <div className="imgs max400">
        <div>
            <img src={require('../assets/childrensIllos/seasonsOfColor/characterDesign-01.jpg')} />
        </div>
    </div>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)