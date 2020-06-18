const menu = [
	
	{
		id: 'illustration',
		label: 'Illustration',
		submenu: [
			
			{
				id: 'childrens',
				label: `Children's`,
				projects: [
					'gaucher',
					'pathways',
					//'thesis',
					'frida',
					
					'fall',
					
					'andreaBook',
					'bunny',
					'energy',
					'color',
					'trump',
					'activity',
					'achieve',
					
					't1d',
					'expii',
					'expii2',
					'expii1',

				]
			},

			

			{
				id: 'media',
				label: 'Media',
				projects: [
					'expii1',
					'expii2',
					'hotspots',
					'verdeGun',
					'verdeElephant',
					'verdeBaby',
					'verdeSam',
					'verdeSweetheart',
					'lloyd',
		
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
					'tobiiTopographic',
					'tobiiPeople',
					'tobiiASL',
					'tobiiTech',
					'tobiiAnimals',
					'tobiiObjects',
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
					'jackson',
					'alyssa',
					'joker',
					'shell',
					'stillLifePencil',
					'inkHair',
					'selfPencil',
					'charcoal',
					'orangeDrawing',
					'colorShadowGirl',
					'birb',
					'icyGirl',
					'handCharcoal',
					'figure4',
					'figure5',
					'figure1',
					'figure2',
					'figure3',
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
					'botanical2',
					'botanical3',
					'botanical4',
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
					'phenotype',

					'sugarBoxes',
					'spaceArt',
					
					
				]
			},

			{
				id: 'code',
				label: 'Code',
				projects: [
					'104eyes',
					'104bodies',
					
					'walkCycle',
					'paddleBall',
					'oppositeBalls',
					'104faces',
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
					
					'flipfoot',
					'sparkBranding',
					'expiiFlyer',
					'indesign',
					'infographics',
					
					
					
					
					'postcards',

					'saveTheDate',
					'snellen',
					'CIAJ',
					'starMap',
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
					'blueSoap',
					'greetingCards',
					'dadCo',
					
					'punkNecklace',
					'bathSalts',
					'cal',
					'nail-nyc',
					'momPillow',
					'soaps',
					'saraBook',					
				]
			},

			{
				id: 'lettering',
				label: 'Lettering',
				projects: [
					'lettering-cmu2',
					'lettering-cmu1',
					'jabberwocky',
					'kidFont',
					'lettering-board1',
					
					'lettering-sign2',
					
					
					'lettering-letter1',
					
					//'lettering-sign3',
					'lettering-sign1',
					//'lettering-cmu3',
					//'lettering-board4',
					//'lettering-board3',
					//'lettering-board2',
					
					//'lettering-board5',
					//'lettering-board6',
					
					
					
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
