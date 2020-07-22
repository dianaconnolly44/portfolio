import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Healthy Food": Comic GIF </h1>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/banana.gif')} />
        </div>
    </div>

    <p> I created this jogging banana GIF in response to the collection of
    funny running "healthy food" characters portrayed in the below comic animation video about 
    Type 2 Diabetes.</p>

    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/C9F5j2OBQBU?start=131" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)