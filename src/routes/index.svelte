<script>
	import Store from "$lib/Store.svelte"
	import * as data from "$lib/data.js"
	let loaded = false

	$: stores = loaded ? data.stores : data.stores.slice(0,3)
</script>

<h1>Nearby Stores</h1>

{#each stores as store}
	<Store {...store} />
{/each}

{#if !loaded}
	<p>
		<button on:click={() => (loaded = true)}>Load more</button>
	</p>
{/if}

<style>
	p {
		text-align: center;
	}
</style>
