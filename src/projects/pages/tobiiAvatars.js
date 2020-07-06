import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Avatars </h1>

    <h2> Introduction & Product:</h2>
    <p><a href="https://www.tobiidynavox.com/en-US/?MarketPopupClicked=true" target="_blank">Tobii Dynavox</a> is a U.S.-based developer, manufacturer, and distributor of <a href="https://www.tobiidynavox.com/en-US/learn/what-is-aac/?redirect=true" target="_blank">Augmentative and Alternative Communication (AAC) devices</a> for nonverbal or limited speech individuals.</p>
    <p>During my time as Graphic Artist Intern, one task I worked on was adding to the library of communication symbols made for AAC devices. These symbols are accessed by users on their devices through means of touch screen or eye-tracking recognition. Once a symbol is selected, the device speaks the word or phrase for the user, thus enabling the user to participate in verbal communication even if they do not personally have the ability to do so (e.g. individuals with ALS or non-verbal ASD).</p>
    
    <h2> Project:</h2>
    <p>For this project, I added to the company’s collection of avatars, following the Graphic Arts department’s pre-existing style. These avatars are implemented by AAC device users to represent specific people, such as their speech therapists and teachers. Thus, I was supplied with photos of certain individuals to create avatars. See a selection of my works below.</p>
    <img src={require('../gallery/tobiiIcons/avatars/avatarAmy.png')} />
    <img src={require('../gallery/tobiiIcons/avatars/avatarLauren.png')} />
    <img src={require('../gallery/tobiiIcons/avatars/avatarPam.png')} />
    <img src={require('../gallery/tobiiIcons/avatars/avatarVictoria.png')} />




    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)