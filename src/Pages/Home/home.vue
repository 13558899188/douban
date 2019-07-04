<template>
	<div>
		<Header hasbg="true">
			<img src="../../assets/images/ic_chat_white.png" class="rightImg" slot="rightImg" />
			<div class="search" slot="search">
				<img src="../../assets/images/ic_group_search_small.png" />
				<input type="text" placeholder="影视 图书唱片 小组等" />
				<img src="../../assets/images/ic_scan_gray.png" />
			</div>
		</Header>
		<Banner swiperid="homeswiper122" paginationtype="bullets">
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/images/banner/01.jpg" alt="" />
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/images/banner/02.jpg" alt="" />
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/images/banner/03.jpg" alt="" />
			</div>
		</Banner>
		<div class="newbox">
			<Newslist v-for="(item,index) in arr" :key="index" :url="item.target.cover_url">
				<div slot="listleft" class="listleft">
					<h4>{{item.title}}</h4>
					<p>{{item.target.desc}}</p>
					<p class="author">作者:{{item.target.author.name}}</p>
				</div>
			</Newslist>
		</div>
	</div>
</template>
<script>
	import Header from '../../components/header'
	import Banner from '../../components/banner'
	import Newslist from '../../components/newslist'
	export default {
		data() {
				return {
					arr: []
				}
			},
			mounted() {
				this.getdate();
			},
			methods: {
				getdate() {
					this.$Axios.get('../../../static/data/homeData.json').then(
						res => {
							this.arr = res.data.recommend_feeds;
						}, err => {
							console.log("err", err);
						}
					)
				}
			},
			components: {
				Header,
				Banner,
				Newslist
			}
	}
</script>

<style scoped lang="less">
	.search {
		width: 92%;
		position: relative;
		margin-right: 36/64rem;
	}
	
	.search>img {
		width: 24/64rem;
		height: 24/64rem;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	
	.search>img:first-of-type {
		left: 20/64rem;
	}
	
	.search>img:last-of-type {
		right: 20/64rem;
	}
	
	.search>input {
		height: 30/64rem;
		width: 92%;
		text-indent: 3em;
		outline: none;
		border: none;
		font-size: 15/64rem;
		border-radius: 5/64rem;
	}
	
	.gbgreen {
		background: #48BD5A;
	}
	.newbox{
		margin-bottom: 60/64rem;
	}
</style>