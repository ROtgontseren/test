<script>
	// @ts-nocheck
	import Image1 from '../../lib/images/1.png';
	import Image2 from '../../lib/images/2.png';
	import Image3 from '../../lib/images/3.png';
	import Image4 from '../../lib/images/4.png';
	import Image5 from '../../lib/images/5.png';

	let items = [
		{
			id: 1,
			title: 'МУСТА Т.Бат-Оч',
			image: Image1
		},
		{
			id: 2,
			title: 'МУСТА Т.Бат-Оч',
			image: Image2
		},
		{
			id: 3,
			title: 'МУСТА Т.Бат-Оч',
			image: Image3
		},
		{
			id: 4,
			title: 'МУСТА Т.Бат-Оч',
			image: Image4
		},
		{
			id: 5,
			title: 'МУСТА Т.Бат-Оч',
			image: Image5
		}
	];
</script>

<div class="main">
	<div class="title">
		<h2>Шинээр нэмэгдсэн бүтээлүүд</h2>
		<span>Бүгд</span>
	</div>
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
			margin-bottom: 1rem;
		}

		.card {
			flex-shrink: 0;
			width: 160px;
			scroll-snap-align: start;
		}

		h2 {
			font-size: 1rem;
			margin: 0;
		}

		span {
			color: #fff;
			margin: 0;
			font-size: 0.8rem;
		}
		.title {
			margin-top: 1rem;
			margin-bottom: 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 0.5rem;
		}
	}

	@media (max-width: 1024px) and (min-width: 601px) {
		.card-container {
			display: flex;
			flex-flow: row;
			gap: 1rem;
			padding: 0.5rem;
			overflow-x: auto;
			margin-bottom: 1rem;
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
			flex-flow: row;
			gap: 1rem;
			padding: 0.5rem;
			overflow-x: auto;
			margin-bottom: 1rem;
		}

		.card {
			width: 200px;
		}

		h2 {
			font-size: 2rem;
		}

		h3 {
			font-size: 1rem;
		}
	}
</style>
