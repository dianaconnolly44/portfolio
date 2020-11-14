import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "A Perfect Day" Children's Book</h1>

    <p>The below sample pages are from a book I created for my undergraduate Color Studio class. I aimed to 
    create a book with simple shapes and vibrant colors that both created a happy feeling in the viewer. See the sketches 
    at the bottom of this page to see the character design of Zoey, and the color and shape decisions for a happy 
    theme.</p>
    
    <div className="imgs max700">
        <div>
            <img 
                    src={require('../assets/childrensIllos/perfectDay/1.jpg')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/perfectDay/3.jpg')} 
                    onClick={props.open} 
                />
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img 
                    src={require('../assets/childrensIllos/perfectDay/4.jpg')} 
                    onClick={props.open} 
                />
        </div>
        <div> 
            <img 
                    src={require('../assets/childrensIllos/perfectDay/6.jpg')} 
                    onClick={props.open} 
                />
        </div>
    </div>

    <h3>Process:</h3>
    
    <div className="imgs max200">
        <div>
            <img 
                    src={require('../assets/childrensIllos/perfectDay/sketch4.jpg')} 
                    onClick={props.open} 
                />
            <p>Version 1</p>
        </div>
        <div>
            <img 
                src={require('../assets/arrow-01.jpg')} 
                data-skip-gallery
            />
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/perfectDay/sketch5.jpg')} 
                    onClick={props.open} 
                />
            <p>Version 2 - warmer colors, simpler shapes</p>
        </div>
    </div>

    <div className="imgs max200 centered">
        <div>
            <img 
                    src={require('../assets/childrensIllos/perfectDay/sketch1.jpg')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/perfectDay/sketch2.jpg')} 
                    onClick={props.open} 
                />
            <p>Zoey character - designed to be star of book</p>
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/perfectDay/sketch3.jpg')} 
                    onClick={props.open} 
                />
        </div>
    </div>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)