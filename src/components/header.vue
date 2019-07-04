<template>
	<div :class="{headerWrap:true,gbgreen:hasbg}">
		<span>{{txt}}</span>
		<slot name="leftImg"></slot>
		<slot name="rightImg"></slot>
		<slot name="search"></slot>
	</div>
</template>
<script>
	export default{
		props:['txt',"hasbg"]
	}
</script>
<style lang="less" scoped="scoped">
	.headerWrap{
		width: 100%;
		display: flex;
		justify-content: center;
		background: #f8f8f8;
		position: relative;
		height: 48/64rem;
		line-height: 48/64rem;
		border-bottom: 1px solid #ccc;
	}
	.headerWrap>img{
		position: absolute;
		width: 30/64rem;
		height: 30/64rem;
		top: 50%;
		transform: translateY(-50%);
		right: 3%;
	}
	.headerWrap>img.leftImg{
		right: 15%;
	}
	.headerWrap>span{
		font-size: 19/64rem;
	}
</style>