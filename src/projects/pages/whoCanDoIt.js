import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Who Can Do It?" Children's Book</h1>


    <div className="imgs max700">
        <div>
            <img src={require('../gallery/childrensIllos/whoCanDoIt/5.png')} />
            <p>She takes a quick shower to save water.</p>
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img src={require('../gallery/childrensIllos/whoCanDoIt/6.png')} />
            <p>Who can do it? He can!</p>
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img src={require('../gallery/childrensIllos/whoCanDoIt/8.png')} />
            <p>Conserving energy is good to do. Who can do it?</p>
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img src={require('../gallery/childrensIllos/whoCanDoIt/9.png')} />
            <p>I can. You can. We all can conserve energy.</p>
        </div>
    </div>





    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)