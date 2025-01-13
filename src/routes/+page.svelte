<script>
	import Navbar from '../components/bodyNavbar/+page.svelte';
	import FirstCard from '../components/firstCard/+page.svelte';
	import NewHotCard from '../components/newHotCard/+page.svelte';
	import NewAddCard from '../components/newAddCard/+page.svelte';
	import CircleCard from '../components/circleCard/+page.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="box">
	<Navbar />
	<section>
		<FirstCard />
		<NewHotCard />
		<NewAddCard />
		<CircleCard />
	</section>
</div>

<style>
	section {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.box {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
