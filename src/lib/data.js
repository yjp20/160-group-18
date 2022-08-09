export const products = {
	sd_espresso_blend: {
		id:0,
		name:"Espresso Blend",
		desc:"Rich chocolate, Ash tray, Cigarettes",
		origin:"Columbia/Guatamala/Ethiopeia",
		rating: "Good",

		roaster: ["Stardollar Roasters"],
		farm: ["Unknown"],
	},
	oem_coffee: {
		id:1,
		name:"Generic coffee",
		origin:"Peru",
		rating: "Unknown",

		roaster: ["Oem Roasters"],
		farm: ["Unknown"],
	},
	columbia_coffee: {
		id:2,
		name:"1952 Colombia Light Roast",
		desc:"Fruit, Lychee Jelly, Sweet",
		origin:"Colombia",
		rating: "Great",

		certifications: ["Smithsonian Bird-friendly", "Fair Trade"],
		roaster: ["1952 Roasters Inc."],
		farm: ["Inmaculada Coffee Farms, Colombia"],
	},
	peru_coffee: {
		id:3,
		name:"1952 Peru Dark Roast",
		desc:"Chocolate, Rich, Smooth",
		origin:"Peru",
		rating: "Great",

		certifications: ["Smithsonian Bird-friendly", "Fair Trade"],
		roaster: ["1952 Roasters Inc."],
		farm: ["Andes Farm, Peru"],
	},
	guat_coffee: {
		id:4,
		name:"1952 Guatemala Medium Roast",
		desc:"Citrus fruit, Apple",
		origin:"Guatemala",
		rating: "Great",

		certifications: ["Smithsonian Bird-friendly", "Fair Trade"],
		roaster: ["1952 Roasters Inc."],
		farm: ["Las Lomas Coffee Farm, Guatemala"],
	},
	blend_coffee: {
		id:5,
		name:"1952 Medium Blend",
		desc:"Balanced, Fruit, Chocolate",
		origin:"Blend",
		rating: "Good",

		certifications: ["Smithsonian Bird-friendly", "Fair Trade"],
		roaster: ["1952 Roasters Inc."],
		farm: ["Andes Farm, Peru", "Las Lomas Coffee Farm, Guatemala", "Inmaculada Coffee Farms, Columbia"],
	},
}

export const stores = [
	{ id:0, name:"1952 Coffee",          distance:"0.1mi", rating:"Great", star:4.8,
		products: [products.guat_coffee, products.peru_coffee, products.columbia_coffee, products.blend_coffee] },
	{ id:1, name:"Paganini",             distance:"0.3mi", rating:"Unknown", star:4.5,
		products: [products.oem_coffee] },
	{ id:2, name:"Stardollars Shattuck", distance:"0.4mi", rating:"Ok", star:3.2,
		products: [products.sd_espresso_blend] },
	{ id:3, name:"Peet's Cafe Shattuck", distance:"0.5mi", rating:"Unknown", star:4.4,
		products: [products.oem_coffee] },
	{ id:4, name:"Juliets Coffee",       distance:"0.9mi", rating:"Good", star: 3.9,
		products: [products.oem_coffee] },
]

