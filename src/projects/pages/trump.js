import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "The White House" Children's Book</h1>

    <p>The below sample pages are from a children's book I made to line up with the 2016 Presidential Inaugruation, 
    to help young readers understand the inner workings of the White House. Since I was not sure 
    who would become the next president, I illustrated both Clinton and Trump in the scenes, which can be 
    seen at the bottom of this page.</p>


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