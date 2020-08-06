import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Kingdom of Plenty" Children's Book Concept</h1>

    <p>The below illustration is of a children's book concept of a young prince and his "kingdom of 
    plenty," in which he wanders outside of his castle and discovers the wonders of the lush nature in his kingdom.</p>
    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/childrensIllos/kingdomOfPlenty/KOP.jpg')} />
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img src={require('../assets/childrensIllos/kingdomOfPlenty/sketch.jpg')} />
            <p>Sketch</p>
        </div>
    </div>

   





    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)