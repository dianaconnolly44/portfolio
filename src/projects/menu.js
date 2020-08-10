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
					'pathways',
					//'thesis',
					'frida',
					
					'fall',
					
					'andreaBook',
					'bunny',
					'energy',
					'color',
					'trump',
					
					'achieve',
					'activity',
					'goingForGold',
					'expii',
					't1d',
					
					
					

				]
			},

			

			{
				id: 'media',
				label: 'Media',
				projects: [
					'expiiMedia1',
					'expiiMedia2',
					'hotspots',
					'lloyd',
					
					'verdeBaby',
					'verdeGun',
					'verdeElephant',
					'verdeSam',
					'verdeSweetheart',
					'verdeLips',
					'verdeOccupy',
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
					'colorShadowGirl',
					'birb',
					'icyGirl',

					'joker',
					'jackson',
					'alyssa',
					
					'selfPencil',
					'shell',
					'stillLifePencil',
					
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
					'boobs',
					'dissect',
					'eye',
					'wonky1',
					'wonky2',
					'rococoLint',
					'young8',
					'model',
					'Lint',
					'young7',
					'plane',
					'botanical1',
					//'botanical2',
					//'botanical3',
					//'botanical4',
					'young4',
					'young2',
					'young5',
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

					'tattoo',
					
					'ducks',
					'dreamBox',
					'artBioPetri',
					'darwinPortraits',
					'spider',
					

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
					'104dragMouseRainbowBalls',

					'104walkingMan',
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
					'indesign',
					'infographics',
					'saveTheDate',
					'flipfoot',
					'sparkBranding',
					'expiiFlyer',
					'starMap',
					'postcards',
					'CIAJ',
					'snellen',
					'verdeShirt',
					//'pirateShirt',
					'tobiiShirt',
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
