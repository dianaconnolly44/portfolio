import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Hotspot Pop-Up Illustrations</h1>
    <br />
    <p>The below images are a collection of "hotspot pop-ups" I made to accompany digital comic books that teach 
    readers about various health conditions. The images would pop up when a reader hovered over hotspots signified 
    in the digital comic books, and a pop up would appear with fun facts about the topic at hand.</p>

    <div className="imgs max300">
            <div>
                <img src={require('../assets/hotspots/hotspotExample.png')} />
            </div>
    </div>

    <p>Above is an example of what one pop-up would say, relating to information in an 
    educational book on Crohn's Disease, a health condition that causes inflammation of your digestive tract.</p>


    <div className="imgs max500">
            <div>
                <img src={require('../assets/hotspots/CFTRchannel.png')} />
            </div>
            <div>
                <img src={require('../assets/hotspots/CF.png')} />
            </div>
            <div>
                <img src={require('../assets/hotspots/crohns2.png')} />
            </div>
            <div>
                <img src={require('../assets/hotspots/crohns3.png')} />
            </div>
    </div>
    
    <div className="imgs max500">
            <div>
                <img src={require('../assets/hotspots/crohns4.png')} />
            </div>
            <div>
                            <img src={require('../assets/hotspots/ppl.png')} />

            </div>
            <div>
                <img src={require('../assets/hotspots/hobbies.png')} />
            </div>
            <div>
                            <img src={require('../assets/hotspots/crohns.png')} />
            </div>
    </div>
    
    <div className="imgs max500">
            <div>
                <img src={require('../assets/hotspots/hemophilia.png')} />
            </div>
            <div>
                <img src={require('../assets/hotspots/medStaff1.png')} />
            </div>
            <div>
                <img src={require('../assets/hotspots/medStaff2.png')} />
            </div>
            <div>
                <img src={require('../assets/hotspots/nutrients.png')} />
            </div>
            
    </div>
    
    <div className="imgs max500">
            <div>
                <img src={require('../assets/hotspots/autoimmune.png')} />
            </div>
            <div>
                <img src={require('../assets/hotspots/bloodPressure.png')} />
            </div>
            <div>
                <img src={require('../assets/hotspots/calcium.png')} />
            </div>
            <div>
                <img src={require('../assets/hotspots/languages.png')} />
            </div>
    </div>
    



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)