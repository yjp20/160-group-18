<script context="module">
	import * as data from "$lib/data.js"
	export async function load({ params }) {
		let store = data.stores[params.id]
		return { props: { store } }
	}
</script>

<script>
	import Product from "$lib/Product.svelte"

	import Navigation from "$lib/navigation.svelte"
	import Rating from "$lib/thumbs-up.svelte"
	import Star from "$lib/star.svelte"

	export let store
</script>

<h1>{store.name}</h1>
<p>
	<span><Navigation />{store.distance}</span>{"  "}
	<span><Star />{store.star}</span>{" "}
	<span><Rating />{store.rating}</span>
</p>
<h3>Products</h3>
{#each store.products as product}
	<Product {...product}/>
{/each}

<style>
	p {
		margin: 0;
	}

	p :global(svg) {
		height: 1em;
	}
</style>
