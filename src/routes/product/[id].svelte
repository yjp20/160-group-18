<script context="module">
	import * as data from "$lib/data.js"
	export async function load({ params }) {
		let product = Object.values(data.products).find((v) => v.id == params.id)
		return { props: { product } }
	}
</script>

<script>
	import Rating from "$lib/eye.svelte"
	import Map from "$lib/assets/map.png"
	export let product
</script>

<h1>{product.name}</h1>
<p>
	<span><Rating />{product.rating}</span>
</p>

{#if product.desc}
	<h3> Tasting notes </h3>
	<p>{product.desc}</p>
{/if}

{#if product.certifications}
	<h3>Certifications</h3>
	{#each product.certifications as cert}
		<p>{cert}</p>
	{/each}
{/if}

<h3>Roasters</h3>
{#each product.roaster as roaster}
	<p>{roaster}</p>
{/each}

<h3>Origins</h3>
{#each product.farm as farm}
	<p>{farm}</p>
	<img src={Map} />
{/each}

<style>
	p :global(svg) {
		height: 1em;
	}

	h3 {
		margin-bottom: 0.25rem;
	}

	p {
		margin: 0.25em 0;
	}

	img {
		width: 100%;
	}
</style>
