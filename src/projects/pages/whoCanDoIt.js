import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Who Can Do It?" Children's Book</h1>

    <p>The below sample pages are from a collaborative children's book made on the topic of sustainability and 
    energy conservation. I illustrated these pages, in keeping with the previous artist's illustration style, and 
    focused on characters doing certain activities to save energy in their home, with the theme of "everyone can 
    do it."</p>

    <div className="imgs max600">
        <div>
            <img 
                    src={require('../assets/childrensIllos/whoCanDoIt/5.jpg')} 
                    onClick={props.open} 
                />
            <p>"She takes a quick shower to save water."</p>
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/whoCanDoIt/6.jpg')} 
                    onClick={props.open} 
                />
            <p>"Who can do it? He can!"</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img 
                    src={require('../assets/childrensIllos/whoCanDoIt/8.jpg')} 
                    onClick={props.open} 
                />
            <p>"Conserving energy is good to do. Who can do it?"</p>
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/whoCanDoIt/9.jpg')} 
                    onClick={props.open} 
                />
            <p>"I can. You can. We all can conserve energy."</p>
        </div>
    </div>





    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)