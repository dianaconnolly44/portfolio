import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Dream Box </h1>

    <div className="video">
        <iframe 
            src="https://www.youtube.com/embed/VJThmxZ0_r0" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
        />
    </div>

    <p>I created this interactive piece during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/mixedMedia/maurides_Courses.pdf')}>60-232</a>, "Art and the Brain". 
    This class was focused on the intersection between art and neuroscience, and for one of the class projects, we were assigned to 
    create a piece about the topic of dreams.</p>

    <p>My installation was based off of the concept of the elusiveness of dreams. When you wake up in the morning, you often cannot 
    recall much of what happened in the dream, besides perhaps some faint feelings and maybe an odd visual. These experiences are 
    demonstrated in my piece by having the installation of changing-pattern lights behind a blurred filter represent the faint feelings 
    one remembers upon waking up, as well as the partially blown up laboratory gloves representing the strange visceral imagery that 
    might stick around upon awakening.</p>

    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/dreamBox.jpg')} />
        </div>
    </div>

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