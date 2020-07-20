import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Who Was Frida Kahlo?" Children's Book</h1>

    
    <div className="imgs max600">
        <div>
            <img src={require('../gallery/childrensIllos/frida/1.png')} />
            <p>There once was a girl who liked crayons and clay. She often caused trouble and wanted her way.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../gallery/childrensIllos/frida/2.png')} />
            <p>She had many feelings inside of her heart. She painted them all and they became art.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../gallery/childrensIllos/frida/5.png')} />
            <p>She painted the person she knew best. She painted herself: her face and her chest.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../gallery/childrensIllos/frida/7.png')} />
            <p>Who is she, you want to know? She's the famous painter, Frida Kahlo!</p>
        </div>
    </div>

    <div className="imgs max800">
        <div>
            <img src={require('../gallery/childrensIllos/frida/sketch.jpg')} />
        </div>
    </div>



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)