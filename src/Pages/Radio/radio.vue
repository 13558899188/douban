<template>
	<div>
		<Header txt="广播">
			<img src="../../assets/images/ic_status_search_user.png" class="leftImg" slot="leftImg"/>
	        <img src="../../assets/images/ic_chat_green.png" class="rightImg" slot="rightImg"/>
		</Header>
		<div class="contentbox">
			<div class="userbox">
				<div class="user">
					<a href="#">
						<img src="../../assets/user_normal.jpg" alt="">
					</a>
					<span>登陆发广播</span>
				</div>
				<div class="righticon">
					
				</div>
			</div>
			<div class="content" v-for="(item,index) in arr">
				<div class="lefticon">
					<img :src="item.user_url" alt="">
				</div>
				<div class="rightCon">
					<div class="top">
						<h4>{{item.group_name}}</h4>
						<p>{{item.topic_timer}}</p>
					</div>
					<p>{{item.topic_title}}</p>
					<a href="#">
						<img :src="item.topic_url" alt="">
					</a>
					<div class="footer">
						<div class="icon">
							<img src="../../assets/ic_like_gray.svg" alt="">
							<span>{{item.topic_dian}}</span>
						</div>
						<div class="icon">
							<img src="../../assets/ic_comment.svg" alt="">
							<span>{{item.topic_news}}</span>
						</div>
						<div class="icon">
							<img src="../../assets/ic_retweet_gray.svg" alt="">
							<span>{{item.topic_shua}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	export default{
		components:{
			Header
		},
		data(){
			return {
				arr:[]
			}
		},
		methods:{
			getData(){
				this.$Axios.get("../../static/data/radio.json").then(
				   res=>{
					   console.log("res",res);
					   this.arr=res.data.recommend_feeds;
				   },
				   err=>{
					   console.log("err",err);
				   }
				)
			}
		},
		mounted(){
			this.getData()
		}
	}
	
</script>

<style lang="less">
	.contentbox{
		width: 100%;
		box-sizing: border-box;
		.userbox{
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			box-sizing: border-box;
			padding:15/64rem;
			border-bottom: 1px solid #ccc;
			.user{
				display: flex;
				align-items:center;
				color: #999;
				a{
					img{
						border-radius: 50%;
						width: 40/64rem;
						height: 40/64rem;
						margin-right: 14/64rem;
					}
				}
			}
			.righticon{
				display: flex;
				align-items: center;
				&::before{
					content: "";
					width: 32/64rem;
					height: 32/64rem;
					background: url(../../assets/bi.png) no-repeat center center;
					background-size:  32/64rem 32/64rem ;
					margin-right: 6/64rem;
				}
				&::after{
					content:"";
					width: 32/64rem;
					height: 32/64rem;
					background: url(../../assets/ipone.png) no-repeat 0 center;
					background-size:  32/64rem 30/64rem ;
				}
			}
		}
		.content{
			display: flex;
			text-align: left;
			padding:15/64rem;
			width: 100%;
			box-sizing: border-box;
			.lefticon{
				img{
					width: 38/64rem;
					height: 38/64rem;
					border-radius: 50%;
				}
			}
			.rightCon{
				padding-left: 10/64rem;
				.top{
					p{
						color: #999;
						line-height: 26/64rem;
						font-size: 15/64rem;
					}
				}
				a{
					margin-top: 10/64rem;
					display: inline-block;
					img{
						width: 100%;
					}
				}
				p{
					line-height: 26/64rem;
				}
				.footer{
					display: flex;
					margin: 4/64rem 0;
					.icon{
						margin-right: 10/64rem;
						display: flex;
						align-items: center;
						font-size: 15/64rem;
						color: #999;
						img{
							width: 22/64rem;
							height: 22/64rem;
						}
						span{
							margin: 0 4/64rem;
						}
					}
				}
			}
		}
		&:last-of-type{
			margin-bottom: 70/64rem;
		}
	}
	
</style>