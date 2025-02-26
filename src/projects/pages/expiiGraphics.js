import React, { Component } from 'react';
export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Expii Graphics </h1>

    <p>The below graphics were made for <a href="https://www.expii.com/" target="_blank">Expii</a>, an educational site that hosts math and science lessons and 
    problems. The following graphics either paired with word problems to help readers be more engaged in the 
    problem, or with social media posts to highlight mathematical and scientific concepts.</p>
    

<div className="imgs max500">
            <div>
                <img 
                    src={require('../assets/expiiGraphics/12.png')} 
                    onClick={props.open} 
                />
                <p>"Groundhog Day", click <a href="https://www.expii.com/t/combined-linear-systems-of-equations-and-inequalities-5037?type=problem&id=18473" target="_blank">here</a> to see corresponding math problem</p>
            </div>
            <div>
                <img 
                    src={require('../assets/expiiGraphics/21.png')} 
                    onClick={props.open} 
                />                
                <p>"Waffle Day", click <a href="https://www.expii.com/t/applications-of-area-and-perimeter-5477?type=problem&id=19574" target="_blank">here</a> to see corresponding math problem</p>
            </div>
        </div> 

<div className="imgs max500">
            <div>
                <img 
                    src={require('../assets/expiiGraphics/19.png')} 
                    onClick={props.open} 
                />                                
                <p>"Winter Olympics", click <a href="https://www.expii.com/problem/18624" target="_blank">here</a> to see corresponding math problem</p>
            </div>
            <div>
                <img 
                    src={require('../assets/expiiGraphics/16.png')} 
                    onClick={props.open} 
                />
                <p>"Oscars", click <a href="https://www.expii.com/t/interpreting-relations-and-the-vertical-line-test-4754?type=problem&id=18627&solution=9176" target="_blank">here</a> to see corresponding math problem</p>
            </div>
            
        </div>


<div className="imgs max500">
            <div>
                <img 
                    src={require('../assets/expiiGraphics/13.png')} 
                    onClick={props.open} 
                />
                <p>"Chinese New Year", click <a href="https://www.expii.com/t/logic-puzzles-and-brainteasers-10611?type=problem&id=18572" target="_blank">here</a> to see corresponding math problem</p>
            </div>
            <div>
                <img 
                    src={require('../assets/expiiGraphics/17.png')} 
                    onClick={props.open} 
                />
                <p>"Presidents Day", click <a href="https://www.expii.com/t/intro-to-relations-4309?type=problem&id=19108&solution=9296" target="_blank">here</a> to see corresponding math problem</p>
            </div>
            
        </div>

<div className="imgs max500">
            <div>
                <img 
                    src={require('../assets/expiiGraphics/14.png')} 
                    onClick={props.open} 
                />
                <p>"Kid Inventor Day, K.I.D.", click <a href="https://www.expii.com/t/logic-puzzles-and-brainteasers-10611?type=problem&id=18634&solution=8146" target="_blank">here</a> to see corresponding math problem</p>
            </div>
            <div>
                <img 
                    src={require('../assets/expiiGraphics/8.png')} 
                    onClick={props.open} 
                />
                <p>"Watermelon Day", click <a href="https://www.instagram.com/p/BXYNJEEDx7Y/" target="_blank">here</a> to see corresponding instagram post</p>
            </div>
        </div>





<div className="imgs max500">
            <div>
                <img 
                    src={require('../assets/expiiGraphics/11.png')} 
                    onClick={props.open} 
                />
                <p>"Total Eclipse", click <a href="https://www.instagram.com/p/BYD1PZDjNux/" target="_blank">here</a> to see corresponding instagram post</p>
            </div>
            <div>
                <img 
                    src={require('../assets/expiiGraphics/10.png')} 
                    onClick={props.open} 
                />
                <p>"Pluto Demoted Day", click <a href="https://www.instagram.com/p/BYMBpacDi7E/" target="_blank">here</a> to see corresponding instagram post</p>
            </div>
        </div>

<div className="imgs max500">
            <div>
                <img 
                    src={require('../assets/expiiGraphics/9.png')} 
                    onClick={props.open} 
                />
                <p>"Cat Day", click <a href="https://www.instagram.com/p/BXijJHrjfnP/" target="_blank">here</a> to see corresponding instagram post</p>
            </div>
            <div>
                <img 
                    src={require('../assets/expiiGraphics/2.png')} 
                    onClick={props.open} 
                />
                <p>"Tau Day", click <a href="https://www.instagram.com/p/BV5RrBhFTic/" target="_blank">here</a> to see corresponding instagram post</p>
            </div>            
        </div>

<div className="imgs max500">
            <div>
                <img 
                    src={require('../assets/expiiGraphics/6.png')} 
                    onClick={props.open} 
                />
                <p>"Chess Day", click <a href="https://www.instagram.com/p/BWvGfOJDJiD/" target="_blank">here</a> to see corresponding instagram post</p>
            </div>
            <div>
                <img 
                    src={require('../assets/expiiGraphics/7.png')} 
                    onClick={props.open} 
                />
                <p>"Pi Approximation Day", click <a href="https://www.instagram.com/p/BW3PPWFDoWC/" target="_blank">here</a> to see corresponding instagram post</p>
            </div>
        </div> 



    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)