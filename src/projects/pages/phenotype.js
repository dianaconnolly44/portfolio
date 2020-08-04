import React, { Component } from 'react';
export const page = (
  <div className="project">

    {/* ==== EDIT BELOW THIS LINE ==== */}
    
    <h1> "Phenotype vs. Genotype" </h1>

    
    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/phenotype/1.jpg')} />
        </div>
    </div>

    <p>I created this art piece during my art studies at Carnegie 
    Mellon University in the course <a target="_blank" href={require('../assets/mixedMedia/maurides_Courses.pdf')}>60-101</a>, "Concept  
    Studio I: The Self and the Human Being". This piece was my final project in the class, and I wanted to use that opporunity to 
    explore interdisciplinary topics, involving the biological concept of phenotype verses genotype, in the medium of an artistic portrait. 
    At the time, the three main men in my life all happened to exhibit the same phenotypes of light brown hair and blue eyes. These 
    being the same phenotype was in contrast to their varying genotypes, as each individual was genetically unrelated. To exhibit this 
    contrast, I painted portraits of each individual using the same paint colors to highlight their same phenotype traits, but contrasted 
    this with the varying samples of genes I collected from each individual, in laboratory vials paired with each portrait.</p>


    <div className="imgs max800">
        <div>
            <img src={require('../assets/mixedMedia/phenotype/2.jpg')} />
        </div>
        <div>
            <img src={require('../assets/mixedMedia/phenotype/3.jpg')} />
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