import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1>"The 25 Book"</h1>

    <p>The below pages are from a children's book style biography I made as a 25th birthday gift for my partner. I collected photos and stories from his family and illustrated the key moments of the first 25 years of his life.</p>

    <br/>
    <br/>
    <Slide easing="ease" duration={3000} className="slides max500">
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-01.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-03.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-04.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-05.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-06.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-07.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-08.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-09.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-10.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-11.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-12.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-13.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-14.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-15.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-16.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-17.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-18.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-19.jpg')})` }} />
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/childrensIllos/Hbook/Hbook-20.jpg')})` }} />
        </div>
    </Slide>
    <div className="instructions" style={{ width: 650 }}>
      <b>Instructions</b>
      <br />
      Hover your mouse over the above slideshow panel to pause on the current page.
    </div>

    <h3>In Print:</h3>
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