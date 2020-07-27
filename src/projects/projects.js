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
import { page as verdeBaby } from './pages/verdeBaby';
import { page as verdeElephant } from './pages/verdeElephant';
import { page as verdeGun } from './pages/verdeGun';
import { page as verdeInternal } from './pages/verdeInternal';
import { page as verdeLips } from './pages/verdeLips';
import { page as verdeOccupy } from './pages/verdeOccupy';
import { page as verdeSam } from './pages/verdeSam';
import { page as verdeSweetheart } from './pages/verdeSweetheart';
import { page as expiiMedia1 } from './pages/expiiMedia1';
import { page as expiiMedia2 } from './pages/expiiMedia2';
import { page as lloyd } from './pages/lloyd';
import { page as hotspots } from './pages/hotspots';
import { page as seasonsOfColor } from './pages/seasonsOfColor';
import { page as growATomato } from './pages/growATomato';
import { page as frida } from './pages/frida';
import { page as perfectDay } from './pages/perfectDay';
import { page as whoCanDoIt } from './pages/whoCanDoIt';
import { page as trump } from './pages/trump';
import { page as myCondition } from './pages/myCondition';
import { page as tobiiPathways } from './pages/tobiiPathways';
import { page as kingdomOfPlenty } from './pages/kingdomOfPlenty';
import { page as expiiTurkey } from './pages/expiiTurkey';
import { page as expiiPumpkins } from './pages/expiiPumpkins';
import { page as expiiDLS } from './pages/expiiDLS';
import { page as expiiOrnaments } from './pages/expiiOrnaments';
import { page as expiiRibbon } from './pages/expiiRibbon';
import { page as expiiBlackFriday } from './pages/expiiBlackFriday';
import { page as expiiHannukah } from './pages/expiiHannukah';
import { page as expiiNYE } from './pages/expiiNYE';
import { page as expiiSkulls } from './pages/expiiSkulls';
import { page as jumoBanana } from './pages/jumoBanana';
import { page as anatomicalHeartGIF } from './pages/anatomicalHeartGIF';
import { page as dadMotorcycleGIF } from './pages/dadMotorcycleGIF';
import { page as jumoHolidayVideo } from './pages/jumoHolidayVideo';
import { page as dadeCard } from './pages/dadeCard';
import { page as whiteboardAnimation } from './pages/whiteboardAnimation';
import { page as careconnect } from './pages/careconnect';
import { page as t1dGwen } from './pages/t1dGwen';
import { page as expiiGraphics } from './pages/expiiGraphics';
import { page as jumoAchieve } from './pages/jumoAchieve';
import { page as jumoGaucherActivity } from './pages/jumoGaucherActivity';
import { page as goingForGold } from './pages/goingForGold';




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
		pic: `hotspots.jpg`,
		page: hotspots
	},


	'thesis': {
		title: `Undergrad Thesis: Communication Symbols`,
		description: `Researched most effective visuals to aid Shabbat participation for autistic and young audiences`,
		pic: `thesis_v2.jpg`,
		page: thesis
	},

	'frida': {
		title: `"Who Was Frida Kahlo?"`,
		description: `Educational book about Kahlo's life and legacy`,
		pic: `frida.jpg`,
		page: frida
	},

	'myCondition': {
		title: `"My Condition & Me"`,
		description: `Educational book for toddlers about their health condition`,
		pic: `gaucher2.jpg`,
		page: myCondition
	},

	'color': {
		title: `"A Perfect Day"`,	
		description: `Max and Zoey's perfect day`,	
		pic: `color.jpg`,
		page: perfectDay
	},

	'achieve': {
		title: `Activity Book`,
		description: `Book of coloring, stickers, and games`,
		pic: `achieve_v3.jpg`,
		page: jumoAchieve
	},

	'bunny': {
		title: `"Growing a Tomato"`,
		description: `Educational book about gardening`,
		pic: `bunny.jpg`,
		page: growATomato
	},

	'activity': {
		title: `Activity Book`,
		description: `Book of coloring and games for children`,
		pic: `activity_v2.jpg`,
		page: jumoGaucherActivity
	},

	'trump': {
		title: `"The White House"`,
		description: `Educational book about the White House and inauguration`,
		pic: `trump.jpg`,
		page: trump
	},

	'energy': {
		title: `"Who Can Do It?"`,
		description: `Educational book about sustainability efforts`,
		pic: `energy.jpg`,
		page: whoCanDoIt
	},

	'pathways': {
		title: `"Pathways"`,	
		description: `Guide for kids and teachers on using a new product`,	
		pic: `pathways.jpg`,
		page: tobiiPathways
	},

	'fall': {
		title: `"Seasons of Color"`,
		description: `Educational book about colors associated with seasons`,
		pic: `fall.jpg`,
		page: seasonsOfColor
	},

	't1d': {
		title: `"T1D & Gwen"`,
		description: `Book concept for teens with Type 1 Diabetes`,
		pic: `t1d3.jpg`,
		page: t1dGwen
	},

	'expii': {
		title: `Expii Graphics`,
				description: `Graphics to pair with Expii's e-learning webiste`,
		pic: `expii.jpg`,
		page: expiiGraphics
	},

	'andreaBook': {
		title: `"Kingdom of Plenty"`,
		description: `A children's book concept`,
		pic: `andreaBook.jpg`,
		page: kingdomOfPlenty
	},

	'goingForGold': {
		title: `"Going for Gold"`,
		description: `Story book about running and competition`,
		pic: `goingForGold.jpg`,
		page: goingForGold
	},


//media illo//

	'lloyd': {
		title: `"The Eleventh Hour"`,
		description: `Prog rock album cover`,
		pic: `lloyd.jpg`,
		page: lloyd
	},

	'expiiMedia1': {
		title: `Editorial Illustration`,
		description: `Depicting varying math and science explanation types (text, video, drawn) housed on an e-learning site`,
		pic: `expii1.jpg`,
		page: expiiMedia1
	},

	'expiiMedia2': {
		title: `Editorial Illustration`,
		description: `Depicting a sense of community and communication on social media for an e-learning site`,
		pic: `expii2_v3.jpg`,
		page: expiiMedia2
	},

	'verdeBaby': {
		title: `"Halloween: All Grown Up?"`,
		description: `News magazine cover illustration`,
		pic: `verdeBaby.jpg`,
		page: verdeBaby
	},

	'verdeSam': {
		title: `"I Want YOU to be Happy"`,
		description: `News magazine cover illustration`,
		pic: `verdeSam.jpg`,
		page: verdeSam
	},

	'verdeElephant': {
		title: `"The Elephant in the Classroom"`,	
		description: `News magazine cover illustration`,	
		pic: `verdeElephant.jpg`,
		page: verdeElephant
	},

	'verdeSweetheart': {
		title: `"Don't Call Me Sweetheart"`,
		description: `News magazine cover illustration`,
		pic: `verdeSweetheart.jpg`,
		page: verdeSweetheart
	},

	'verdeGun': {
		title: `"Gunning for Change"`,
		description: `News magazine cover illustration`,
		pic: `verdeGun.jpg`,
		page: verdeGun
	},

	'verdeLips': {
		title: `Untitled`,
		description: `News magazine cover illustration`,
		pic: `verdeLips.jpg`,
		page: verdeLips
	},

	'verdeOccupy': {
		title: `"Occupy [Here]"`,
		description: `News magazine cover illustration`,
		pic: `verdeOccupy.jpg`,
		page: verdeOccupy
	},

	'verdeInternal': {
		title: `News Article Illustrations`,
		description: `Illustrations to pair with news articles`,
		pic: `verdeInternal.jpg`,
		page: verdeInternal
	},

//iconography//

	'tobiiAnimals': {
		title: `Animals Symbols`,
		description: `Picture communication symbols (PCS) on general conversation topics`,
		pic: `thinlineThumbnail.jpg`,
		page: tobiiAnimals
	},

	'tobiiPeople': {
		title: `People Symbols`,
		description: `Picture communication symbols (PCS) on conversation topics about people`,
		pic: `peopleThumbnail.jpg`,
		page: tobiiPeople
	},

	'tobiiObjects': {
		title: `Object Symbols`,
		description: `Picture communication symbols (PCS) on conversation topics about objects`,
		pic: `objectsThumbnail.jpg`,
		page: tobiiObjects
	},

	'tobiiTech': {
		title: `Technology Symbols`,
		description: `Picture communication symbols (PCS) on conversation topics about technology`,
		pic: `techThumbnail.jpg`,
		page: tobiiTech
	},

	'tobiiTopographic': {
		title: `Topographic Symbols`,
		description: `Picture communication symbols (PCS) to educate nonverbal children about topography`,
		pic: `africaThumbnail.jpg`,
		page: tobiiTopographic
	},

	'tobiiASL': {
		title: `American Sign Language`,
		description: `Picture communication symbols (PCS) on American Sign Language vocabulary`,
		pic: `aslThumbnail2.jpg`,
		page: tobiiASL
	},

	'tobiiHospital': {
		title: `Hospital Symbols`,
		description: `Picture communication symbols (PCS) to aid communication in a hospital setting`,
		pic: `hospitalThumbnail2.jpg`,
		page: tobiiHospital
	},

	'tobiiAvatars': {
		title: `Avatars`,
		description: `Visual representation of students' teachers`,
		pic: `avatarVictoria_s.jpg`,
		page: tobiiAvatars
	},

	'expiiIcons': {
		title: `"Get to Know Us": Hobby Icons`,
		description: `Icon representation of a company's individual team members' interests, for social media`,
		pic: `expiiIconFeature2.jpg`,
		page: expiiIcons
	},
	


//videos//

	'dadCard': {
		title: `Father's Day e-Card`,
		description: 'Adobe After Effects',
		pic: `dadcard2.gif`,
		page: dadeCard
	},

	'whiteboard': {
		title: `Whiteboard Animation`,
		description: 'Adobe After Effects',
		pic: `whiteboard2.gif`,
		page: whiteboardAnimation
	},

	'holiday': {
		title: `Holiday e-Card`,
		description: 'Adobe After Effects',
		pic: `holiday2.gif`,
		page: jumoHolidayVideo
	},

	'characterExplainer': {
		title: `Character Explainer Videos`,
		description: 'Adobe After Effects',
		pic: `characterExplainer44.gif`,
		page: careconnect
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
		pic: `assetCreation.jpg`,
		page: 0
	},

//loops//

	'dadMotorcycle': {
		title: `Dad's Motorcycle`,
		pic: `dadMotorcyclePurple.gif`,
		page: dadMotorcycleGIF
	},

	'banana': {
		title: `Healthy Food`,
		pic: `banana.gif`,
		page: jumoBanana
	},

	'heart': {
		title: `Anatomical Valentine`,
		pic: `heart.gif`,
		page: anatomicalHeartGIF
	},

	'skulls': {
		title: `I Have a Bone to Pick`,
		pic: `skulls-small.gif`,
		page: expiiSkulls
	},

	'turkey': {
		title: `Parading Around`,
		pic: `turkey-small.gif`,
		page: expiiTurkey
	},

	'pumpkins': {
		title: `Pumpkin Overload`,
		pic: `pumpkins-small.gif`,
		page: expiiPumpkins
	},

	'clock': {
		title: `Save the Day(light)`,
		pic: `clock-small.gif`,
		page: expiiDLS
	},

	'hanukkah': {
		title: `Hanukkah Candles`,
		pic: `hanukkah-small.gif`,
		page: expiiHannukah
	},

	'bFriday': {
		title: `Discount Dash`,
		pic: `bFriday-small.gif`,
		page: expiiBlackFriday
	},

	'ornaments': {
		title: `Weigh the Ornaments`,
		pic: `ornaments-small.gif`,
		page: expiiOrnaments
	},

	'ribbon': {
		title: `Cut the Ribbon`,
		pic: `ribbon-small.gif`,
		page: expiiRibbon
	},

	'NYE': {
		title: `Drop the Ball`,
		pic: `NYE-small.gif`,
		page: expiiNYE
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
		title: `Botanical Self Portraits`,
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
		pic: `young4_s.jpg`,
		page: 0
	},

	'young5': {
		title: `Untitled`,
		description: `Self portrait, gouache`,
		pic: `young5_s.jpg`,
		page: 0
	},

	'young7': {
		title: `Untitled`,
		description: `Oil`,
		pic: `young7_s.jpg`,
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
		pic: `sparkBranding.jpg`,
		page: 0
	},

	'expiiFlyer': {
		title: `Company Flyer: Expii`,
		description: `A promotional flyer to gain recognition for an online learning website`,
		pic: `expiiFlyer.jpg`,
		page: 0
	},

	'saveTheDate': {
		title: `Save the Date Postcards`,
		description: `Postcard-style save the dates for a wedding`,
		pic: `saveTheDate.jpg`,
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
		pic: `tobiiShirt.jpg`,
		page: 0
	},

	'pirateShirt': {
		title: `Shirt Design: Alpha Phi x Princess Bride`,
		description: `Photo manipulation of a Scanning Electron Microscope (SEM) capture of a microscopic botany sample`,
		pic: `pirateShirt.jpg`,
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
		pic: `mps1.jpg`,
		page: 0
	},

	'indesign': {
		title: `InDesign e-Guides`,
		description: `Career e-guides built out in InDesign for W.E.S.`,
		pic: `wes-01.jpg`,
		page: 0
	},

//craft//

'paperFlowers': {
		title: `Paper Flowers`,
		description: `Handmade large and small decorative paper flowers`,
		pic: `paperFlowers.jpg`,
		page: 0
	},

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
		pic: `urn.jpg`,
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
		pic: `cal.jpg`,
		page: 0
	},

'resinBookmarks': {
		title: `Resin Bookmarks`,
		description: `Dried flowers suspended in resin to make varying bookmarks`,
		pic: `resinBookmarks.jpg`,
		page: 0
	},

'momPillow': {
		title: `Watercolor Pillow`,
		description: `A throw pillow with a watercolor effect painted`,
		pic: `momPillow.jpg`,
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
		pic: `productLabeling3.jpg`,
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
