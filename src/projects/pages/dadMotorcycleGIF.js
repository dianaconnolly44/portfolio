import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Anatomical Valentine": Animated Heart GIF </h1>

<p> I created this GIF as a Father's Day gift to my dad, to celebrate
how cool he is with his motorcycle riding around San Francisco. It was key
to illustrate him in his daily garb: a hospital scrub t-shirt and formal work pants, something 
he has become famous for within his hospital.</p>

<div className="imgs max600">
            <div>
                <img src={require('../assets/dadMotorcycleGIF/dad gif 1.gif')} />
                <p>Version 1, dark theme</p>
            </div>
    </div>

<div className="imgs max600">
            <div>
                <img src={require('../assets/dadMotorcycleGIF/dad gif 2.gif')} />
                <p>Version 2, day theme</p>
            </div>
    </div>
    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)