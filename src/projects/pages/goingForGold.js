import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Going for Gold" Children's Book</h1>

    <p>The below sample pages are from a children's book on the concept of competition and a running race. The 
    main character perseveres and wins the race! During my time as graphic artist intern at Tobii Dynavox, 
    one of my earliest assignments was to do the coloring for the below book, given the black and white outlines.</p>
    
    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/goingForGold/1.png')} />
            <p>Do you have what it takes to win the race?</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/goingForGold/3.png')} />
            <p>Coach will show you the way.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/goingForGold/4.png')} />
            <p>Eat healthy, too.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/goingForGold/6.png')} />
            <p>Get a lot of rest.</p>
        </div>
    </div>


    <div className="imgs max300">
        <div>
            <img src={require('../assets/childrensIllos/goingForGold/b&w.jpg')} />
            <p>Black & white outlines</p>
        </div>
        <div>
            <img src={require('../assets/childrensIllos/goingForGold/color.jpg')} />
            <p>Colors selected and applied</p>
        </div>
    </div>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)