<script>
	// @ts-nocheck
	import Flag from '../../lib/images/flag.png';
	import Bell from '../../lib/images/bell.png';
	import Arrow from '../../lib/images/arrow.png';
	import User from '../../lib/images/user.png';
	import Play from '../../lib/images/play.png';
	import RightArrow from '../../lib/images/rightArrow.png';
	import LeftArrow from '../../lib/images/leftArrow.png';
	import Mmusic from '$lib/images/mmusic.png';
	import Liked from '$lib/images/Rectangle 8.png';
	import List from '$lib/images/Rectangle 9.png';
	import Recent from '$lib/images/Recent.png';
	import Heart from '$lib/images/Heart.png';
	import Home from '$lib/images/home.png';
	import Search from '$lib/images/search.png';
	import Pluscircle from '$lib/images/plus-circle.png';
	let isOpen = false;

	const openNav = () => {
		isOpen = true;
	};
	const closeNav = () => {
		isOpen = false;
	};
</script>

<div class="main">
	<div class="phone">
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button on:click={openNav} style="cursor: pointer;">
			<i class="fa fa-bars fa-xl"></i>
		</button>

		<img src={Mmusic} alt="Mmusic logo" class="imgBox" />

		<div class="box">
			<img src={Bell} alt="bell" class="bell" />
			<img src={User} alt="user" class="user" />
		</div>
	</div>
	<div class="overlay {isOpen ? 'show' : ''}">
		<button class="closebtn" on:click={closeNav}>&times;</button>
		<div class="overlay-content">
			<div class="top">
				<div>
					<img src={Mmusic} alt="Mmusic logo" class="imgBox" />
					<h5>
						<div class="item">
							<img src={Home} alt="home" width="20" height="20" />
							<p>Нүүр</p>
						</div>
					</h5>
				</div>
				<div>
					<h5>
						<div class="item">
							<img src={Search} alt="search" width="20" height="20" />
							<p>Хайх</p>
						</div>
					</h5>
				</div>
				<div>
					<h5>
						<div class="item">
							<img src={Recent} alt="recent" width="20" height="20" />
							<p>Сүүлд сонссон</p>
						</div>
					</h5>
				</div>
				<div>
					<h5>
						<div class="item">
							<img src={Heart} alt="liked" width="20" height="20" />
							<p>Дуртай</p>
						</div>
					</h5>
				</div>
				<div>
					<h5>
						<div class="item">
							<img src={Pluscircle} alt="add mix" width="20" height="20" />
							<p>Микс үүсгэх</p>
						</div>
					</h5>
				</div>
			</div>
		</div>
	</div>
	<div class="card-container">
		<div class="left">
			<div class="arrow">
				<button>
					<img src={LeftArrow} alt="left arrow" class="card-img" />
				</button>
				<button>
					<img src={RightArrow} alt="right arrow" class="card-img" />
				</button>
			</div>
		</div>

		<div class="right">
			<div class="flag">
				<img src={Flag} alt="flag" class="img-flag" />
			</div>

			<div class="bell">
				<img src={Bell} alt="bell" />
			</div>

			<div class="user">
				<img src={User} alt="user" />
				<h5>Хэрэглэгч</h5>
				<button>
					<img src={Arrow} alt="arrow" class="arrow-img" />
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.phone {
		display: none;
	}
	.overlay-content {
		display: none;
	}
	.main {
		width: 80%;
	}

	.card-container {
		width: 100%;
		height: 25px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
		margin-top: 40px;
	}

	.arrow {
		display: flex;
		gap: 2rem;
	}

	.flag {
		width: 53%;
		border-radius: 5%;
	}

	.img-flag {
		margin-top: 7px;
		height: 50px;
		width: 100%;
		position: sticky;
	}

	.bell {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		height: 50px;
		width: 6%;
		background-color: #27272a;
	}

	.user {
		height: 50px;
		padding-left: 12px;
		background-color: #27272a;
		border-radius: 50px;
		width: 35%;
		display: flex;
		gap: 2rem;
		justify-content: space-between;
		align-items: center;
	}

	.left {
		width: 35%;
		display: flex;
		justify-content: start;
		align-items: center;
	}

	.right {
		width: 60%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.card-img {
		width: 10px;
		height: 24px;
	}

	.arrow-img {
		width: 16px;
		height: 12px;
		margin-right: 1rem;
	}

	h5 {
		color: #e4e4e7;
		font-size: 1rem;
	}

	button {
		background-color: transparent;
		border-radius: 100%;
		padding: 2px;
	}

	@media (max-width: 480px) {
		.overlay-content {
			display: block;
		}
		.box {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: 1rem;
			margin: 0;
		}
		.card-container {
			display: none;
		}

		.imgBox {
			height: 30px;
			width: 100px;
			padding-left: 1rem;
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;
		}

		.phone {
			width: 100%;
			height: 40px;
			padding: 1rem;
			padding-top: 2rem;
			background-color: transparent;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 1rem;
		}

		.phone button {
			background: none;
			border: none;
			color: white;
			font-size: 1rem;
			cursor: pointer;
		}
		.bell {
			height: 15px;
			width: 15px;
			background-color: transparent;
		}
		.user {
			height: 20px;
			width: 20px;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.top {
			margin-top: -150px;
		}
		.item {
			display: flex;
			gap: 1rem;
			color: #fff;
			padding-top: 0.8rem;
			padding-bottom: 0.8rem;
			padding-left: 1rem;
			align-items: center;
		}
		.overlay {
			height: 100%;
			width: 0;
			position: fixed;
			z-index: 1;
			left: 0;
			top: 0;
			background-color: #27272a;
			overflow-x: hidden;
			transition: 0.5s;
		}

		.overlay.show {
			width: 80%;
		}
		.overlay-content {
			position: relative;
			top: 25%;
			width: 100%;
			text-align: center;
			margin-top: 30px;
		}

		.closebtn {
			position: absolute;
			top: 20px;
			right: 20px;
			font-size: 30px;
			color: #fff;
			z-index: 1;
			cursor: pointer;
		}
		@media screen and (max-height: 600px) {
			.closebtn {
				font-size: 40px;
				top: 15px;
				right: 35px;
			}
		}
	}
</style>
