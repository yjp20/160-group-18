<script>
	import Back from "$lib/arrow-left.svelte";
	import Filter from "$lib/filter.svelte";
	import Settings from "$lib/settings.svelte";
</script>

<nav class="navbar">
	<a class="button" href="..">
		<Back />
	</a>
	<input class="input search" placeholder="Search..." />
	<button class="button" href=""><Filter/></button>
	<button class="button" href=""><Settings/></button>
</nav>

<main class="content">
	<slot></slot>
</main>

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		height: 100vh;
		font-family: "IBM Plex Sans", sans-serif;
		margin: 0;
		padding: 0;
	}

	:global(button), :global(.button) {
		color: inherit;
		font-size: inherit;
		display: inline-block;
		padding: 0.25em 0.5em;
		text-decoration: none;
		border-radius: 5px;
		border: 1px solid #ccc;
		background-color: white;
	}

	:global(button:hover), :global(.button:hover) {
		background-color: #f3f3f3;
	}

	:global(button:active), :global(.button:active) {
		background-color: #e3e3e3;
	}

	:global(.button) > :global(svg) {
		vertical-align: bottom;
	}

	:global(.input) {
		padding: 0.25em 0.75em;
		border-radius: 999px;
		border: 0;
		background-color: #e3e3e3;
	}

	.navbar {
		display: flex;
		padding: 0.75em;
		border-bottom: 1px solid #ccc;
		box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
		gap: 0.5em;
	}

	.navbar .search {
		flex: 1;
	}

	.content {
		padding: 0.75em;
		flex: 1;
		overflow-y: scroll;
	}
</style>
