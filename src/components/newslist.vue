<template>
	<div class="listWrap">
		<slot name="listleft"></slot>
		<div class="listright">
			<img :src="url" alt="" />
		</div>
	</div>
</template>
<script>
	export default {
		props: ['url']
	}
</script>
<style lang="less" scoped="scoped">
	.listWrap {
		width: 100%;
		border-bottom: 1px solid #ccc;
		overflow: hidden;
		display: flex;
		text-align: left;
		.listleft {
			padding: 20/64rem;
			width: 62%;
			h4{
				font-size: 17/64rem;
			}
			p{
				margin-top: 6/64rem;
				color: #666;
				font-size: 15/64rem;
			}
			.author{
				color: #ccc;
				font-size: 13/64rem;
			}
		}
		.listright {
			padding: 20/64rem 0;
			img {
				width: 100/64rem;
				height: 100/64rem;
			}
		}
	}
</style>