<script lang="ts">
	import BackLink from '$lib/components/BackLink.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import StatusBadge from '$lib/components/StatusBadge.svelte';
	import { books } from '$lib/data/media';
</script>

<svelte:head>
	<title>Books — Media Hub</title>
</svelte:head>

<div class="page">
	<BackLink />
	<h1>Books</h1>

	<div class="books-list">
		{#each books as book}
			<div class="book-card">
				<div class="book-main">
					<h3>{book.name}</h3>
					<p class="author">by {book.author}</p>
					<div class="meta">
						<StatusBadge status={book.status} />
						<span class="rating">{book.rating}</span>
					</div>
					<div class="tags">
						{#each book.tags as tag}
							<Tag label={tag} />
						{/each}
					</div>
				</div>
				<div class="book-progress">
					<span class="pages">{book.pagesRead}/{book.pages} pages</span>
					<ProgressBar percent={book.progressPercent} size="sm" />
					{#if book.endedOn}
						<span class="ended">Finished {book.endedOn}</span>
					{/if}
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
	.books-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.book-card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 1.25rem 1.5rem;
		transition: all 0.2s;
	}
	.book-card:hover {
		border-color: var(--accent-dim);
	}
	.book-main h3 {
		font-size: 1.05rem;
		color: var(--text);
		margin-bottom: 0.15rem;
	}
	.author {
		font-size: 0.8rem;
		color: var(--text-muted);
		margin-bottom: 0.5rem;
	}
	.meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.5rem;
	}
	.rating {
		color: var(--star);
		font-size: 0.85rem;
	}
	.tags {
		display: flex;
		gap: 0.3rem;
		flex-wrap: wrap;
	}
	.book-progress {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		min-width: 180px;
		align-items: flex-end;
	}
	.pages {
		font-size: 0.75rem;
		color: var(--text-muted);
	}
	.ended {
		font-size: 0.7rem;
		color: var(--text-muted);
		font-style: italic;
	}

	@media (max-width: 640px) {
		.book-card {
			flex-direction: column;
			align-items: flex-start;
		}
		.book-progress {
			align-items: flex-start;
			width: 100%;
		}
	}
</style>
