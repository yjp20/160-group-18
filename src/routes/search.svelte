<script context="module">
	export function load({ url }) {
		return { props: { q: url.searchParams.get("q") } }
	}
</script>

<script>
	import * as data from "$lib/data.js"
	import Store from "$lib/Store.svelte"
	import Product from "$lib/Product.svelte"
	/** @type { string } */
	export let q
	$: stores = data.stores.filter(
		(v) => v.name.toLowerCase().search(q.toLowerCase()) != -1
	)
	$: products = Object.values(data.products).filter(
		(v) => v.name.toLowerCase().search(q.toLowerCase()) != -1
	)
</script>

<h1>Search: {q}</h1>
<h3>Stores</h3>
{#each stores as store}
	<Store {...store} />
{/each}

<h3>Products</h3>
{#each products as product}
	<Product {...product} />
{/each}
