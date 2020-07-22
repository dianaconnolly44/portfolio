import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Seasons of Color" Children's Book</h1>

    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/childrensIllos/seasonsOfColor/fallOrange.jpg')} />
            <p>Fall is an orange season. The trees are orange. There are pumpkins, and leaves changing color.</p>
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img src={require('../assets/childrensIllos/seasonsOfColor/winterWhite.jpg')} />
            <p>Winter is a white season. The snow is white. The sky is white. And my fur boots are, too!</p>
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img src={require('../assets/childrensIllos/seasonsOfColor/springGreen.jpg')} />
            <p>Spring is a green season. The trees grow green leaves. All of the parks look green.</p>
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img src={require('../assets/childrensIllos/seasonsOfColor/summerBlue.jpg')} />
            <p>Summer is a blue season. The water is blue. The sky is too. The city looks blue in summer.</p>
        </div>
    </div>





    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)