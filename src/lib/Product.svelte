<script>
	import Eye from "$lib/eye.svelte"

	/** @type {number} **/
	export let id
	/** @type {string} **/
	export let name
	/** @type {string} **/
	export let rating
</script>

<a class="product" href="/product/{id}">
	<h3>{name}</h3>
	<p>
		<span><Eye/>{rating}</span>
	</p>
</a>

<style>
	p {
		margin: 0;
	}

	p :global(svg) {
		height: 1em;
	}

	h3 {
		margin: 0;
	}

	.product {
		display: block;
		text-decoration: none;
		color: inherit;

		background: white;
		border-left: 5px solid rgb(135, 178, 68);
		box-shadow: 0px 1px 3px 0px var(--shadow);
		padding: 0.5em;
		border-radius: 5px;
		margin-bottom: 0.5em;
	}
</style>
