import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Verde Magazine Illustrations </h1>

    <p> During my junior and senior years in high school, I was Art Director of Palo Alto High School's Verde Magazine. I illustrated the external
    covers and the internal graphics to pair with news articles. The below illustrations
    are a selection of works I made, to supplement the text of news articles. </p>

    <div className="imgs max300">
        <div>
            <img 
                    src={require('../assets/verde/internal/boyBands.jpg')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/verde/internal/boyBands2.jpg')} 
                    onClick={props.open} 
                />
        </div>
    </div>
    
    <div className="imgs max300">
        <div>
            <img 
                    src={require('../assets/verde/internal/hospital.jpg')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/verde/internal/kpop.jpg')} 
                    onClick={props.open} 
                />
        </div>
    </div>
    
    <div className="imgs max300">
        <div>
            <img 
                    src={require('../assets/verde/internal/onlineEd.jpg')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/verde/internal/onlineShopping.jpg')} 
                    onClick={props.open} 
                />
        </div>
    </div>

    <div className="imgs max300">
        <div>
            <img 
                    src={require('../assets/verde/internal/sick.jpg')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/verde/internal/conservatism2.jpg')} 
                    onClick={props.open} 
                />
        </div>
    </div>
    
    <div className="imgs max300">
        <div>
            <img 
                    src={require('../assets/verde/internal/linux.jpg')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/verde/internal/memes.jpg')} 
                    onClick={props.open} 
                />
        </div>
    </div>

    <div className="imgs max300">
        <div>
            <img 
                    src={require('../assets/verde/internal/xfactor.jpg')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/verde/internal/chickFlicks.jpg')} 
                    onClick={props.open} 
                />
        </div>
    </div>



    


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)





//    <div className="imgs max300">
//        <div>
//            <img 
//                    src={require('../assets/verde/internal/fbDiary.jpg')} 
//                    onClick={props.open} 
//                />
//        </div>
//        <div>
//            <img 
//                    src={require('../assets/verde/internal/femaleDraft.jpg')} 
//                    onClick={props.open} 
//                />
//        </div>
//    </div>