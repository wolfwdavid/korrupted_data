<script lang="ts">
	import BackLink from '$lib/components/BackLink.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import StatusBadge from '$lib/components/StatusBadge.svelte';
	import { manga } from '$lib/data/media';
</script>

<svelte:head>
	<title>Manga — Media Hub</title>
</svelte:head>

<div class="page">
	<BackLink />
	<h1>Manga</h1>

	<div class="table-wrap">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Tags</th>
					<th>Status</th>
					<th>Rating</th>
					<th>Progress</th>
					<th>Year</th>
				</tr>
			</thead>
			<tbody>
				{#each manga as entry}
					<tr>
						<td class="name-cell">{entry.name}</td>
						<td class="tags-cell">
							{#each entry.tags as tag}
								<Tag label={tag} />
							{/each}
						</td>
						<td><StatusBadge status={entry.status} /></td>
						<td class="rating">{entry.rating || '—'}</td>
						<td class="progress-cell">
							<div class="progress-info">
								<span class="chapters">{entry.chaptersRead}/{entry.chapters} ch</span>
								<ProgressBar percent={entry.progressPercent} size="sm" />
							</div>
						</td>
						<td class="year">{entry.readOn}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.page {
		max-width: 960px;
		margin: 0 auto;
		padding: 2rem 1.5rem 4rem;
	}
	h1 {
		font-size: 2rem;
		color: var(--accent-bright);
		margin-bottom: 1.5rem;
	}
	.table-wrap {
		overflow-x: auto;
		border: 1px solid var(--border);
		border-radius: 12px;
		background: var(--bg-card);
	}
	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.85rem;
	}
	thead {
		background: var(--bg-card-hover);
	}
	th {
		text-align: left;
		padding: 0.75rem 1rem;
		color: var(--text-muted);
		font-weight: 500;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		border-bottom: 1px solid var(--border);
	}
	td {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--border);
		vertical-align: middle;
	}
	tr:last-child td {
		border-bottom: none;
	}
	.name-cell {
		font-weight: 500;
		color: var(--text);
		white-space: nowrap;
	}
	.tags-cell {
		display: flex;
		gap: 0.3rem;
		flex-wrap: wrap;
	}
	.rating {
		color: var(--star);
		white-space: nowrap;
	}
	.progress-cell {
		min-width: 160px;
	}
	.progress-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.chapters {
		font-size: 0.7rem;
		color: var(--text-muted);
	}
	.year {
		color: var(--text-muted);
	}
</style>
