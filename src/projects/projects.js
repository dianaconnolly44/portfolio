import { page as tobiiTopographic } from './pages/tobiiTopographic';
import { page as tobiiPeople } from './pages/tobiiPeople';
import { page as tobiiASL } from './pages/tobiiASL';
import { page as tobiiTech } from './pages/tobiiTech';
import { page as tobiiAnimals } from './pages/tobiiAnimals';
import { page as tobiiObjects } from './pages/tobiiObjects';
import { page as tobiiHospital } from './pages/tobiiHospital';
import { page as tobiiAvatars } from './pages/tobiiAvatars';
import { page as expiiIcons } from './pages/expiiIcons';
import { page as thesis } from './pages/thesis';


// PAGE FOR PROJECT INFORMATION (used by menu, gallery pages, etc)
// 
// format:
// 
// 	<ID>: {
// 		title: `<TITLE>`, 
// 		description: `<DESCRIPTION>`,
// 		pic: `<THUMBNAIL FILENAME>`,
// 		page: ??
// 

export const projects = {

//children's illo//

	'hotspots': {
		title: `Hotspot Pop-ups`,
		description: `Hover activated pop-up illustrations to pair with medical text online`,
		pic: `hotspots.png`,
		page: 0
	},


	'thesis': {
		title: `Undergrad Thesis: Communication Symbols`,
		description: `Researched most effective visuals to aid Shabbat participation for autistic and young audiences`,
		pic: `thesis_v2.png`,
		page: thesis
	},

	'frida': {
		title: `"Who Was Frida Kahlo?"`,
		description: `Educational book about Kahlo's life and legacy`,
		pic: `frida.jpg`,
		page: 0
	},

	'gaucher': {
		title: `"My Condition & Me"`,
		description: `Educational book for toddlers about their health condition`,
		pic: `gaucher2.jpg`,
		page: 0
	},

	'color': {
		title: `"A Perfect Day"`,	
		description: `Max and Zoey's perfect day`,	
		pic: `color.jpg`,
		page: 0
	},

	'achieve': {
		title: `Activity Book`,
		description: `Book of coloring and games for children`,
		pic: `achieve.jpg`,
		page: 0
	},

	'bunny': {
		title: `"Growing a Tomato"`,
		description: `Educational book about gardening`,
		pic: `bunny.jpg`,
		page: 0
	},

	'activity': {
		title: `Activity Book`,
		description: `Book of coloring and games for children`,
		pic: `activity.jpg`,
		page: 0
	},

	'trump': {
		title: `"The White House"`,
		description: `Educational book about the White House and inauguration`,
		pic: `trump.jpg`,
		page: 0
	},

	'energy': {
		title: `"Who Can Do It?"`,
		description: `Educational book about sustainability efforts`,
		pic: `energy.jpg`,
		page: 0
	},

	'pathways': {
		title: `"Pathways"`,	
		description: `Guide for kids and teachers on using a new product`,	
		pic: `pathways.jpg`,
		page: 0
	},

	'fall': {
		title: `"Seasons of Color"`,
		description: `Educational book about colors associated with seasons`,
		pic: `fall.jpg`,
		page: 0
	},

	't1d': {
		title: `"T1D & Gwen"`,
		description: `Book concept for teens with Type 1 Diabetes`,
		pic: `t1d3.jpg`,
		page: 0
	},

	'expii': {
		title: `Expii Graphics`,
				description: `Graphics to pair with Expii's e-learning webiste`,
		pic: `expii.png`,
		page: 0
	},

	'andreaBook': {
		title: `"Kingdom of Plenty"`,
		description: `A children's book concept`,
		pic: `andreaBook.jpg`,
		page: 0
	},


//media illo//

	'lloyd': {
		title: `"The Eleventh Hour"`,
		description: `Prog rock album cover`,
		pic: `lloyd.jpg`,
		page: 0
	},

	'expii1': {
		title: `Editorial Illustration`,
		description: `Depicting varying math and science explanation types (text, video, drawn) housed on an e-learning site`,
		pic: `expii1.jpg`,
		page: 0
	},

	'expii2': {
		title: `Editorial Illustration`,
		description: `Depicting a sense of community and communication on social media for an e-learning site`,
		pic: `expii2_v3.png`,
		page: 0
	},

	'verdeBaby': {
		title: `"Halloween: All Grown Up?"`,
		description: `News magazine cover illustration`,
		pic: `verdeBaby.jpg`,
		page: 0
	},

	'verdeSam': {
		title: `"I Want YOU to be Happy"`,
		description: `News magazine cover illustration`,
		pic: `verdeSam.jpg`,
		page: 0
	},

	'verdeElephant': {
		title: `"The Elephant in the Classroom"`,	
		description: `News magazine cover illustration`,	
		pic: `verdeElephant.jpg`,
		page: 0
	},

	'verdeSweetheart': {
		title: `"Don't Call Me Sweetheart"`,
		description: `News magazine cover illustration`,
		pic: `verdeSweetheart.jpg`,
		page: 0
	},

	'verdeGun': {
		title: `"Gunning for Change"`,
		description: `News magazine cover illustration`,
		pic: `verdeGun.jpg`,
		page: 0
	},

	'verdeLips': {
		title: `Untitled`,
		description: `News magazine cover illustration`,
		pic: `verdeLips.jpg`,
		page: 0
	},

	'verdeOccupy': {
		title: `"Occupy [Here]"`,
		description: `News magazine cover illustration`,
		pic: `verdeOccupy.jpg`,
		page: 0
	},

	'verdeInternal': {
		title: `News Article Illustrations`,
		description: `Illustrations to pair with news articles`,
		pic: `verdeInternal.png`,
		page: 0
	},

//iconography//

	'tobiiAnimals': {
		title: `Animals`,
		description: `Picture communication symbols (PCS) on general conversation topics`,
		pic: `tobiiIcons/thinlineThumbnail.png`,
		page: tobiiAnimals
	},

	'tobiiPeople': {
		title: `People`,
		description: `Picture communication symbols (PCS) on conversation topics about people`,
		pic: `tobiiIcons/peopleThumbnail.png`,
		page: tobiiPeople
	},

	'tobiiObjects': {
		title: `Objects`,
		description: `Picture communication symbols (PCS) on conversation topics about objects`,
		pic: `tobiiIcons/objectsThumbnail.png`,
		page: tobiiObjects
	},

	'tobiiTech': {
		title: `Technology`,
		description: `Picture communication symbols (PCS) on conversation topics about technology`,
		pic: `tobiiIcons/techThumbnail.png`,
		page: tobiiTech
	},

	'tobiiTopographic': {
		title: `Topographic`,
		description: `Picture communication symbols (PCS) to educate nonverbal children about topography`,
		pic: `tobiiIcons/africaThumbnail.png`,
		page: tobiiTopographic
	},

	'tobiiASL': {
		title: `American Sign Language`,
		description: `Picture communication symbols (PCS) on American Sign Language vocabulary`,
		pic: `tobiiIcons/aslThumbnail2.png`,
		page: tobiiASL
	},

	'tobiiHospital': {
		title: `Hospital-related Topics`,
		description: `Picture communication symbols (PCS) to aid communication in a hospital setting`,
		pic: `tobiiIcons/hospitalThumbnail2.png`,
		page: tobiiHospital
	},

	'tobiiAvatars': {
		title: `Avatars`,
		description: `Visual representation of students' teachers`,
		pic: `tobiiIcons/avatars/avatarVictoria_s.png`,
		page: tobiiAvatars
	},

	'expiiIcons': {
		title: `"Get to Know Us": Hobby Icons`,
		description: `Icon representation of a company's individual team members' interests, for social media`,
		pic: `expiiIconFeature.png`,
		page: expiiIcons
	},
	


//videos//

	'dadCard': {
		title: `Father's Day eCard`,
		description: 'Adobe After Effects',
		pic: `dadcard2.gif`,
		page: 0
	},

	'whiteboard': {
		title: `Whiteboard Animation`,
		description: 'Adobe After Effects',
		pic: `whiteboard2.gif`,
		page: 0
	},

	'holiday': {
		title: `Holiday eCard`,
		description: 'Adobe After Effects',
		pic: `holiday2.gif`,
		page: 0
	},

	'characterExplainer': {
		title: `Character Explainer Videos`,
		description: 'Adobe After Effects',
		pic: `characterExplainer44.gif`,
		page: 0
	},

	'iconExplainer': {
		title: `Icon Explainer Videos`,
		description: 'Adobe After Effects',
		pic: `iconExplainer2.gif`,
		page: 0
	},

	'textAnimation': {
		title: `Text Animation`,
		description: 'Adobe After Effects',
		pic: `textAnimation2.gif`,
		page: 0
	},

	'frameByFrame': {
		title: `Frame by Frame Animation`,
		description: 'Adobe Photoshop',
		pic: `frameByFrame2.gif`,
		page: 0
	},

	'transitionScreens': {
		title: `Transition Screens`,
		description: 'Adobe After Effects',
		pic: `transitions2.gif`,
		page: 0
	},

	'assetCreation': {
		title: `Asset Creation`,
		description: 'Adobe Illustrator',
		pic: `assetCreation.png`,
		page: 0
	},

//loops//

	'dadMotorcycle': {
		title: `Dad's Motorcycle`,
		pic: `dadMotorcyclePurple.gif`,
		page: 0
	},

	'banana': {
		title: `Healthy Food`,
		pic: `banana.gif`,
		page: 0
	},

	'heart': {
		title: `Anatomical Valentine`,
		pic: `heart.gif`,
		page: 0
	},

	'skulls': {
		title: `Dia de los Muertos`,
		pic: `skulls-small.gif`,
		page: 0
	},

	'turkey': {
		title: `Macy's Day Parade`,
		pic: `turkey-small.gif`,
		page: 0
	},

	'pumpkins': {
		title: `Pumpkin Overload`,
		pic: `pumpkins-small.gif`,
		page: 0
	},

	'clock': {
		title: `Day Light Savings`,
		pic: `clock-small.gif`,
		page: 0
	},

	'hanukkah': {
		title: `Hanukkah Candles`,
		pic: `hanukkah-small.gif`,
		page: 0
	},

	'bFriday': {
		title: `Black Friday`,
		pic: `bFriday-small.gif`,
		page: 0
	},

	'ornaments': {
		title: `Christmas Ornaments`,
		pic: `ornaments-small.gif`,
		page: 0
	},

	'ribbon': {
		title: `Christmas Ribbon`,
		pic: `ribbon-small.gif`,
		page: 0
	},

	'NYE': {
		title: `New Year's Eve`,
		pic: `NYE-small.gif`,
		page: 0
	},

//drawing//

	'inkHair': {
		description: `Ink`,
		pic: `inkHair.jpg`,
		page: 0
	},

	'joker': {
		description: `Graphite`,
		pic: `joker.jpg`,
		page: 0
	},

	'alyssa': {
		description: `Graphite`,
		pic: `alyssa.jpg`,
		page: 0
	},

	'jackson': {
		description: `Graphite`,
		pic: `jackson.jpg`,
		page: 0
	},

	'selfPencil': {
		description: `Colored pencil`,
		pic: `selfPencil.jpg`,
		page: 0
	},

	'stillLifePencil': {
		description: `Graphite`,
		pic: `stillLifePencil.jpg`,
		page: 0
	},

	'icyGirl': {
		description: `Digital Color Study: Bridging`,
		pic: `icyGirl.jpg`,
		page: 0
	},

	'charcoal': {
		description: `Charcoal`,
		pic: `charcoal.jpg`,
		page: 0
	},

	'orangeDrawing': {
		description: `Acrylic, charcoal`,
		pic: `orangeDrawing.jpg`,
		page: 0
	},

	'colorShadowGirl': {
		description: `Digital Color Study: Warm vs. Cool`,
		pic: `colorShadowGirl.jpg`,
		page: 0
	},

	'figure1': {
		description: `Charcoal`,
		pic: `figure1.jpg`,
		page: 0
	},

	'figure2': {
		description: `Charcoal`,
		pic: `figure2.jpg`,
		page: 0
	},

	'figure3': {
		description: `Charcoal`,
		pic: `figure3.jpg`,
		page: 0
	},

	'figure4': {
		description: `Charcoal`,
		pic: `figure4.jpg`,
		page: 0
	},

	'figure5': {
		description: `Charcoal`,
		pic: `figure5.jpg`,
		page: 0
	},

	'shell': {
		description: `Graphite`,
		pic: `shell.jpg`,
		page: 0
	},

	'handCharcoal': {
		description: `Charcoal`,
		pic: `handCharcoal.jpg`,
		page: 0
	},

	'birb': {
		description: `Digital Color Study: Contrasting`,
		pic: `birb.jpg`,
		page: 0
	},


//painting://
	
	'boobs': {
		title: `Uncanny`,
		description: `Intersection of breasts and seashells, oil`,
		pic: `boobs_s.jpg`,
		page: 0
	},

	'dissect': {
		title: `Dissecting Myself`,
		description: `Insect pinning a self portrait, acrylic`,
		pic: `dissect_s.jpg`,
		page: 0
	},

	'eye': {
		title: `Retinal Embossing`,
		description: `Gold-embossed portrait of a retina, oil`,
		pic: `eye_s.jpg`,
		page: 0
	},

	'huesGrid': {
		title: `Hues Grid`,
		description: `A painting comprised of 1 luminance level, oil`,
		pic: `huesGrid_s.jpg`,
		page: 0
	},

	'wonky1': {
		title: `Untitled`,
		description: `Mixed media`,
		pic: `wonky1.jpg`,
		page: 0
	},

	'wonky2': {
		title: `Look Me in the Eye`,
		description: `Mixed media`,
		pic: `wonky2.jpg`,
		page: 0
	},

	'jesusme': {
		title: `Untitled`,
		description: `Oil`,
		pic: `jesusme_s.jpg`,
		page: 0
	},

	'Lint': {
		title: `Rococo Lint, 1`,
		description: `Dryer lint as paint`,
		pic: `Lint_s.jpg`,
		page: 0
	},

	'botanical1': {
		title: `Botanical Self Portrait - Sequoia`,
		description: `Plants from the places I have lived,  watercolor & colored pencil`,
		pic: `sequoia.jpg`,
		page: 0
	},

	'botanical2': {
		title: `Botanical Self Portrait - Sansevieria`,
		description: `Plants from the places I have lived,  watercolor & colored pencil`,
		pic: `snakePlant.jpg`,
		page: 0
	},

	'botanical3': {
		title: `Botanical Self Portrait - CA Poppy`,
		description: `Plants from the places I have lived,  watercolor & colored pencil`,
		pic: `poppy.jpg`,
		page: 0
	},

	'botanical4': {
		title: `Botanical Self Portrait - Ginkgo`,
		description: `Plants from the places I have lived,  watercolor & colored pencil`,
		pic: `ginkgo.jpg`,
		page: 0
	},

	'model': {
		title: `Untitled`,
		description: `Figure, oil`,
		pic: `model_s.jpg`,
		page: 0
	},

	'plane': {
		title: `Untitled`,
		description: `Inspired by the sky, acrylic`,
		pic: `plane_s.jpg`,
		page: 0
	},

	'rococoLint': {
		title: `Rococo Lint, 2`,
		description: `Dryer lint as paint`,
		pic: `rococoLint_s.jpg`,
		page: 0
	},

	'young2': {
		title: `Untitled`,
		description: `Self portrait, oil`,
		pic: `young1_v2.jpg`,
		page: 0
	},

	'young4': {
		title: `Untitled`,
		description: `Self portrait, watercolor`,
		pic: `young4_s.png`,
		page: 0
	},

	'young5': {
		title: `Untitled`,
		description: `Self portrait, gouache`,
		pic: `young5_s.png`,
		page: 0
	},

	'young7': {
		title: `Untitled`,
		description: `Oil`,
		pic: `young7_s.png`,
		page: 0
	},

	'young8': {
		title: `American Pig`,
		description: `Acrylic`,
		pic: `young8_s.jpg`,
		page: 0
	},

//mixed media://

	'flipfoot': {
		title: `"Flipfoot"`,
		description: `Flipbook illustrating the progression of CRPS`,
		pic: `flipfoot.jpg`,
		page: 0
	},

	'spaceArt': {
		title: `Planet Tactilus`,
		description: `A simulation where tactile perception is experienced through auditory perception`,
		pic: `spaceArt.jpg`,
		page: 0
	},

	'104bodies': {
		title: `Mismatched`,
		description: `Randomized permutations of characters with mouse click`,
		pic: `104bodies.gif`,
		page: 0
	},

	'artBioPetri': {
		title: `Petri Portraits`,
		description: `A family portrait with my family members drawn in each of their bacteria`,
		pic: `artBioPetri.jpg`,
		page: 0
	},

	'migraineGlasses': {
		title: `Migraine Glasses`,
		description: `Simulation of various migraine visual effects`,
		pic: `migraine.jpg`,
		page: 0
	},

	'104eyes': {
		title: `Raise to Wake`,
		description: `Wake your monster by raising the sun and lowering the moon`,
		pic: `104eyes.gif`,
		page: 0
	},

	'104faces': {
		title: `Randomized Faces`,
		description: `Randomized permutations of facial features with mouse click`,
		pic: `104faces.gif`,
		page: 0
	},

	'phenotype': {
		title: `Phenotype vs. Genotype`,
		description: `Illustrations and gene samples, contrasting people's similar phenotypes with their varying genotypes`,
		pic: `phenotype.jpg`,
		page: 0
	},

	'hairGod': {
		title: `Hair God`,
		description: `A god-like being constructed of hair`,
		pic: `hairGod.jpg`,
		page: 0
	},

	'dreamBox': {
		title: `Dream Box`,
		description: `Installation on the elusiveness of dreams`,
		pic: `dreamBox.gif`,
		page: 0
	},

	'ducks': {
		title: `Duck's Bill(iard)`,
		description: `A commentary on abuse of animals in research`,
		pic: `ducks.jpg`,
		page: 0
	},

	'walkCycle': {
		title: `Follower`,
		description: `A walk cycle man will follow your clicks`,
		pic: `104walkCycle.gif`,
		page: 0
	},

	'paddleBall': {
		title: `Paddle Ball`,
		description: `Play paddle ball by moving your mouse`,
		pic: `104paddleBall.gif`,
		page: 0
	},

	'punkNecklace': {
		title: `Punk Necklace`,
		description: `Inspiration drawn from punk subculture`,
		pic: `punkNecklace.jpg`,
		page: 0
	},

	'oppositeBalls': {
		title: `Yin and Yang`,
		description: `Move your mouse to have yin and yang oppose each other like magnets`,
		pic: `104oppositeBalls.gif`,
		page: 0
	},

	'tattoo': {
		title: `Anatomical Heart Tattoo`,
		description: `A connect-the-dots tattoo of an anatomical heart diagram, over the location of the real heart`,
		pic: `tattoo.jpg`,
		page: 0
	},

	'sugarBoxes': {
		title: `The Key to Us`,
		description: `An representation of the Lock and Key Theory in biology`,
		pic: `sugarBoxes.jpg`,
		page: 0
	},

	'blueWave': {
		title: `Invisible Beauty`,
		description: `Photo manipulation of a Scanning Electron Microscope (SEM) capture of a microscopic botany sample`,
		pic: `blueWave.jpg`,
		page: 0
	},

	'darwinPortraits': {
		title: `Darwinian Portraits`,
		description: `A family portrait with my family as Darwin finches, exhibiting our varying "beak phenotypes"`,
		pic: `darwinPortraits2.gif`,
		page: 0
	},

//graphic design//

	'sparkBranding': {
		title: `Branding: "Project Spark"`,
		description: `Branding design for a company's product campaign`,
		pic: `sparkBranding.png`,
		page: 0
	},

	'expiiFlyer': {
		title: `Company Flyer: Expii`,
		description: `A promotional flyer to gain recognition for an online learning website`,
		pic: `expiiFlyer.png`,
		page: 0
	},

	'saveTheDate': {
		title: `Save the Date Postcards`,
		description: `Postcard-style save the dates for a wedding`,
		pic: `saveTheDate.png`,
		page: 0
	},

	'postcards': {
		title: `Marketing Postcards`,
		description: `A family portrait with my family as Darwin finches, exhibiting our varying "beak phenotypes"`,
		pic: `postcards.jpg`,
		page: 0
	},

	'snellen': {
		title: `Personalized Snellen Chart`,
		description: `Personalized Snellen Chart for my ophthalmologist mom on Mother's Day`,
		pic: `snellen.jpg`,
		page: 0
	},

	'CIAJ': {
		title: `Event Flyers: Workshops`,
		description: `Flyer for a cancer patient's workshop to personify and mentally separate from one's cancer`,
		pic: `CIAJflyers.jpg`,
		page: 0
	},

	'starMap': {
		title: `Star Maps`,
		description: `A print including a map of the stars at certain dates and locations`,
		pic: `starMap.jpg`,
		page: 0
	},

	'tobiiShirt': {
		title: `Shirt Design: ALS Walk`,
		description: `Photo manipulation of a Scanning Electron Microscope (SEM) capture of a microscopic botany sample`,
		pic: `tobiiShirt.png`,
		page: 0
	},

	'pirateShirt': {
		title: `Shirt Design: Alpha Phi x Princess Bride`,
		description: `Photo manipulation of a Scanning Electron Microscope (SEM) capture of a microscopic botany sample`,
		pic: `pirateShirt.png`,
		page: 0
	},

	'verdeShirt': {
		title: `Shirt Design: Verde Magazine`,
		description: `A family portrait with my family as Darwin finches, exhibiting our varying "beak phenotypes"`,
		pic: `verdeShirt.jpg`,
		page: 0
	},

	'infographics': {
		title: `Infographics`,
		description: `A collection of infographics on medical topics`,
		pic: `mps1.png`,
		page: 0
	},

	'indesign': {
		title: `InDesign e-Guides`,
		description: `Career e-guides built out in InDesign for W.E.S.`,
		pic: `wes-01.png`,
		page: 0
	},

//craft//

'punkNecklace': {
		title: `Jewelry`,
		description: `Collection of handmade jewelry`,
		pic: `punkNecklace.jpg`,
		page: 0
	},

'dadCo': {
		title: `"Dad Co" Shirt and Album`,
		description: `Handmade shirt decal and a spoof of Bad Company's album cover with my dad's face on it`,
		pic: `dadCo.jpg`,
		page: 0
	},

'soaps': {
		title: `Handmade Soaps`,
		description: `Varying scented handmade soaps`,
		pic: `soaps.jpg`,
		page: 0
	},

'urn': {
		title: `Clay Dog Urn`,
		description: `Small clay urn created with love for my dog, Pal`,
		pic: `urn.png`,
		page: 0
	},

'blueSoap': {
		title: `Handmade Soaps`,
		description: `Soap bars with varying looks, scents, and dermatologic properties`,
		pic: `blueSoap.jpg`,
		page: 0
	},

'saraBook': {
		title: `Photo Album`,
		description: `Handmade photo album for a bachelorette trip`,
		pic: `saraBook.jpg`,
		page: 0
	},

'bathSalts': {
		title: `Floral Bath Salts`,
		description: `Homemade lavendar and rose bath salts`,
		pic: `bathSalts.jpg`,
		page: 0
	},

'cal': {
		title: `Dry Erase Calendar`,
		description: `Calendar made from color swatches and a frame`,
		pic: `cal.png`,
		page: 0
	},

'resinBookmarks': {
		title: `Resin Bookmarks`,
		description: `Dried flowers suspended in resin to make varying bookmarks`,
		pic: `resinBookmarks.png`,
		page: 0
	},

'momPillow': {
		title: `Watercolor Pillow`,
		description: `A throw pillow with a watercolor effect painted`,
		pic: `momPillow.png`,
		page: 0
	},

'greetingCards': {
		title: `Greeting Cards`,
		description: `Collection of drawn and paper-cutout cards`,
		pic: `greetingCards.jpg`,
		page: 0
	},

'nail-pier': {
		title: `Nail Art - Pier`,
		description: `Nail polish`,
		pic: `nail-pier.jpg`,
		page: 0
	},

'nail-nyc': {
		title: `Nail Art`,
		description: `Collection of nail polish art done on myself and others`,
		pic: `nail-nyc.jpg`,
		page: 0
	},

'nail-tiger': {
		title: `Nail Art - Tiger`,
		description: `Nail polish`,
		pic: `nail-tiger.jpg`,
		page: 0
	},

'nail-xmas': {
		title: `Nail Art - Christmas`,
		description: `Nail polish`,
		pic: `nail-xmas.jpg`,
		page: 0
	},

'nail-moon': {
		title: `Nail Art - Moon`,
		description: `Nail polish`,
		pic: `nail-moon.jpg`,
		page: 0
	},

'nail-sunset': {
		title: `Nail Art - Sunset`,
		description: `Nail polish`,
		pic: `nail-sunset.jpg`,
		page: 0
	},

'nail-moon': {
		title: `Nail Art - Moon`,
		description: `Nail polish`,
		pic: `nail-moon.jpg`,
		page: 0
	},


//lettering//

'lettering-board1': {
		title: `A-Frame Sign Designs`,
		description: `Chalk on blackboard`,
		pic: `lettering-board1.jpg`,
		page: 0
	},

'lettering-board2': {
		title: `Paper Source Advertising`,
		description: `Chalk on blackboard`,
		pic: `lettering-board2.jpg`,
		page: 0
	},

'lettering-board3': {
		title: `Paper Source Advertising`,
		description: `Chalk on blackboard`,
		pic: `lettering-board3.jpg`,
		page: 0
	},

'lettering-board4': {
		title: `Paper Source Advertising`,
		description: `Chalk on blackboard`,
		pic: `lettering-board4.jpg`,
		page: 0
	},

'lettering-board5': {
		title: `Paper Source Advertising`,
		description: `Chalk on blackboard`,
		pic: `lettering-board5.jpg`,
		page: 0
	},

'lettering-board6': {
		title: `Paper Source Advertising`,
		description: `Chalk on blackboard`,
		pic: `lettering-board6.jpg`,
		page: 0
	},

'lettering-sign1': {
		title: `Product Labeling`,
		description: `Chalk on blackboard`,
		pic: `productLabeling3.png`,
		page: 0
	},

'lettering-sign2': {
		title: `Advertisement Designs`,
		description: `Chalk on blackboard`,
		pic: `lettering-sign2.jpg`,
		page: 0
	},

'lettering-sign3': {
		title: `Paper Source Advertising`,
		description: `Chalk on blackboard`,
		pic: `lettering-sign3.jpg`,
		page: 0
	},

'lettering-letter1': {
		title: `Paper Mail Handlettering`,
		description: `Ink on paper`,
		pic: `lettering-letter1.jpg`,
		page: 0
	},

'jabberwocky': {
		title: `"The Jabberwocky" Calligraphy Book`,
		description: `Ink, using nibs: C2, B2, pointed #56`,
		pic: `jabberwocky.gif`,
		page: 0
	},

'lettering-cmu1': {
		title: `Alien Calligraphy`,
		description: `Ink, using B2 nib`,
		pic: `lettering-cmu1.jpg`,
		page: 0
	},

'lettering-cmu2': {
		title: `Latin Calligraphy`,
		description: `Ink, using C2 nib`,
		pic: `lettering-cmu2.jpg`,
		page: 0
	},

'lettering-cmu3': {
		title: `Negative Space Lettering`,
		description: `Construction paper cutouts`,
		pic: `lettering-cmu3.jpg`,
		page: 0
	},

'kidFont': {
		title: `Children's Book Font`,
		description: `Digital`,
		pic: `kidFont.jpg`,
		page: 0
	},

}
