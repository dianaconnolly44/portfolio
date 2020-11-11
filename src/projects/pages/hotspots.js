import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Hotspot Pop-Up Illustrations</h1>
    <br />
    <p>The below images are a collection of "hotspot pop-ups" I made to accompany digital comic books that teach 
    readers about various health conditions. The images would pop up when a reader hovered over hotspots signified 
    in the digital comic books, and a pop up would appear with fun facts about the topic at hand.</p>

    <div className="imgs max300">
            <div>
                <img 
                src={require('../assets/hotspots/hotspotExample.jpg')} 
                data-skip-gallery
                 />
            </div>
    </div>

    <p>Above is an example of what one pop-up would say, relating to information in an 
    educational book on Crohn's Disease, a health condition that causes inflammation of your digestive tract.</p>


    <div className="imgs max500">
            <div>
                <img 
                    src={require('../assets/hotspots/CFTRchannel.jpg')} 
                    onClick={props.open} 
                />
            </div>
            <div>
                <img 
                    src={require('../assets/hotspots/CF.jpg')} 
                    onClick={props.open} 
                />
            </div>
            <div>
                <img 
                    src={require('../assets/hotspots/crohns2.jpg')} 
                    onClick={props.open} 
                />
            </div>
            <div>
                <img 
                    src={require('../assets/hotspots/crohns3.jpg')} 
                    onClick={props.open} 
                />
            </div>
    </div>

    <div className="imgs max500">
            <div>
                <img 
                    src={require('../assets/hotspots/crohns4.jpg')} 
                    onClick={props.open} 
                />
            </div>
            <div>
                <img 
                    src={require('../assets/hotspots/ppl.jpg')} 
                    onClick={props.open} 
                />
            </div>
            <div>
                <img 
                    src={require('../assets/hotspots/hobbies.jpg')} 
                    onClick={props.open} 
                />
            </div>
            <div>
                <img 
                    src={require('../assets/hotspots/crohns.jpg')} 
                    onClick={props.open} 
                />
            </div>
    </div>

    <div className="imgs max500">
            <div>
                <img 
                    src={require('../assets/hotspots/hemophilia.jpg')} 
                    onClick={props.open} 
                />
            </div>
            <div>
                <img 
                    src={require('../assets/hotspots/medStaff1.jpg')} 
                    onClick={props.open} 
                />
            </div>
            <div>
                <img 
                    src={require('../assets/hotspots/medStaff2.jpg')} 
                    onClick={props.open} 
                />
            </div>
            <div>
                <img 
                    src={require('../assets/hotspots/nutrients.jpg')} 
                    onClick={props.open} 
                />
            </div>
    </div>
    
<br/>
<br/>
    



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)




//    <div className="imgs max500">
//            <div>
//                <img src={require('../assets/hotspots/autoimmune.jpg')} />
//            </div>
//            <div>
//                <img src={require('../assets/hotspots/bloodPressure.jpg')} />
//            </div>
//            <div>
//                <img src={require('../assets/hotspots/calcium.jpg')} />
//            </div>
//            <div>
//                <img src={require('../assets/hotspots/languages.jpg')} />
//            </div>
 //   </div>