import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "T1D & Gwen" Book Concept</h1>

    <p>The below cover illustration is of a book concept for teen audiences, depicting an autobiographical 
    perspective of Gwen, a high school girl living with Type 1 Diabetes. The cover illustrates her standing 
    confidently in front of her school, adorned by her insulin pump on her waist for the world to see.</p>
    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/t1dGwen.png')} />
        </div>
    </div>

   





    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)