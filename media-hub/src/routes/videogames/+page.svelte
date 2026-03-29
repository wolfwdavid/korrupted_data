<script lang="ts">
	import BackLink from '$lib/components/BackLink.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import { videogames } from '$lib/data/media';
</script>

<svelte:head>
	<title>Videogames — Media Hub</title>
</svelte:head>

<div class="page">
	<BackLink />
	<h1>Videogames</h1>

	<div class="games-grid">
		{#each videogames as game}
			<div class="game-card">
				<h3>
					{#if game.link}
						<a href={game.link} target="_blank" rel="noopener noreferrer">{game.name}</a>
					{:else}
						{game.name}
					{/if}
				</h3>
				<div class="rating">{game.rating}</div>
				<div class="tags">
					{#each game.tags as tag}
						<Tag label={tag} />
					{/each}
				</div>
			</div>
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
	.games-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1rem;
	}
	.game-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 1.25rem;
		transition: all 0.2s;
	}
	.game-card:hover {
		border-color: var(--accent-dim);
		transform: translateY(-2px);
	}
	.game-card h3 {
		font-size: 1rem;
		color: var(--text);
		margin-bottom: 0.4rem;
	}
	.game-card h3 a {
		color: var(--accent-bright);
	}
	.rating {
		color: var(--star);
		font-size: 0.9rem;
		margin-bottom: 0.6rem;
	}
	.tags {
		display: flex;
		gap: 0.3rem;
		flex-wrap: wrap;
	}
</style>
