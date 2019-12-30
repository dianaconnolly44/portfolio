export const menu = [
	
	{
		id: 'illustration',
		label: 'Illustration',
		submenu: [

			{
				id: 'iconography',
				label: 'Iconography',
				projects: [
					'thesis',
					'jumo'
				]
			},
			
			{
				id: 'painting',
				label: 'Painting',
				projects: [
					'finals',
				]
			},

			{
				id: 'drawing',
				label: 'Drawing',
				projects: [
					'journal',
					'footbook'
				]
			},

		]
	},

	{
		id: 'graphic-design',
		label: 'Graphic Design',
		projects: [
			'thesis',
			'footbook'
		]
	},

	{
		id: 'crafts',
		label: 'Crafts',
		submenu: [

			{
				id: 'textiles',
				label: 'Textiles',
				projects: [
					'thesis',
					'jumo'
				]
			},
			
			{
				id: 'fabrics',
				label: 'Fabrics',
				projects: [
					'finals',
				]
			},

			{
				id: 'lettering',
				label: 'Lettering',
				projects: [
					'journal',
					'footbook'
				]
			},

		]
	},
];

export const flat = menu.reduce((all, item) => [...all, item, ...(item.submenu || [])], []);
