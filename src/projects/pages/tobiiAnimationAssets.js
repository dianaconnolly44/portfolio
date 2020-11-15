import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Asset Creation </h1>

    <p>While working as Graphic Artist Intern at Tobii Dynavox, I also helped to create the Illustrator vector graphic assets for our animator to use in her After Effects advertisement animations. This specific project involved building out assets for a <a href="https://goboardmaker.com/blogs/videos/boardmaker-online-1" target="_blank">demonstration video</a> that was advertising for Tobii Dynavox's Boardmaker Online product. Below are some of the assets I built for the video.</p>

    <h2>Scenes:</h2>
    <div className="imgs max300">
        <div>
            <img 
                src={require('../assets/animations/lizScene-01.jpg')} 
                data-skip-gallery
                    />
        </div>
    </div>
    <div className="imgs max300">
        <div>
            <img 
                src={require('../assets/animations/lizScene-02.jpg')} 
                data-skip-gallery
                    />
        </div>
    </div>
    <div className="imgs max300">
        <div>
            <img 
                src={require('../assets/animations/lizScene-03.jpg')} 
                data-skip-gallery
                    />
        </div>
    </div>
    <div className="imgs max300">
        <div>
            <img 
                src={require('../assets/animations/lizScene-04.jpg')} 
                data-skip-gallery
                    />
        </div>
    </div>
    The above scenes were given to me from a coworker graphic designer. With them, I was given the script for the video to help me plan the assets I would build, which included a school bus and a school crafting table.

    <h2>Asset Building:</h2>
    <div className="imgs max300">
        <div>
            <img 
                src={require('../assets/animations/lizTable-02.jpg')} 
                data-skip-gallery
                    />
            <p>Crafting table sketches</p>
        </div>
    </div>
    <div className="imgs max300">
        <div>
            <img 
                src={require('../assets/animations/lizTable-01.jpg')} 
                data-skip-gallery
                    />
            <p>Crafting table final</p>
        </div>
    </div>
    <div className="imgs max300">
        <div>
            <img 
                src={require('../assets/animations/lizBus-01.jpg')} 
                data-skip-gallery
                    />
            <p>School bus final</p>
        </div>
    </div>

    <h2>Final Animation:</h2>
    <div className="video">
      <iframe 
        src="https://www.youtube.com/embed/Vgjp0-gTP1c"
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
      />
    </div>
  


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)