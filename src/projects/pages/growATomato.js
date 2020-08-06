import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Grow a Tomato" Children's Book</h1>

    <p>The below sample pages are from a children's book to teach young readers about gardening, and the process 
    of a tomato plant growing from seed to harvest. The main character was a rabbit to help make the story even more 
    enticing for young readers. See character and layout sketches at the bottom of this page.</p>
    
    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/bunny/2.jpg')} />
            <p>Plant your seeds.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/bunny/4.jpg')} />
            <p>Give them sunlight.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/bunny/6_fixed.jpg')} />
            <p>Watch them grow.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/bunny/8.jpg')} />
            <p>Enjoy them with friends!</p>
        </div>
    </div>

    <div className="imgs max300">
        <div>
            <img src={require('../assets/childrensIllos/bunny/sketch1.jpg')} />
        </div>
    </div>
    <div className="imgs max300">
        <div>
            <img src={require('../assets/childrensIllos/bunny/sketch2.jpg')} />
        </div>
        <div>
            <img src={require('../assets/childrensIllos/bunny/sketch3.jpg')} />
        </div>
    </div>




    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)