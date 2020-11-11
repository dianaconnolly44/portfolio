import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Clinical Trial Child and Parent's Activity Book</h1>

    <p>The below sample pages are from an activity book that help preschool-age children and their parents 
    to stay entertained during doctor visits for a medical clinical trial.</p>
    
    <div className="imgs max700">
        <div>
            <img 
                    src={require('../assets/childrensIllos/achieve/1-01.png')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/achieve/2-01.png')} 
                    onClick={props.open} 
                />
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img 
                    src={require('../assets/childrensIllos/achieve/3-01.png')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/achieve/4-01.png')} 
                    onClick={props.open} 
                />
        </div>
    </div>





    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)