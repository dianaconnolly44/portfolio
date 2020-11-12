import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "My Condition & Me" Children's Book</h1>

    <p>The below sample pages are from a children's book I made to explain a 
    certain health condition to preschool age readers, and to help them feel more comfortable with  
    the clinical trial in which they are participating.</p>

    <Slide easing="ease" className="slides max300">
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/gaucher/1.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/gaucher/2.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/gaucher/3.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/gaucher/6_v2.jpg')})` }} />
        </div>
    </Slide>

    <div className="imgs max700">
        <div>
            <img 
                src={require('../assets/childrensIllos/gaucher/1.jpg')} 
                onClick={props.open} 
            />
        </div>
        <div>
            <img 
                src={require('../assets/childrensIllos/gaucher/2.jpg')} 
                onClick={props.open} 
            />
        </div>
    </div>

    <div className="imgs max700 no-gap">
        <div>
            <img 
                src={require('../assets/childrensIllos/gaucher/3.jpg')} 
                onClick={props.open} 
            />
        </div>
        <div>
            <img 
                src={require('../assets/childrensIllos/gaucher/6_v2.jpg')} 
                onClick={props.open} 
            />
        </div>
    </div>

<h3>Process:</h3>

    <div className="imgs max200 centered">
        <div>
            <img 
                src={require('../assets/childrensIllos/gaucher/sketch1.jpg')} 
                onClick={props.open} 
            />
            <p>Character design</p>
        </div>
        <div>
            <img 
                src={require('../assets/childrensIllos/gaucher/sketch2.jpg')} 
                onClick={props.open} 
            />
            <p>Robot and character design</p>
        </div>
        <div>
            <img 
                src={require('../assets/childrensIllos/gaucher/sketch3.jpg')} 
                onClick={props.open} 
            />
            <p>Page sketch</p>
        </div>
    </div>




    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)