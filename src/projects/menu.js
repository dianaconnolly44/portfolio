const menu = [
	
	{
		id: 'illustration',
		label: 'Illustration',
		submenu: [
			
			{
				id: 'childrens',
				label: `Children's`,
				projects: [
					'myCondition',
					'activity',
					'achieve',

					'pathways',
					//'thesis',
					'frida',
					'fall',
					'energy',
					'bunny',
					'trump',
					'color',
					'andreaBook',
				
					'goingForGold',
					'expii',
					't1d',
					'Hbook',
				]
			},

			

			{
				id: 'media',
				label: 'Media',
				projects: [
					'grataCanisMajor',
					'expiiMedia1',
					'expiiMedia2',
					'hotspots',
					
					'infographics',
					'flipfoot',
					'saveTheDate',

					'lloyd',
					'verdeBaby',
					'verdeGun',
					'verdeElephant',
					'verdeSam',
					'verdeSweetheart',
					'verdeLips',
					'verdeOccupy',
					
					'colorShadowGirl',
					'birb',
					'icyGirl',
					'verdeInternal',
				]
			},

			{
				id: 'iconography',
				label: 'Iconography',
				projects: [
					'thesis',
					'tobiiObjects',
					'tobiiPeople',
					'tobiiTopographic',
					'tobiiASL',
					'tobiiTech',
					//'tobiiAnimals',
					'tobiiHospital',
					'expiiIcons',
					'tobiiAvatars',
				]
			},

		]
	},

	{
		id: 'animation',
		label: 'Animation',
		submenu: [
			
			{
				id: 'videos',
				label: `Videos`,
				projects: [
					'holiday',
					'iconExplainer',
					'characterExplainer',
					'textAnimation',
					'dadCard',
					'whiteboard',
					'frameByFrame',
					'transitionScreens',
					'assetCreation',
				]
			},

			{
				id: 'loops',
				label: 'Loops',
				projects: [
					'inktoberSandWitch',
					'inktoberPinecone',
					'inktoberFolliage',

					
					
					'inktoberCampfire',
					'inktoberOwl',
					'inktoberTrickOrTreat',
					'inktoberCider',
					'inktoberShroomPizza',
					'inktoberPaperWitch',

					'inktoberSweater',
					'inktoberBat',
					'inktoberCandyCorn',

					'inktoberCat',
					'inktoberScarecrow',
					'inktoberScarf',

					'inktoberApples',
					'inktoberHauntedHouse',
					'inktoberSpider',

					'inktoberMoon',
					'inktoberAcorns',
					//'inktoberBouquet',
					'inktoberShroomHat',

					'skulls',
					'turkey',
					'pumpkins',
					'clock',
					'hanukkah',
					'bFriday',
					'ornaments',
					'ribbon',
					'NYE',
					'dadMotorcycle',
					'banana',
					'heart',
				]
			},

		]
	},

	{
		id: 'art',
		label: 'Art',
		submenu: [
			{
				id: 'drawing',
				label: `Drawing`,
				projects: [

					'joker',
					'jackson',
					'alyssa',
					
					'selfPencil',
					'stillLifePencil',
					'shell',
					
					'handCharcoal',
					'charcoal',
					'orangeDrawing',
					
					
					'figure5',
					'figure3',
					'inkHair',
					//'figure4',
					//'figure1',
					//'figure2',
					
				]
			},

			{
				id: 'painting',
				label: 'Painting',
				projects: [
					'botanical1',

					'dissect',
					'eye',

					

					

					'young4',
					'young2',
					'young5',

					'young7',
					'plane',
					'young8',

					'rococoLint',
					'Lint',
					'model',

					'boobs',
					'wonky1',
					'wonky2',
					//'botanical2',
					//'botanical3',
					//'botanical4',
					
					//'jesusme',
				]
			},

			{
				id: 'mixed media',
				label: 'Mixed Media',
				projects: [
					
					'blueWave',
					'migraineGlasses',
					'hairGod',

					'artBioPetri',
					'darwinPortraits',
					'spider',

					'tattoo',
					
					'ducks',
					'dreamBox',
					
					

					'sugarBoxes',
					'spaceArt',
					'phenotype',
					
					
				]
			},

			{
				id: 'code',
				label: 'Code',
				projects: [
					'104eyes',
					'104bodyCards',
					'104city',

					'104faces',
					'104colorSliders',
					'104walkingMan',
					'104dragMouseRainbowBalls',

					
					'104paddleBall',
					'104yinAndYang',

					'104peaches',
					'104turtlesRacing',
					'104marioGame',

					

					'104fourPieChart',
					'104saraPortrait',
					'104pinkClock',

					

					'104soundBall',
					'104flagMountains',
					
				]
			},
		]
	},

	{
		id: 'design',
		label: 'Design',
		submenu: [
			{
				id: 'graphic',
				label: `Graphic`,
				projects: [
					'grataCanisMajor',
					'indesign',
					'infographics',
					'saveTheDate',
					'flipfoot',
					'sparkBranding',
					'expiiFlyer',
					
					
					'CIAJ',
					'postcards',
					'starMap',
					
					'verdeShirt',
					//'pirateShirt',
					'tobiiShirt',
					'snellen',
				]
			},

			{
				id: 'craft',
				label: 'Craft',
				projects: [
					
					'resinBookmarks',
					'dadCo',
					'bathSalts',
					'paperFlowers',
				
					
					'greetingCards',
					'urn',
					'HstarGift',
					'blueSoap',
					'punkNecklace',
					
					'cal',
					'nail-nyc',
					'momPillow',
					//'soaps',
					'saraBook',					
				]
			},

			{
				id: 'lettering',
				label: 'Lettering',
				projects: [
					'lettering-board1',
					'lettering-sign2',
					'kidFont',
					'lettering-cmu2',
					'lettering-cmu1',
					'jabberwocky',
					
					
					//'lettering-letter1',
					//'cal',
				]
			},
		]
	},

	{
		id: 'about',
		label: 'About',
	},
];

// cleanup
menu.forEach(item => {
	if(!item.submenu && !item.projects) item.projects = [];
	if(item.submenu) item.submenu.forEach(sub => {
		if(!sub.projects) sub.projects = [];
	})
})
const flat = menu.reduce((all, item) => [...all, item, ...(item.submenu || [])], []);

export {
	menu,
	flat
}
