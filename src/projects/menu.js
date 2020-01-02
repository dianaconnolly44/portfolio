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
					'explainer',
					'holiday',
					'whiteboard',
					'frameByFrame',
					'dadCard',
				]
			},

			{
				id: 'loops',
				label: 'Loops',
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
					'figures',
					'portraits',
					'still-lifes',
				]
			},

			{
				id: 'painting',
				label: 'Painting',
				projects: [
					'self-portraits',
					'dissectingSelf',
					'boobs',
					'2lints',
				]
			},

			{
				id: 'interactive',
				label: 'Interactive',
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
