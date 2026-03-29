<script lang="ts">
	let { percent, size = 'md' }: { percent: number; size?: 'sm' | 'md' } = $props();
</script>

<div class="progress-bar {size}">
	<div class="progress-fill" style="width: {Math.min(percent, 100)}%"></div>
	<span class="progress-label">{percent >= 100 ? '✔ 100%' : `${percent}%`}</span>
</div>

<style>
	.progress-bar {
		position: relative;
		background: var(--progress-bg);
		border-radius: 12px;
		overflow: hidden;
		width: 100%;
	}
	.progress-bar.md {
		height: 24px;
	}
	.progress-bar.sm {
		height: 18px;
	}
	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, var(--accent-dim), var(--accent));
		border-radius: 12px;
		transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}
	.progress-label {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.7rem;
		font-weight: 600;
		color: var(--text);
		letter-spacing: 0.03em;
	}
	.sm .progress-label {
		font-size: 0.6rem;
	}
</style>
