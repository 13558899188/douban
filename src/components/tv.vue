<template>
	<div class="filmbox">
		<div class="title">
			<p>热映电影</p>
			<a href="#">更多</a>
		</div>
		<div class="film">
			<div class="filmitem" v-for="(item, index) in arr" v-show="index <= 8">
				<img :src="item.cover_url" alt="" />
				<p>{{ item.title }}</p>
				<p class="pingfen">评分:{{ item.count }}</p>
			</div>
		</div>
		<div class="title">
			<p>免费在线观影</p>
			<a href="#">更多</a>
		</div>
		<div class="film">
			<div class="filmitem" v-for="(item, index) in arr" v-show="index >= 9 && index <= 17">
				<img :src="item.cover_url" alt="" />
				<p>{{ item.title }}</p>
				<p class="pingfen">评分:{{ item.count }}</p>
			</div>
		</div>
		<div class="title">
			<p>即将上市的电影</p>
			<a href="#">更多</a>
		</div>
		<div class="film">
			<div class="filmitem" v-for="(item, index) in arr" v-show="index >= 18 && index <=26">
				<img :src="item.cover_url" alt="" />
				<p>{{ item.title }}</p>
				<p class="pingfen">评分:{{ item.count }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import Broadcastpublic from './broadcastpublic'
export default {
	data() {
		return {
			arr: []
		};
	},
	methods: {
		getFdata() {
			this.$Axios.get('../../static/data/filmData.json').then(
				res => {
					console.log('success', res);
					this.arr = res.data.recommend_feeds;
				},
				err => {
					console.log('err', err);
				}
			);
		}
	},
	mounted() {
		this.getFdata();
	},
	components: {
		Broadcastpublic
	}
};
</script>

<style lang="less" scoped="scoped">
.filmbox {
	text-align: left;
	width: 100%;
	box-sizing: border-box;
	margin-bottom: 74/64rem;
	font-size: 18/64rem;
	display: flex;
	flex-wrap: wrap;
	.film {
		display: flex;
		flex-wrap: wrap;
		margin-right: 10/64rem;
		&::-webkit-scrollbar {
			display: none;
		}
		.filmitem {
			flex: 1;
			width: 100/64rem;
			margin-left: 10/64rem;
			img {
				width: 114/64rem;
				height: 170/64rem;
				margin-bottom: -8/64rem;
			}
			p {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				line-height: 24/64rem;
			}
			.pingfen {
				font-size: 15/64rem;
			}
		}
	}
	.title {
		width: 100%;
		box-sizing: border-box;
		padding: 0 10/64rem;
		line-height: 60/64rem;
		display: flex;
		justify-content: space-between;
		a {
			color: #42bd56;
			font-size: 18/64rem;
			text-decoration: none;
		}
	}
}
</style>
