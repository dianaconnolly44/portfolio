import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

export const Page = props => (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> Undergraduate Thesis Project: Communication Symbols </h1>

<div className="imgs max300">
        <div>
            <img 
                src={require('../assets/capstone/versions/4/print1.jpg')} 
                onClick={props.open}
            />
        </div>
    </div>

<br/>

    <h2> Introduction</h2>

    <p> In my senior year of attending Carnegie Mellon University and receiving a dual degree in Cognitive Neuroscience and Art, 
    I completed a thesis project combining my two areas of study. The topic of this project involved research of 1) how to make the most effective
    visual symbols for their intended audience, 2) user experience and user testing, 3) sensorial tools in aiding engagement of individuals on the Autism spectrum, 
    as well as pre-verbal aged children.</p>

<div className="imgs max300">
        <div>
            <img 
                src={require('../assets/capstone/aboutTS/templeOutside.jpg')} 
                onClick={props.open}
            />
            <p>Temple Sinai, of Pittsburgh, PA</p>
        </div>
        <div>
            <img 
                src={require('../assets/capstone/aboutTS/templeInside.jpg')} 
                onClick={props.open}
            />
            <p>Temple Sinai's prayer room</p>
        </div>
    </div>

        
    <p>Temple Sinai in Pittsburgh, PA is a Jewish temple that works to be inclusive of all of its members. 
    One way in which they pursue this is by holding their Mostly Musical Shabbat, a monthly prayer ceremony 
    that utilizes the sensorial tools of singing and listening to music in order to best involve the temple 
    members with sensory needs, such as young audiences or those on the Autism spectrum. Sensorial tools such as these
    have been shown to be especially beneficial to those with Autism Spectrum Disorder as involving different 
    senses is known to help these individuals engage attention.</p>

<div className="imgs max300">
        <div>
            <img 
                src={require('../assets/capstone/aboutTS/flyerMMS.jpg')} 
                onClick={props.open}
            />
            <p>Flyer for "Mostly Musical Shabbat"</p>
        </div>
        <div>
            <img 
                src={require('../assets/capstone/aboutTS/demoMMS.jpg')} 
                onClick={props.open}
            />
            <p>A "Mostly Musical Shabbat" ceremony</p>
        </div>
    </div>

        
    <p>Temple Sinai’s rabbi and I connected when we agreed to collaborate on this Mostly Musical Shabbat. We discussed
    incorporating additional sensorial elements in the shabbat, and this became the topic for which I dedicated my undergraduate thesis project. 
    To supplement the musical sensorial elements that the temple was already incorporating, I produced, tested, and iterated various 
    visual and interactive products to help maintain involvement during the ceremony from our target audiences.</p>




    <h2> Ideation</h2>

    <p> I met with the rabbi to first discuss the flow of the shabbat ceremony. We determined that the items needed were:
    1) a "visual schedule" to help the audience members be aware of the overall flow and duration of the shabbat, 
    and 2) some form of tactile interactive object for members to engage with as the ceremony was proceeding.</p>

    <p> The rabbi and I spliced the ceremony's flow into four main sections, and I learned from the rabbi the 
    contents and meanings of each prayer within these four ceremony sections. Separately, I continued my literature review 
    research on how to make effective symbols, and began to illustrate symbols to represent each shabbat prayer. 
    The rabbi and I iterated over the prayers' symbol library until we felt content with them.</p>

<div className="imgs max300">
        <div>
            <img 
                src={require('../assets/capstone/versions/iconExamples.jpg')} 
                onClick={props.open}
            />
            <p>Select example icons</p>
        </div>
    </div>



    <h2> Process</h2>

    <p> Once the symbol library was complete, I began the first iterations of the two products. The "visual schedule" 
    was expressed as a 6-foot-tall banner to sit on the stage where the rabbi would be leading the ceremony. This banner 
    was used to denote the four ceremony sections, as well as all of the prayers in each section.</p>

<div className="imgs max400">
        <div>
            <img 
                src={require('../assets/capstone/versions/4/bannerStageOG.jpg')} 
                onClick={props.open}
            />
            <p>Banner on stage at Temple Sinai</p>
        </div>
        <div>
            <img 
                src={require('../assets/capstone/versions/banner.jpg')} 
                onClick={props.open}
            />
            <p>Banner, digital</p>
        </div>
    </div>


    <p> The second product was an interactive sticker sheet, with one of each prayer icon printed on the stickers. The intended use of this
    product was to follow along with each prayer, helping with engagement of the target audneice to comprehend: 1) the duration of the 
    ceremony, 2) which prayer was currently happening, and 3) the overall topic of the current prayer.</p>

    <p>My first iteration of this product began as a "bookmark" to be placed in each audience member's torah book. 
    The bookmark had black and white labelled versions of each prayer, and the corresponding stickers were intended to be applied over 
    each prayer as it was occurring. I created this bookmark by designing and printing out sheets with all four ceremony
    sections, and folding these sheets to expose only one section of the ceremony at a time. Each of these four sections were the same
    as those denoted on the visual schedule on the temple's stage.</p>

<Slide easing="ease" duration={3000} className="slides max400">
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/1/print1.jpg')})` }} >
                <label><span>Bookmark, unfolded</span></label>
            </div>
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/4/singleStickers.jpg')})` }} >
                <label><span>Accompanying sticker sheet</span></label>
            </div>
        </div>
    </Slide>

    <p>After receiving user feedback after the ceremony, I began planning my next iterations. Both the rabbi and the patrons expressed
    great satisfaction with the banner. The bookmark, however, was not clear enough as to what interaction was expected to take place. Thus,
    I created a larger bookmark with the stickers already on the bookmark, next to where the stickers should be place. I also included 
    on the bookmark more directions, such as numbering the order of the four ceremony sections as well as instructions on how to place the stickers.
    This iteration can be viewed below.</p>

<Slide easing="ease" duration={3000} className="slides max400">
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/2/print1.jpg')})` }} >
                <label><span>Front side</span></label>
            </div>
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/2/print2.jpg')})` }} >
                <label><span>Back side</span></label>
            </div>
        </div>
    </Slide>

    <div className="imgs max300 centered">
        <div>
            <img 
                src={require('../assets/capstone/versions/2/1.jpeg')} 
                onClick={props.open}
            />
            <p>Pick-up spot before entering</p>
        </div>
        <div>
            <img 
                src={require('../assets/capstone/versions/2/2.jpeg')} 
                onClick={props.open}
            />
            <p>Physical demonstration</p>
        </div>
        <div>
            <img 
                src={require('../assets/capstone/versions/2/4.jpeg')} 
                onClick={props.open}
            />
            <p>Physical demonstration</p>
        </div>
    </div>
        

    <p>I continued this process of user testing and user feedback for the remainder of my semester, until I came upon the final idea of
    a "sticker book", in place of the bookmark idea. I was guided to this idea by the continued user feedback, as this seemed to be
    the most intuitive format to express the progession of several different sections of the ceremony.</p>

    <p>This book was separated by: 1) a cover image to express the topic of the book, 2) an instruction page to express the intended use, 
    3) one page per each section of the ceremony, and 4) a sheet of stickers, in order, for each prayer that would occur.</p>
 
    <Slide easing="ease" duration={3000} className="slides max400">
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/4/print1.jpg')})` }} >
                <label><span>Front cover</span></label>
            </div>
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/4/print2.jpg')})` }} >
                <label><span>Instruction page</span></label>
            </div>
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/4/print3.jpg')})` }} >
                <label><span>Page 1</span></label>
            </div>
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/4/print4.jpg')})` }} >
                <label><span>Page 2</span></label>
            </div>
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/4/print5.jpg')})` }} >
                <label><span>Page 3</span></label>
            </div>
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/4/print6.jpg')})` }} >
                <label><span>Page 4</span></label>
            </div>
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/4/print7.jpg')})` }} >
                <label><span>Back cover</span></label>
            </div>
        </div>
        <div className="slide">
            <div style={{ backgroundImage: `url(${require('../assets/capstone/versions/4/singleStickers.jpg')})` }} >
                <label><span>Accompanying sticker sheet</span></label>
            </div>
        </div>
    </Slide>
    
    <div className="imgs max300 centered">
        <div>
            <img 
                src={require('../assets/capstone/versions/4/tableHandout.jpeg')} 
                onClick={props.open}
            />
            <p>Pick-up spot before entering</p>
        </div>
        <div>
            <img 
                src={require('../assets/capstone/versions/4/bookPile.jpeg')} 
                onClick={props.open}
            />
            <p>Physical books</p>
        </div>
        <div>
            <img 
                src={require('../assets/capstone/versions/4/demoSticker.jpeg')} 
                onClick={props.open}
            />
            <p>Physical book demonstration</p>
        </div>
    </div>  

    <p>I was happy to see that this book had very positive effects at its final test run. It was not only helpful for the intended audience of
    temple members with sensorial sensitivities, but also pre-verbal children, children too young to read, anyone with difficulty focusing 
    during the service, and anyone who could not read the Hebrew presented in the original prayer. During this final test ceremony, 
    children who had not received the book were noticing others enjoying it and ran to the lobby get their own book. I actually ran out of my
    supply of books. After the ceremony, parents came over to me thrilled at how engaged their young children remained during the entire ceremony, and requested that this be applied to other events
    as well. In addition, a boardmember of the Women of Reform Judaism (WRJ) requested that I share this product with the 800 temples 
    involved in her organization, as well as produce such content for similar audiences in other environments such as other ceremonies as well as Hebrew school.</p>




    <div className="imgs max300">
       
        <div>
            <img 
                src={require('../assets/capstone/versions/4/girl.jpeg')} 
                onClick={props.open}
            />
            <p>A young temple member and her grandmother using the sticker book</p>
        </div>
        <div>
            <img 
                src={require('../assets/capstone/versions/4/bannerStageOG.jpg')} 
                onClick={props.open}
            />
            <p>Banner in use during ceremony</p>
        </div>
    </div>
        
        
        


    <h2> Conclusion</h2>

    <p> Throughout my schooling years, I discovered my interests in combining my two passions of art and science.
    This was a core theme of my thesis project, as my background education from my dual degree in Cognitive Neuroscience and Art helped me
    to approach the goal of this project from both an artistic angle, understanding how visuals can impact audiences, as well as 
    psychological and biological angles, understanding the ways in which sensorial tools aid in attention and engagement of young and autistic audiences. As mentioned above, the sticker book and icon banner evolved into very effective tools for helping to engage the target audience after implementing the data collected from the rounds of user feedback, and I am pleased with the results of this project.</p>

    <div className="imgs max700">
       
        <div>
            <img 
                src={require('../assets/capstone/versions/capstonePresentation/2.jpeg')} 
                data-skip-gallery
            />
            <p>Presenting the project and its various progressing products at Carnegie Mellon's "Meeting of the Minds" 2017 event</p>
        </div>
    </div>

    {/* ==== EDIT ABOVE THIS LINE ==== */}

  </div>
)






// worked with the rabbi to developed visual 
    //symbols to represent each of the prayers in the Shabbat in order to guide the members 
    //with ASD through the ceremony. These symbols will be presented to the members via a 
    //large banner on the temple’s stage as well as on personal bookmarks that correspond 
    //with the banner. The bookmarks will also have a sticker packet with the symbols printed 
    //as stickers, to be placed on each of the corresponding sections for the current prayer 
    //on the bookmarks. The visually and physically interactive elements of these materials 
    //will help to add more sensorial aspects to the Shabbat, further benefitting Temple Sinai’s members with ASD.