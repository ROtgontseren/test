<script>
	import Menu from './Header.svelte';
	import Footer from './footer/+page.svelte';
	import '../app.css';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="app">
	<div class="test">
		<Menu />

		<main>
			{@render children()}
		</main>
	</div>
	<div class="footer">
		<Footer />
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.test {
		flex: 1;
		display: flex;
		flex-direction: row;
		background-color: #18181b;
	}

	main {
		display: flex;
		flex-direction: column;
		width: 100%;
		overflow-y: auto;
		padding-bottom: 60px;
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #18181b;
		z-index: 10;
		text-align: center;
	}
</style>
