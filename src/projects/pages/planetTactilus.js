import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Planet Tactilus" Interactive Installation </h1>

    <p>I created this interactive installation piece during my art studies at Carnegie 
    Mellon University as my final project in the course 60-491, "Advanced 
    Contextual Practice: Space Art". The class was taught by <a href="https://en.wikipedia.org/wiki/Lowry_Burgess" target="_blank">Lowry Burgess</a>, a scientific-arts trailblazer who 
    created the first art payload taken into outer space, carried aboard NASA's Space Shuttle Discovery in 1989. He has since 
    continued exploring art and science, specifically in the scope of space, and helped to grow this 
    interdisciplinary spirit at Carnegie Mellon. During the course, we explored concepts of 
    outer space as it relates to the human being. For my final exploration in this topic, my final project aimed to 
    simulate what sensorial experiences might be like for beings on another planet.</p>
    
    <div className="video">
      <iframe 
        src="https://www.youtube.com/embed/6wR9lwEMavc"
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
      />
    </div>

    <p>Like one might experience with Synesthesia, the beings on "Planet Tactilus" 
    experience sound through the stimulation of touch (thus named "Planet Tactilus" for the "tactile" orientation of that world). I 
    recruited the help of friends in the <a href="https://www.ece.cmu.edu/" target="_blank">Electrical and Computer Engineering</a> school at Carnegie Mellon to teach me how to use 
    an <a href="https://en.wikipedia.org/wiki/Arduino" target="_blank">Arduino</a> to 
    relay the inputs and outputs of human touch and audio pitches. The ultimate result was 
    a setup of various metal objects laid on a table before a user, which produce varying pitches when touched. I built a headpiece 
    to be worn by the user both to help them feel immersed (and to look "alien"), as well as to transmit the audio through the 
    temple bones in the user's skull to mimic the way in which audio might be transmitted on a "tactile planet".</p>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)








// worked with the rabbi to developed visual 
    //symbols to represent each of the prayers in the Shabbat in order to guide the members 
    //with ASD through the ceremony. These symbols will be presented to the members via a 
    //large banner on the temple’s stage as well as on personal bookmarks that correspond 
    //with the banner. The bookmarks will also have a sticker packet with the symbols printed 
    //as stickers, to be placed on each of the corresponding sections for the current prayer 
    //on the bookmarks. The visually and physically interactive elements of these materials 
    //will help to add more sensorial aspects to the Shabbat, further benefitting Temple Sinai’s members with ASD.