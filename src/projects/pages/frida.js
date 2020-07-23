import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Who Was Frida Kahlo?" Children's Book</h1>

    <p>The below sample pages are from an educational children's book I created to explain to preschool age readers 
    about the life of the famous Mexican artist Frida Kahlo. See my character design process for having Frida 
    age throughout the book.</p>
    
    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/frida/1.jpg')} />
            <p>There once was a girl who liked crayons and clay. She often caused trouble and wanted her way.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/frida/2.jpg')} />
            <p>She had many feelings inside of her heart. She painted them all and they became art.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/frida/5.jpg')} />
            <p>She painted the person she knew best. She painted herself: her face and her chest.</p>
        </div>
    </div>

    <div className="imgs max600">
        <div>
            <img src={require('../assets/childrensIllos/frida/7.jpg')} />
            <p>Who is she, you want to know? She's the famous painter, Frida Kahlo!</p>
        </div>
    </div>

    <div className="imgs max800">
        <div>
            <img src={require('../assets/childrensIllos/frida/sketch.jpg')} />
        </div>
    </div>



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)