<script>
	import Coffee from "$lib/assets/coffee.jpeg"
	import { goto } from "$app/navigation"
	import { onDestroy, onMount } from "svelte"

	/** @type { NodeJS.Timeout } */
	let timer

	onMount(() => {
		timer = setTimeout(() => goto("/product/4"), 2000)
	})
	onDestroy(() => {
		clearTimeout(timer)
	})
</script>

<div class="loading-container">
	<h3>Scanning...  <span id="loading"></span> </h3>
	<img src={Coffee}>
</div>

<style>
	.loading-container {
		text-align: center;
	}

	#loading {
		display: inline-block;
		width: 1em;
		height: 1em;
		border: 3px solid rgba(0, 0, 0, 0.3);
		border-radius: 50%;
		border-top-color: #000;
		animation: spin 1s ease-in-out infinite;
		-webkit-animation: spin 1s ease-in-out infinite;
	}

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	img {
		width: 100%;
		border-radius: 1em;
	}
</style>
