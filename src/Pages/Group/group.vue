<template>
	<div>
		<Header txt="小组">
			<img src="../../assets/images/ic_actionbar_search_icon.png" class="leftImg" slot="leftImg"/>
	        <img src="../../assets/images/ic_chat_green.png" class="rightImg" slot="rightImg"/>
		</Header>
		<div class="listitem">
			<div class="item" v-for="(item,index) in arr" v-show="index==0">
				<h3>{{item.title}}</h3>
				<div class="itembox" v-for="(item1,index1) in item.group_list">
					 <div class="user">
						 <div class="userbox">
							 <img :src="item1.img_url" alt="">
							 <span class="name">{{item1.group_name}}</span>
						 </div>
						 <span class="num">{{item1.group_member}}</span>
					 </div>
					<p>{{item1.topic_title}}</p>
				</div>
				<a href="#" class="more">更多相关小组</a>
			</div>
			<div class="item" v-for="(item,index) in arr" v-show="index==1">
				<h3>{{item.title}}</h3>
				<div class="itembox" v-for="(item1,index1) in item.group_list">
					 <div class="user">
						 <div class="userbox">
							 <img :src="item1.img_url" alt="">
							 <span class="name">{{item1.group_name}}</span>
						 </div>
						 <span class="num">{{item1.group_member}}</span>
					 </div>
					<p>{{item1.topic_title}}</p>
				</div>
				<a href="#" class="more">更多相关小组</a>
			</div>
			<div class="item" v-for="(item,index) in arr" v-show="index==2">
				<h3>{{item.title}}</h3>
				<div class="itembox" v-for="(item1,index1) in item.group_list">
					 <div class="user">
						 <div class="userbox">
							 <img :src="item1.img_url" alt="">
							 <span class="name">{{item1.group_name}}</span>
						 </div>
						 <span class="num">{{item1.group_member}}</span>
					 </div>
					<p>{{item1.topic_title}}</p>
				</div>
				<a href="#" class="more">更多相关小组</a>
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
				this.$Axios.get("../../static/data/groupData.json").then(
				  res=>{
					  console.log("res",res);
					  this.arr=res.data.group;
				  },err=>{
					  console.log('err',err);
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
	.listitem{
		width: 100%;
		box-sizing: border-box;
		.item{
			width: 100%;
			text-align: left;
			padding: 0 10/64rem;
			box-sizing: border-box;
			h3{
				margin-top: 10/64rem;
			}
			.itembox{
				border-bottom: 1px solid #ccc;
				padding: 8/64rem 0;
				.user{
					width: 100%;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: space-between;
				    margin: 6/64rem 0;
					.userbox{
						display: flex;
						align-items: center;
						img{
							width: 42/64rem;
							height: 46/64rem;
							border-radius: 4/64rem;
						}
						span.name{
							margin-left: 20/64rem;
						}
					}
					.num{
						color: #999;
					}
				}
				p{
					line-height: 30/64rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					color: #999;
				}
			}
			.more{
				display: block;
				text-align: center;
				text-decoration: none;
				color: forestgreen;
				font-size: 18/64rem;
				line-height: 40/64rem;
			}
			&:last-of-type{
				margin-bottom: 70/64rem;
			}
		}
	}
	
</style>