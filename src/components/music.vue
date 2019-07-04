<template>
	<div class="filmbox">
      <div class="filmItem" v-for="(item,index) in arr">
		  <div class="itemTop">
			  <h3>{{item.group.title}}</h3>
			 <div class="itemTR">
				 <span>全部</span>
				 <span>{{item.group.num}}</span>
				 <img src="../assets/righticon.png" alt="">
			 </div>
		  </div>
		  <div class="itemlist" v-for="listItem in item.group.itemContent">
			  <img :src="listItem.imgUrl" alt="" class="mimg">
			  <span class="itemname">{{listItem.itemTitle}}</span>
			  <span class="itemauthor">{{listItem.author}}</span>
			  <span class="num">{{listItem.pingfen}}</span>
			  <img src="../assets/listicon.png" alt="" class="listicon">
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
			this.$Axios.get('../../static/data/music.json').then(
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
	margin-bottom: 70/64rem;
	.filmItem{
		width:100%;
		box-sizing:border-box;
		padding:0 8/64rem;
		display: flex;
		flex-wrap: wrap;
		.itemTop{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 50/64rem;
			padding:0 4/64rem;
		    color: #000;
			.itemTR{
				display: flex;
				align-items: center;
				font-size:14/64rem;
				span{
					display: block;
					width: 30/64rem;
					text-align: center;
				}
				img{
					width: 16/64rem;
				}
			}
		}
		.itemlist{
		    width: 131/64rem;
			height: 198/64rem;
		    position: relative;
		    font-size:14/64rem;
			padding-bottom: 6/64rem;
			.mimg{
				width: 120/64rem;
				height: 126/64rem;
				border-radius: 6/64rem;
				border: 1px solid #ccc;
				margin-bottom: -8/64rem;
			}
			span{
				display: block;
				line-height: 20/64rem;
				text-align: left;
				padding:0 8/64rem;
			}
			.listicon{
				position: absolute;
				top: 0;
				left: 4%;
				border-radius: 4/64rem 0;
			}
			.itemname{
				font-weight: bold;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.itemauthor{
				font-size: 13/64rem;
				color: #999;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.num{
				font-size: 12/64rem;
				color: #666;
			}
		}
	}
}
</style>
