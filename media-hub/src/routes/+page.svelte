<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import { socialLinks, favorites, getMediaCategories, yearlyGoals } from '$lib/data/media';
	import { base } from '$app/paths';

	const mediaCategories = getMediaCategories();
</script>

<div class="page">
	<!-- Hero -->
	<header class="hero">
		<img src="{base}/images/caca1.gif" alt="Decorative" class="hero-gif" />
		<h1>Media Hub</h1>
		<p class="subtitle">~ Where starting over is not so bad</p>
	</header>

	<!-- Social Links -->
	<section class="social-links">
		{#each socialLinks as link}
			<a href={link.url} target="_blank" rel="noopener noreferrer" class="social-card">
				<img src={link.icon} alt={link.name} class="social-icon" />
				<span>{link.name}</span>
			</a>
		{/each}
	</section>

	<!-- Media Categories Grid -->
	<section class="categories">
		{#each mediaCategories as cat}
			<a href={cat.href} class="category-card">
				<div class="category-image-wrap">
					<img src={cat.image} alt={cat.name} />
				</div>
				<span class="category-label">{cat.name}</span>
			</a>
		{/each}
	</section>

	<!-- Favorites -->
	<section class="favorites">
		<h2>~ My Favorites</h2>
		<div class="favorites-grid">
			{#each Object.entries(favorites) as [category, items]}
				<div class="fav-group">
					<h3>{category}</h3>
					<ul>
						{#each items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<!-- Yearly Goals -->
	<section class="yearly-goals">
		<h2>~ Yearly Goals</h2>
		<div class="goals-grid">
			{#each yearlyGoals as goal}
				<div class="goal-card">
					<div class="goal-header">
						<span class="goal-name">{goal.name}</span>
						<span class="goal-count">{goal.accomplished} / {goal.goal}</span>
					</div>
					<ProgressBar percent={goal.progressPercent} />
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	.page {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1.5rem 4rem;
	}

	/* Hero */
	.hero {
		text-align: center;
		margin-bottom: 2rem;
	}
	.hero-gif {
		width: 120px;
		height: 120px;
		object-fit: cover;
		border-radius: 50%;
		border: 3px solid var(--border);
		margin-bottom: 1rem;
	}
	.hero h1 {
		font-size: 2.5rem;
		color: var(--accent-bright);
		margin-bottom: 0.25rem;
	}
	.subtitle {
		color: var(--text-muted);
		font-size: 0.9rem;
		font-style: italic;
	}

	/* Social Links */
	.social-links {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 3rem;
		flex-wrap: wrap;
	}
	.social-card {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		transition: all 0.2s;
		color: var(--text);
		font-size: 0.85rem;
	}
	.social-card:hover {
		background: var(--bg-card-hover);
		border-color: var(--accent-dim);
		transform: translateY(-2px);
	}
	.social-icon {
		width: 28px;
		height: 28px;
		border-radius: 6px;
	}

	/* Categories Grid */
	.categories {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin-bottom: 3rem;
	}
	.category-card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		overflow: hidden;
		border-radius: 16px;
		border: 1px solid var(--border);
		background: var(--bg-card);
		transition: all 0.3s;
	}
	.category-card:hover {
		border-color: var(--accent-dim);
		transform: translateY(-4px);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
	}
	.category-image-wrap {
		width: 100%;
		aspect-ratio: 3/4;
		overflow: hidden;
	}
	.category-image-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s;
	}
	.category-card:hover .category-image-wrap img {
		transform: scale(1.05);
	}
	.category-label {
		display: block;
		padding: 0.75rem;
		font-family: 'DM Serif Display', serif;
		font-size: 1rem;
		color: var(--accent-bright);
		text-align: center;
	}

	/* Favorites */
	.favorites {
		margin-bottom: 3rem;
	}
	.favorites h2 {
		font-size: 1.6rem;
		color: var(--accent-bright);
		margin-bottom: 1.25rem;
	}
	.favorites-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}
	.fav-group {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 1rem 1.25rem;
	}
	.fav-group h3 {
		font-size: 0.95rem;
		color: var(--accent);
		margin-bottom: 0.5rem;
	}
	.fav-group ul {
		list-style: none;
		padding: 0;
	}
	.fav-group li {
		font-size: 0.82rem;
		color: var(--text-muted);
		padding: 0.2rem 0;
		border-bottom: 1px solid var(--border);
	}
	.fav-group li:last-child {
		border-bottom: none;
	}

	/* Yearly Goals */
	.yearly-goals h2 {
		font-size: 1.6rem;
		color: var(--accent-bright);
		margin-bottom: 1.25rem;
	}
	.goals-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
	}
	.goal-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 1rem 1.25rem;
	}
	.goal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}
	.goal-name {
		font-family: 'DM Serif Display', serif;
		font-size: 1rem;
		color: var(--accent);
	}
	.goal-count {
		font-size: 0.8rem;
		color: var(--text-muted);
	}

	/* Responsive */
	@media (max-width: 640px) {
		.categories {
			grid-template-columns: repeat(2, 1fr);
		}
		.hero h1 {
			font-size: 1.8rem;
		}
		.favorites-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
