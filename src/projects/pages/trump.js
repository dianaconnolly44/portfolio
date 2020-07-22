import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "The White House" Children's Book</h1>

    
    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/trump/trump3.jpg')} />
            <p>This is where the president gives speeches.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/trump/trump4.jpg')} />
            <p>This room is called the Oval Office. Can you guess why?</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/trump/trump6.jpg')} />
            <p>This room is called the Blue Room. Can you guess why?</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/trump/trump7.jpg')} />
            <p>This room has a stage.</p>
        </div>
    </div>

    <div className="imgs max300">
        <div>
            <img src={require('../assets/childrensIllos/trump/hillary2.jpg')} />
        </div>
        <div>
            <img src={require('../assets/childrensIllos/trump/trump3.jpg')} />
        </div>
    </div>
    <div className="imgs max300">
        <div>
            <img src={require('../assets/childrensIllos/trump/hillary.jpg')} />
        </div>
        <div>
            <img src={require('../assets/childrensIllos/trump/trump1.jpg')} />
        </div>
    </div>

    
    



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)