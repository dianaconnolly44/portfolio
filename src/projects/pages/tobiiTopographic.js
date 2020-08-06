import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Topographic Symbols </h1>
    <br />

    <h2> Introduction & Product:</h2>
    <p>From 2016-2017, I worked as Graphic Artist Intern for <a href="https://www.tobiidynavox.com/en-US/?MarketPopupClicked=true" target="_blank">Tobii Dynavox</a>. Tobii Dynavox is a U.S.-based developer, manufacturer, and distributor of <a href="https://www.tobiidynavox.com/en-US/learn/what-is-aac/?redirect=true" target="_blank">Augmentative and Alternative Communication (AAC)</a> devices and software for nonverbal or limited speech individuals.</p>
    <div className="imgs max300">
            <div>
                <img src={require('../assets/tobiiDemo_2.jpg')} />
                <p>Example AAC product</p>
            </div>
        </div>
    <p>During my time as Graphic Artist Intern, one task I worked on was adding to the library of communication symbols made for AAC devices. These symbols are accessed by users on their devices through means of touch screen or eye-tracking recognition. Once a symbol is selected, the device speaks the word or phrase for the user, thus enabling the user to participate in verbal communication even if they do not personally have the ability to do so (e.g. individuals with ALS or non-verbal ASD).</p>

    <br />

    <h2> Project:</h2>
    <p>For this project, I added to the collection of topographical icons, which familiarize users with different terrains around the world. A selection of examples are shown below, including those I illustrated for the South African and Mexican collections.</p>
    <p> South Africa symbols:</p>
    <div className="imgs max700">
            <div>
                <img src={require('../assets/tobiiIcons/maps/topographicGrid-02.jpg')} />
            </div>
        </div>


    <p> Mexico symbols:</p>
    <div className="imgs max900">
            <div>
                <img src={require('../assets/tobiiIcons/maps/topographicGrid-01.jpg')} />
            </div>
        </div>

<br/>
<br/>
<br/>
<br/>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)