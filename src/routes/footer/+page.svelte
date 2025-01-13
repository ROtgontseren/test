<script>
	import { onMount } from 'svelte';
	import { musicList } from '../musicList.js';
	import { writable } from 'svelte/store';
	import '@fortawesome/fontawesome-free/css/all.css';
	import Timeline from '$lib/images/timeline.png';
	import Volume from '$lib/images/volume.png';

	let CurrentSongIndex = 0;
	let wish = writable('false');
	let state = writable('false');
	let PlayerState = writable('Play');
	let audioElement;
	let mainElement;

	onMount(() => {
		if ($musicList.length > 0) {
			setSong(0);
		}
	});

	function prev() {
		if (CurrentSongIndex > 0) {
			setSong(CurrentSongIndex - 1);
		}
	}

	function wishList() {
		wish.update((currentState) => (currentState === 'false' ? 'true' : 'false'));
	}

	function playpause() {
		state.update((currentState) => (currentState === 'false' ? 'true' : 'false'));
	}

	function next() {
		if (CurrentSongIndex < $musicList.length - 1) {
			setSong(CurrentSongIndex + 1);
		}
	}

	function setSong(index) {
		CurrentSongIndex = index;
		// audioElement.src = `/audio/${$musicList[CurrentSongIndex].audio}.mp3`;
		audioElement.play();
		PlayerState.set('Pause');
	}
</script>

<main bind:this={mainElement}>
	<!-- <audio src={`/audio/${$musicList[CurrentSongIndex].audio}.mp3`} bind:this={audioElement}> </audio> -->
	<div class="player">
		<div class="current-song">
			<div class="avatar">
				<img
					src={$musicList[CurrentSongIndex].image}
					alt="Album cover for {$musicList[CurrentSongIndex].name}"
				/>
				<div class="avatar-text">
					<p>{$musicList[CurrentSongIndex].artist}</p>
					<span>{$musicList[CurrentSongIndex].name}</span>
				</div>
				<div class="avatar-icon">
					<button
						aria-label={$wish === 'false' ? 'Add to wish list' : 'Remove from wish list'}
						on:click={wishList}
					>
						{#if $wish === 'false'}
							<i class="fa fa-heart fa-xl" style="color: grey;"></i>
						{:else}
							<i class="fa fa-heart fa-xl" style="color: red;"></i>
						{/if}
					</button>
					<i class="fa fa-circle-minus fa-xl"></i>
				</div>
			</div>
		</div>
		<div class="song-controls">
			<div class="controls">
				<button aria-label="Previous Song" on:click={prev} tabindex="0">
					<i class="fa fa-backward"></i>
				</button>
				<button aria-label={$state === 'false' ? 'play' : 'pause'} on:click={playpause}>
					{#if $state === 'false'}
						<i class="fa fa-play"></i>
					{:else}
						<i class="fa fa-pause"></i>
					{/if}
				</button>
				<button aria-label="Next Song" on:click={next} tabindex="0">
					<i class="fa fa-forward"></i>
				</button>
			</div>
			<div class="timeline">
				<h3>02:56</h3>
				<img src={Timeline} alt="timeline" />
				<h3>03:58</h3>
				<i class="fa fa-repeat fa-xl"></i>
				<i class="fa fa-shuffle fa-xl"></i>
			</div>
		</div>
		<div class="volume">
			<h3>Д.үг</h3>
			<i class="fa fa-volume-high fa-lg"></i>
			<img src={Volume} alt="volume" />
			<i class="fa fa-list fa-lg"></i>
		</div>
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 60px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 1rem;
		background: linear-gradient(to right, #0061ff 0%, #00235b 30%);
		color: #fff;
	}

	.player {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.current-song {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		align-items: center;
	}

	.avatar {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}

	.avatar img {
		width: 50px;
		height: 50px;
		border-radius: 10%;
	}

	.avatar-text {
		text-align: center;
	}

	.avatar-text p {
		margin-bottom: 5px;
		font-size: 0.9rem;
	}

	.avatar-text span {
		font-weight: bold;
		font-size: 1rem;
	}

	.avatar-icon {
		display: flex;
		gap: 1rem;
		justify-content: center;
		align-items: center;
	}

	.song-controls {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2rem;
	}

	.controls {
		display: flex;
		gap: 1.5rem;
		align-items: center;
		margin-bottom: 10px;
	}

	.controls button {
		background: none;
		border: none;
		color: white;
		font-size: 1.5rem;
		cursor: pointer;
	}

	.timeline {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.volume {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	@media (max-width: 600px) {
		main {
			display: flex;
			justify-content: space-between;
			padding: 1rem;
			background: linear-gradient(to right, #887364 0%, #664e3d 30%);
			margin-top: -30px;
		}

		.player {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.avatar {
			width: 200px;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
		}

		.avatar img {
			margin-top: 10px;
			width: 50px;
			height: 50px;
		}

		.avatar-text {
			text-align: center;
			font-size: 0.8rem;
		}

		.controls button {
			margin-top: 20px;
			font-size: 0.9rem;
		}

		.fa-volume-high,
		.fa-list,
		.fa-shuffle,
		.fa-repeat {
			display: none;
		}
		.timeline,
		.avatar-icon,
		.volume {
			display: none;
		}
	}

	@media (min-width: 600px) and (max-width: 1024px) {
		.player {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			gap: 1rem;
		}

		.avatar {
			flex-direction: row;
			gap: 1rem;
		}

		.controls button {
			font-size: 1.2rem;
		}

		.timeline h3 {
			font-size: 0.9rem;
		}

		.volume {
			flex-direction: row;
			gap: 1rem;
		}
		.timeline,
		.fa-shuffle,
		.fa-repeat {
			display: none;
		}
	}
	@media (min-width: 1024px) {
		.avatar-text {
			width: 130px;
		}
	}
</style>
