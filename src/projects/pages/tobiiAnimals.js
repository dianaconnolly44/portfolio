import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Animal Symbols </h1>

    <h2> Introduction & Product:</h2>
    <p>From 2016-2017, I worked as Graphic Artist Intern for <a href="https://www.tobiidynavox.com/en-US/?MarketPopupClicked=true" target="_blank">Tobii Dynavox</a>. Tobii Dynavox is a U.S.-based developer, manufacturer, and distributor of <a href="https://www.tobiidynavox.com/en-US/learn/what-is-aac/?redirect=true" target="_blank">Augmentative and Alternative Communication (AAC)</a> devices and software for nonverbal or limited speech individuals.</p>
    <p>During my time as Graphic Artist Intern, one task I worked on was adding to the library of communication symbols made for AAC devices. These symbols are accessed by users on their devices through means of touch screen or eye-tracking recognition. Once a symbol is selected, the device speaks the word or phrase for the user, thus enabling the user to participate in verbal communication even if they do not personally have the ability to do so (e.g. individuals with ALS or non-verbal ASD).</p>
    <div className="imgs max500">
            <div>
                <img src={require('../assets/tobiiDemo_1.jpg')} />
                <p>"Classic" symbols on a device</p>
            </div>
            <div>
                <img src={require('../assets/tobiiDemo_2.jpg')} />
                <p>"Thinline" symbols on a device</p>
            </div>
        </div>
    <p>The symbols we created in the Graphic Arts department fell into two categories: classic or thinline, seen above. “Classic” symbols use the original style/brand of Picture Communication Symbols, involving a certain range of colors, a certain thickness of outline, and the iconic egg-shaped heads on human characters. “Thinline” symbols have a newer style, involving thinner outlines (with specified thicknesses for lines on the outside verse inside of an object’s shape), as well as a broader and more realistic illustration style (notably the lack of the egg-shape for human heads and the addition of more details).</p>

    <h2> Project:</h2>
    <p>For this project, I added to the collection of animal-themed thinline icons. These were added to the library of icons used in general discussion topics. See a selection of my animal-themed thinlines below.</p>
    <div className="imgs max700">
        <div>
            <img src={require('../assets/tobiiIcons/animals/animalsGrid-01.jpg')} />
        </div>
    </div>

<br/>
<br/>
<br/>
<br/>




    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)