<script lang="ts">
	import BackLink from '$lib/components/BackLink.svelte';
	import { musicPlaylists } from '$lib/data/media';

	function getEmbedUrl(url: string): string {
		return url.replace('open.spotify.com/', 'open.spotify.com/embed/');
	}
</script>

<svelte:head>
	<title>Music — Media Hub</title>
</svelte:head>

<div class="page">
	<BackLink />
	<h1>Music</h1>

	<div class="music-sections">
		{#each musicPlaylists as category}
			<section class="playlist-section">
				<h2>~ {category.label}</h2>
				<div class="embeds">
					{#each category.playlists as url}
						<iframe
							title="Spotify Playlist"
							src={getEmbedUrl(url)}
							width="100%"
							height="152"
							frameborder="0"
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
						></iframe>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>

<style>
	.page {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1.5rem 4rem;
	}
	h1 {
		font-size: 2rem;
		color: var(--accent-bright);
		margin-bottom: 1.5rem;
	}
	.music-sections {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.playlist-section h2 {
		font-size: 1.2rem;
		color: var(--accent);
		margin-bottom: 0.75rem;
	}
	.embeds {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 0.75rem;
	}
	iframe {
		border-radius: 12px;
		background: var(--bg-card);
	}
</style>
