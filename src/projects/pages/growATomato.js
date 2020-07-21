import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Grow a Tomato" Children's Book</h1>

    
    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/bunny/2.png')} />
            <p>Plant your seeds.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/bunny/4.png')} />
            <p>Give them sunlight.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/bunny/6_fixed.png')} />
            <p>Watch them grow.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/bunny/8.png')} />
            <p>Enjoy them with friends!</p>
        </div>
    </div>

    <div className="imgs max300">
        <div>
            <img src={require('../assets/childrensIllos/bunny/sketch1.png')} />
        </div>
    </div>
    <div className="imgs max300">
        <div>
            <img src={require('../assets/childrensIllos/bunny/sketch2.png')} />
        </div>
        <div>
            <img src={require('../assets/childrensIllos/bunny/sketch3.png')} />
        </div>
    </div>




    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)