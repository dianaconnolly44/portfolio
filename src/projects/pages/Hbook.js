import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1>"The 25 Book"</h1>

    <p>The below pages are from a children's book style biography I made as a 25th birthday gift for my partner. I collected photos and stories from his family and illustrated the key moments of the first 25 years of his life.</p>

    <div className="imgs max400">
        <div>
            <img 
                src={require('../assets/Hbook/cover.jpg')} 
                data-skip-gallery
            />
            <p>Printed cover page</p>
        </div>
        <div>
            <img 
                src={require('../assets/Hbook/ex1.jpg')} 
                data-skip-gallery
            />
            <p>Example printed page</p>
        </div>
    </div>




    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)