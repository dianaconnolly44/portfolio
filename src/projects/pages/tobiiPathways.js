import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Pathways" Instructional Book</h1>

    <p>The below pages are a selection of my contributions to a collaborative book in which I and other artists 
    created instructional pages to explain a <a href="https://www.tobiidynavox.com/en-US/learn/pathways/?redirect=true" target="_blank">new 
    product</a> to users of <a href="https://www.tobiidynavox.com/en-US/learn/what-is-aac/?redirect=true" target="_blank">Augmentative and Alternative Communication (AAC)</a> devices. 
    To maintain a consistent character design, we created the character design templates seen at the bottom 
    of this page.</p>

    

    <div className="imgs max600">
        <div>
            <img 
                src={require('../assets/childrensIllos/pathways/3.jpg')} 
                onClick={props.open} 
            />
        </div>
        <div>
            <img 
                src={require('../assets/childrensIllos/pathways/1.jpg')} 
                onClick={props.open} 
            />
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img 
                src={require('../assets/childrensIllos/pathways/2.jpg')} 
                onClick={props.open} 
            />
        </div>
        <div>
            <img 
                src={require('../assets/childrensIllos/pathways/4.jpg')} 
                onClick={props.open} 
            />
        </div>
    </div>
   
    <h3>Process:</h3>


    <div className="imgs max300">
        <div>
            <img 
                src={require('../assets/childrensIllos/pathways/sketch1.jpg')} 
                onClick={props.open} 
            />
            <p>Character design</p>
        </div>
    </div>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)


//<div>
//            <img src={require('../assets/childrensIllos/pathways/sketch2.jpg')} />
//        </div>
//        <div>
//            <img src={require('../assets/childrensIllos/pathways/sketch3.jpg')} />
//        </div>