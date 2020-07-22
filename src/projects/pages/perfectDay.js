import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "A Perfect Day" Children's Book</h1>

    
    <div className="imgs max700">
        <div>
            <img src={require('../assets/childrensIllos/perfectDay/1.jpg')} />
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img src={require('../assets/childrensIllos/perfectDay/3.jpg')} />
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img src={require('../assets/childrensIllos/perfectDay/4.jpg')} />
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img src={require('../assets/childrensIllos/perfectDay/6.jpg')} />
        </div>
    </div>

    <div className="imgs max300">
        <div>
            <img src={require('../assets/childrensIllos/perfectDay/sketch1.jpg')} />
        </div>
        <div>
            <img src={require('../assets/childrensIllos/perfectDay/sketch2.jpg')} />
        </div>
        <div>
            <img src={require('../assets/childrensIllos/perfectDay/sketch3.jpg')} />
        </div>
    </div>
    <div className="imgs max300">
        <div>
            <img src={require('../assets/childrensIllos/perfectDay/sketch4.jpg')} />
        </div>
        <div>
            <img src={require('../assets/childrensIllos/perfectDay/sketch5.jpg')} />
        </div>
    </div>



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)