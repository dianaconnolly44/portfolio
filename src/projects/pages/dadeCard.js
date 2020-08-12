import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Father's Day e-Card </h1>


    <div className="imgs max800">
        <div>
		    <video controls style={{ border: '5px solid grey' }}>
		      <source src={require('../assets/animations/dadEcard.mp4')} type="video/mp4"/>
		    </video>
        </div>
    </div>

    <p>A paper cut-out style animation as a Father's Day eCard, reminiscing about a road trip taken together. Made
    using 3D layers in Adobe After Effects.</p>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)