<script lang="ts">
	let { status }: { status: string } = $props();

	const colorMap: Record<string, string> = {
		Read: '#6bcb77',
		Reading: '#4d96ff',
		Paused: '#ffd93d',
		Completed: '#6bcb77'
	};

	const color = $derived(colorMap[status] || '#9a8a94');
</script>

<span class="badge" style="--badge-color: {color}">
	{status}
</span>

<style>
	.badge {
		display: inline-block;
		padding: 2px 12px;
		background: color-mix(in srgb, var(--badge-color) 15%, transparent);
		border: 1px solid color-mix(in srgb, var(--badge-color) 40%, transparent);
		border-radius: 20px;
		font-size: 0.7rem;
		font-weight: 500;
		color: var(--badge-color);
		letter-spacing: 0.02em;
	}
</style>
