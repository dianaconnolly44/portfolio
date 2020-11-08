import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Giftober 2020: "Pinecone" </h1>

    <div className="imgs max600">
      <div>
        <img src={require('../assets/inktoberGIFs/inktoberPinecone.gif')} />
      </div>
    </div>

<p>I created this GIF loop animation as part of my participation in the annual "Inktober" challenge. In this challenge, artists are supplied with daily prompts off of which to create art based. Given that there are many prompt lists released each year, for my participation in Inktober 2020, I chose to follow the "Creepy Cute October" prompt list created by artist <a href="https://www.instagram.com/hello.shannon/" target="_blank">Shannon Snow</a>. I also decided to use this opportunity to practice and grow my animation skills by making dailiy GIF loops, thus I called it "Giftober".</p>

<p>The prompt for this specific GIF was "Pinecone", and I gave it the caption "Geronimo!". My original post can be viewed <a href="https://www.instagram.com/p/CGA4wjgn21o/" target="_blank">here</a>.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)