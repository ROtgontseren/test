<script>
	import { page } from '$app/state';
	import Mmusic from '$lib/images/mmusic.png';
	import Liked from '$lib/images/Rectangle 8.png';
	import List from '$lib/images/Rectangle 9.png';
	import Recent from '$lib/images/Recent.png';
	import Heart from '$lib/images/Heart.png';
	import Home from '$lib/images/home.png';
	import Search from '$lib/images/search.png';
	import Pluscircle from '$lib/images/plus-circle.png';
</script>

<nav>
	<div class="menuItem">
		<div>
			<div class="imgBox">
				<img src={Mmusic} alt="Mmusic logo" />
			</div>
			<div>
				<h5 aria-current={page.url.pathname === '/' ? 'page' : undefined}>
					<div class="box">
						<img src={Home} alt="home" width="20" height="20" />
						<a href="/">Нүүр</a>
					</div>
				</h5>
			</div>
			<div>
				<h5 aria-current={page.url.pathname === '/search' ? 'page' : undefined}>
					<div class="box">
						<img src={Search} alt="search" width="20" height="20" />
						<a href="/search">Хайх</a>
					</div>
				</h5>
			</div>
		</div>
		<div class="myBorder">
			<h4 style="color:#525252">Миний сан</h4>
			<div>
				<h5 aria-current={page.url.pathname === '/lastListen' ? 'page' : undefined}>
					<div class="box">
						<img src={Recent} alt="recent" width="20" height="20" />
						<a href="/lastListen">Сүүлд сонссон</a>
					</div>
				</h5>
			</div>
			<div>
				<h5 aria-current={page.url.pathname === '/liked' ? 'page' : undefined}>
					<div class="box">
						<img src={Heart} alt="liked" width="20" height="20" />
						<a href="/liked">Дуртай</a>
					</div>
				</h5>
			</div>
			<div>
				<h5 aria-current={page.url.pathname === '/addMix' ? 'page' : undefined}>
					<div class="box">
						<img src={Pluscircle} alt="add mix" width="20" height="20" />
						<a href="/addMix">Микс үүсгэх</a>
					</div>
				</h5>
			</div>
		</div>
		<div>
			<h5 aria-current={page.url.pathname === '/list' ? 'page' : undefined}>
				<div class="box">
					<img src={Liked} alt="liked songs" width="32" height="32" />
					<a href="/list">Муугүй лист</a>
				</div>
			</h5>
			<div>
				<h5 aria-current={page.url.pathname === '/likedSongs' ? 'page' : undefined}>
					<div class="box">
						<img src={List} alt="liked songs" width="32" height="32" />
						<a href="/likedSongs">Гоё дуунууд</a>
					</div>
				</h5>
			</div>
		</div>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: start;
		width: 400px;
		background-color: #27272a;
	}

	.menuItem {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin: 2rem;
	}

	.myBorder {
		border-bottom: 3px solid #52525b;
	}

	.imgBox {
		margin-bottom: 4rem;
	}

	.box {
		display: flex;
		align-items: center;
		margin: 0;
	}

	img {
		margin-right: 10px;
	}

	h4 {
		font-size: 20px;
	}

	h5 {
		display: flex;
		justify-content: start;
		align-items: center;
		color: #fff;
		font-size: 24px;
		position: relative;
	}

	h5[aria-current='page']::before {
		content: '';
		position: absolute;
		right: -10px;
		width: 6px;
		height: 20px;
		background-color: var(--color-theme-2);
	}

	nav a {
		display: flex;
		align-items: center;
		color: #fff;
		text-decoration: none;
		font-size: 28px;
		padding-right: 20px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	h5[aria-current='page'] a:hover {
		color: var(--color-theme-2);
	}

	@media (max-width: 768px) {
		nav {
			width: 100%;
		}

		.menuItem {
			margin: 1rem;
		}

		.myBorder {
			margin-bottom: 1rem;
			border: none;
		}

		.imgBox {
			margin-bottom: 2rem;
		}

		.box {
			font-size: 16px;
		}

		img {
			width: 18px;
			height: 18px;
		}

		h5 {
			font-size: 18px;
		}

		nav a {
			font-size: 20px;
			padding-right: 10px;
		}

		.menuItem h5 {
			display: none;
		}
	}

	@media (max-width: 480px) {
		nav {
			display: none;
		}
	}
</style>
