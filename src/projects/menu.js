const menu = [
	
	{
		id: 'illustration',
		label: 'Illustration',
		submenu: [
			
			{
				id: 'childrens',
				label: `Children's`,
				projects: [
				]
			},

			{
				id: 'editorial',
				label: 'Editorial',
				projects: [
				]
			},

			{
				id: 'iconography',
				label: 'Iconography',
				projects: [
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
					'dadCard',
					'holiday',
					'whiteboard',
					'frameByFrame',
				
				]
			},

			{
				id: 'loops',
				label: 'Loops',
				projects: [
					'banana',
					'dadMotorcycle',
					'heart',
					'skulls',
					'turkey',
					'pumpkins',
					'clock',
					'hanukkah',
					'bFriday',
					'ornaments',
					'ribbon',
					'NYE',

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
					'inkHair',
					'icyGirl',
					'charcoal',
					'orangeDrawing',
					
					'figure1',
					'figure2',
					'colorShadowGirl',
					'figure3',
					'figure4',
					'figure5',
					'shell',
					'handCharcoal',
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
					'Lint',
					'young8',
					'model',
					'rococoLint',
					'botanical',
					'young4',
					'young2',
					'young7',
					'huesGrid',
					'plane',
					'young5',
					
					'jesusme-',
				]
			},

			{
				id: 'interactive',
				label: 'Interactive',
				projects: [
					'flipfoot',
					'spaceArt',
					'104bodies',
					'104eyes',
					'migraineGlasses',
					'artBioPetri',
					'hairGod',
					'phenotype',
					'104faces',
					'dreamBox',
					'ducks',
					'walkCycle',
					'paddleBall',
					'Necklace',
					'oppositeBalls',
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
					'figures',
					'portraits',
					'still-lifes',
				]
			},

			{
				id: 'craft',
				label: 'Craft',
				projects: [
					'self-portraits',
					'dissectingSelf',
					'boobs',
					'2lints',
				]
			},

			{
				id: 'lettering',
				label: 'Lettering',
				projects: [
					'flipfoot',
					'space-art',
					'dreamBox',
					'ducks',
					'migraine-glasses',
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
