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
            <img 
                    src={require('../assets/childrensIllos/t1d/t1dGwen.png')} 
                    onClick={props.open} 
                />
        </div>
    </div>

   <h3>Process:</h3>

    <div className="imgs max200">
        <div>
            <img 
                    src={require('../assets/childrensIllos/t1d/characterDesign1.png')} 
                    onClick={props.open} 
                />
            <p>Character designing</p>
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/t1d/characterDesign2.png')} 
                    onClick={props.open} 
                />
            <p>Body language</p>
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/t1d/workboard.png')} 
                    onClick={props.open} 
                />
            <p>My workboard</p>
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/t1d/coverPlanning.png')} 
                    onClick={props.open} 
                />
            <p>Layout planning</p>
        </div>
    </div>





    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)