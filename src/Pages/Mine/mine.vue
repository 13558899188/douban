<template>
	<div>
		<Header txt="我的"><img src="../../assets/images/ic_settings.png" class="rightImg" slot="rightImg" /></Header>
		<div class="menu">
			<div class="menutop">
				<div class="menuitem">
					<span class="menuicon iconfont icon-mima1"></span>
					<span>密码管理</span>
				</div>
				<div class="menuitem">
					<span class="menuicon iconfont icon-yinxingqia"></span>
					<span>银行卡管理</span>
				</div>
			</div>
			<ul class="menulist">
				<li class="listItem" v-for="item in arr">
					<div class="listItemL">
						<span :class="item.myclass"></span>
						<span>{{item.title}}</span>
					</div>
					<span class="listIconR iconfont icon-youjiantou"></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Header from '../../components/header';
export default {
	components: {
		Header
	},
	data(){
		return {
			arr:[]
		}
	},
	methods:{
		getData(){
			this.$Axios.get("../../static/data/mine.json").then(
			res =>{
				console.log("res",res);
				this.arr= res.data.recommend_feeds;
			},err =>{
				console.log("err",err);
			}
			)
		}
	},
	mounted(){
		this.getData()
	}
};
</script>

<style scoped lang="less">
@import '../../assets/lib/iconfont.css';
.menu {
	.menutop {
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #ccc;
		padding: 13/64rem 0;
		margin-top: 10/64rem;
		.menuitem {
			width: 50%;
			span {
				display: block;
			}
			.menuicon {
				color: #48BD5A;
				font-size: 40/64rem;
			}
		}
	}
	.menulist{
		.listItem{
			list-style: none;
			display: flex;
			width: 100%;
			box-sizing: border-box;
			padding: 0 10/64rem;
			align-items: center;
			justify-content: space-between;
			height: 66/64rem;
			border-bottom: 1px solid #ccc;
			.listItemL{
				display: flex;
				align-items: center;
				.listIcon{
					font-size: 26/64rem;
					color: #48BD5A;
					margin-right: 10/64rem;
				}
			}
		    .listIconR{
				font-size: 28/64rem;
				color: #48BD5A;
			}
		}
	}
}
</style>
