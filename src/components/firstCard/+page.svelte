<script>
	// @ts-nocheck
	import FirstImage from "../../lib/images/first.png";
</script>

<div class="card-container">
	<img src={FirstImage} alt="first" class="card-img" />
</div>

<style>
	.card-container {
		width: 100%;
		height: 200px;
	}

	.card-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
