<script>
	import Back from "$lib/arrow-left.svelte"
	import Filter from "$lib/filter.svelte"
	import Settings from "$lib/settings.svelte"
	import Camera from "$lib/camera.svelte"
</script>

<div class="iphone">
	<nav class="navbar">
		<a class="button" href="..">
			<Back />
		</a>
		<form action="/search">
			<input name="q" class="input search" placeholder="Search..." />
		</form>
		<button class="button" href=""><Filter /></button>
		<button class="button" href=""><Settings /></button>
	</nav>

	<main class="content">
		<slot />
	</main>

	<a class="button" id="barcode" href="/scan">
		<Camera />
	</a>
</div>

<style>
	:global(body) {
		min-height: 100vh;
		display: flex;
		padding: 1em;
		margin: 0;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		background-color: black;
	}

	.iphone {
		position: relative;
		color: hsl(83, 35%, 8%);
		display: flex;
		flex-direction: column;
		width: 390px;
		height: 844px;
		font-family: "IBM Plex Sans", sans-serif;
		margin: 0;
		padding: 0;
		background: linear-gradient(#87b24400, #87b24420), white;
		border-radius: 1em;
		--shadow: hsla(83, 45%, 20%, 0.2);
	}

	:global(button),
	:global(.button) {
		box-sizing: border-box;
		color: inherit;
		font-size: inherit;
		display: inline-block;
		margin: 0;
		padding: 0.25em 0.5em;
		text-decoration: none;
		border-radius: 5px;
		border: 1px solid #ccc;
		background-color: white;
		text-align: center;
	}

	:global(button:hover),
	:global(.button:hover) {
		background-color: #f3f3f3;
	}

	:global(button:active),
	:global(.button:active) {
		background-color: #e3e3e3;
	}

	:global(button) :global(svg),
	:global(.button) :global(svg) {
		vertical-align: middle;
	}

	form {
		display: flex;
		width: 100%;
		margin: 0;
	}

	:global(.input) {
		padding: 0.25em 0.75em;
		border-radius: 999px;
		border: 0;
		background-color: var(--shadow);
	}

	.navbar {
		display: flex;
		padding: 0.75em;
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

	#barcode {
		position: absolute;
		bottom: 1em;
		right: 1em;
		border-radius: 999px;
		color: white;
		background-color: hsl(83, 45%, 48%);
		height: 3.5em;
		width: 3.5em;
		line-height: calc(3em - 0.5em);
		box-shadow: 0px 2px 4px 1px var(--shadow);
		box-sizing: border-box;
	}

	#barcode:active {
	}
</style>
