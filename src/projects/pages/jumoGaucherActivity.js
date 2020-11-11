import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Clinical Trial Children's Activity Book</h1>

    <p>The below sample pages are from an activity book that pairs with <a href="/myCondition" target="_blank">this</a> children's book, which explains a certain health condition to 
    preschool age readers. The below activity book is intended to help those young readers stay entertained during their 
    doctor visits for participation in a clinical trial relating to their health condition.</p>

    <div className="imgs max700">
        <div>
            <img 
                    src={require('../assets/childrensIllos/gaucherActivity/1-01.png')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/gaucherActivity/2_v2-01.png')} 
                    onClick={props.open} 
                />
        </div>
    </div>

    <div className="imgs max700">
        <div>
            <img 
                    src={require('../assets/childrensIllos/gaucherActivity/3-01.png')} 
                    onClick={props.open} 
                />
        </div>
        <div>
            <img 
                    src={require('../assets/childrensIllos/gaucherActivity/4_v2-01-01.png')} 
                    onClick={props.open} 
                />
        </div>
    </div>





    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)


//<a onClick={e => nav("/myCondition")}>this</a>