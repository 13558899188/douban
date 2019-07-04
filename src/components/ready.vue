<template>
	<div class="filmbox">
		<div class="filmItem" v-for="(item, index) in arr">
			<div class="itemTop">
				<h3>{{ item.group.title }}</h3>
				<div class="itemTR">
					<span>全部</span>
					<span>{{ item.group.num }}</span>
					<img src="../assets/righticon.png" alt="" />
				</div>
			</div>
			<div class="itemlist" v-for="listItem in item.group.itemContent">
				<div class="cLeft">
					<img :src="listItem.imgUrl" alt="" class="mimg" />
					<img src="../assets/shudan.png" alt="" class="listicon" />
				</div>
				<div class="cRight">
					<h3>{{listItem.itemTitle}}</h3>
					<div class="numGuan">
						<span>{{listItem.itemnum}}本</span>
						<span>{{listItem.guanzhu}}人关注</span>
					</div>
					<div class="user">
						<img :src="listItem.usericon" alt="">
						<span class="username">{{listItem.username}}</span>
						<span class="userTime">创建</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Broadcastpublic from './broadcastpublic';
export default {
	data() {
		return {
			arr: []
		};
	},
	methods: {
		getFdata() {
			this.$Axios.get('../../static/data/ready.json').then(
				res => {
					console.log('success', res.data.recommend_feeds);
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
	.filmbox{
		text-align: left;
		padding: 0 8/64rem;
		box-sizing: border-box;
		margin-bottom: 72/64rem;
		.filmItem{
			width:100%;
			box-sizing:border-box;
			display: flex;
			flex-wrap: wrap;
			.itemTop{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 50/64rem;
				margin: 0 10/64rem;
			    color: #000;
				.itemTR{
					display: flex;
					align-items: center;
					font-size:15/64rem;
					span{
						width: 30/64rem;
						text-align: center;
						font-weight: bold;
					}
					img{
						width: 16/64rem;
					}
				}
			}
			.itemlist{
				display: flex;
				border-bottom:1px solid #ccc;
				padding: 10/64rem 0;
				margin-left: 10/64rem;
				width: 100%;
				.cLeft{
					width: 110/64rem;
					 height: 120/64rem;
					position: relative;
					.mimg{
						width: 100/64rem;
						height: 120/64rem;
						border-radius: 4/64rem 0;
					}
					.listicon{
						position: absolute;	
						height: 22/64rem;
						bottom: 10/64rem;
						left: 0;
						border-radius: 4/64rem 0;
					}
				}
				.cRight{
					padding-left: 6/64rem;
					
					.numGuan{
						line-height: 40/64rem;
						font-size: 14/64rem;
						span{
							margin-right: 10/64rem;
						}
					}
					.user{
						line-height: 40/64rem;
						font-size: 14/64rem;
						display: flex;
                        align-items: center;
						img{
							height: 20/64rem;
							width: 20/64rem;
							border-radius: 50%;
							margin-right: 10/64rem;
						}
						.username{
							color: #444;
							margin-right: 10/64rem;
						}
						.userTime{
							color: #999;
						}
					}
				}
			}
		}
	}
</style>
