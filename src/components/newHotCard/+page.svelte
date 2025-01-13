<script>
	// @ts-nocheck
	import Image1 from '../../lib/images/6.png';
	import Image2 from '../../lib/images/7.png';
	import Image3 from '../../lib/images/8.png';
	import Image4 from '../../lib/images/9.png';
	import Image5 from '../../lib/images/10.png';

	let items = [
		{
			id: 1,
			title: 'de Eight',
			image: Image1
		},
		{
			id: 2,
			title: 'Gangbay',
			image: Image2
		},
		{
			id: 3,
			title: 'Д.Отгонжаргал',
			image: Image3
		},
		{
			id: 4,
			title: 'Бичүү МУСТА',
			image: Image4
		},
		{
			id: 5,
			title: 'Г.Эрдэнэтунгалаг МУСТА',
			image: Image5
		}
	];
</script>

<div class="main">
	<h2>New Hot</h2>
	<div class="card-container">
		{#each items as item}
			<div class="card" key={item.id}>
				<img src={item.image} alt={item.title} class="card-img" />
				<div class="card-body">
					<h3>{item.title}</h3>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.main {
		width: 100%;
	}

	.card-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-between;
		padding: 1rem;
	}

	.card {
		background-color: #18181b;
		border-radius: 8px;
		height: 200px;
		width: 200px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		transition: transform 0.3s ease;
	}

	.card:hover {
		transform: translateY(-10px);
	}

	.card-img {
		width: 100%;
		height: 150px;
		object-fit: cover;
	}

	.card-body {
		padding: 1rem;
	}

	h2 {
		font-size: 2rem;
		color: #fff;
	}

	h3 {
		font-size: 0.7rem;
		color: #a1a1aa;
	}

	@media (max-width: 600px) {
		.card-container {
			display: flex;
			flex-flow: row;
			gap: 1rem;
			padding: 0.5rem;
			overflow-x: auto;
		}

		.card {
			flex-shrink: 0;
			width: 160px;
			scroll-snap-align: start;
		}

		h2 {
			font-size: 1rem;
		}

		h3 {
			font-size: 0.8rem;
		}
	}

	@media (max-width: 1024px) and (min-width: 601px) {
		.card-container {
			display: flex;
			flex-wrap: wrap; 
			justify-content: space-between;
		}

		.card {
			width: 220px;
		}

		h2 {
			font-size: 1.8rem;
		}

		h3 {
			font-size: 0.9rem;
		}
	}

	@media (min-width: 1025px) {
		.card-container {
			display: flex;
			justify-content: space-between;
		}

		.card {
			width: 250px;
		}

		h2 {
			font-size: 2rem;
		}

		h3 {
			font-size: 1rem;
		}
	}
</style>
