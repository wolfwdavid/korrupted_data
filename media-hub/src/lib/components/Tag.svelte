<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<span class="tag">{label}</span>

<style>
	.tag {
		display: inline-block;
		padding: 2px 10px;
		background: var(--tag-bg);
		border: 1px solid var(--border);
		border-radius: 20px;
		font-size: 0.7rem;
		color: var(--text-muted);
		letter-spacing: 0.02em;
	}
</style>
