import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Pathways" Instructional Book</h1>

    <p>The below pages are a selection of my contributions to a collaborative book in which I and other artists 
    created instructional pages to explain a new product to <a href="https://www.tobiidynavox.com/en-US/learn/what-is-aac/?redirect=true" target="_blank">Augmentative and Alternative Communication (AAC)</a> device 
    users. To maintain a consistent character design, we created the character design templates seen at the bottom 
    of this page.</p>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/pathways/1.jpg')} />
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/pathways/2.jpg')} />
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/pathways/3.jpg')} />
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/pathways/4.jpg')} />
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/pathways/sketch1.jpg')} />
        </div>
        <div>
            <img src={require('../assets/childrensIllos/pathways/sketch2.jpg')} />
        </div>
        <div>
            <img src={require('../assets/childrensIllos/pathways/sketch3.jpg')} />
        </div>
    </div>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)