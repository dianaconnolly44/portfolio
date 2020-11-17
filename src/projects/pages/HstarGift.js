import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1>"365 Reasons I Love You"</h1>

    <div className="imgs max600">
        <div>
            <img 
                src={require('../assets/HstarGift/final1.jpg')} 
                data-skip-gallery
            />
        </div>
    </div>

        <p>For my first year anniversary with my partner, I wanted to make something personalized and homemade. I decided to create a gift that would have a little message for my partner to open and read every day for the following year, with each message listing a different thing I love about him. I considered writing these messages on little scrolls or strips of paper, but decided it would be the most fun and pretty to have the messages inside origami stars instead. See below my process and demonstration of the 365 origami star messages I made.</p>


    <h3>Process & Demo</h3>

    <div className="imgs max400">
        <div>
            <img 
                src={require('../assets/HstarGift/process.jpg')} 
                data-skip-gallery
            />
            <p>Long strips of colorful paper to write on, fold, and shape</p> 
        </div>
        <div>
            <img 
                src={require('../assets/HstarGift/demo.jpg')} 
                data-skip-gallery
            />
            <p>Example message written inside a star</p>
        </div>
    </div>

    <h3>Final Result</h3>

    <div className="imgs max400 centered">
        <div>
            <img 
                src={require('../assets/HstarGift/final2.jpg')} 
                data-skip-gallery
            />
        </div>
        <div>
            <img 
                src={require('../assets/HstarGift/final3.jpg')} 
                data-skip-gallery
            />
        </div>
        <div>
            <img 
                src={require('../assets/HstarGift/final1.jpg')} 
                data-skip-gallery
            />
        </div>
    </div>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)