<template>
	<div>
		<Header txt="书影音">
			<img src="../../assets/images/ic_actionbar_search_icon.png" class="leftImg" slot="leftImg"/>
	        <img src="../../assets/images/ic_chat_green.png" class="rightImg" slot="rightImg"/>
		</Header>
		<div class="nav">
			<span :class="{active:currIndex==0}" @click="currIndex=0">
				<router-link to='/broadcast/film'>电影</router-link>
			</span>
			<span :class="{active:currIndex==1}" @click="currIndex=1">
				<router-link to='/broadcast/ready'>读书</router-link>
			</span>
			<span :class="{active:currIndex==2}" @click="currIndex=2">
				<router-link to='/broadcast/tv'>电视</router-link>
			</span>
			<span :class="{active:currIndex==3}" @click="currIndex=3">
				<router-link to='/broadcast/city'>同城</router-link>
			</span>
			<span :class="{active:currIndex==4}" @click="currIndex=4">
				<router-link to='/broadcast/music'>音乐</router-link>
			</span>
			<div class="navcontent">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Film from '../../components/film'
	export default{
		data(){
			return{
				currIndex:0
			}
		},
		components:{
			Header,Film
		},
		beforeCreate(){
			this.$router.push('/Broadcast/film');
		}
	}
	
</script>

<style lang="less" scoped="scoped">
	.nav{
		height: 42/64rem;
		line-height: 42/64rem;
		border-bottom: 1px solid #ccc;
		a{
			text-decoration: none;
			font-size: 15/64rem;
			color: #999;
		}
		span{
			display: inline-block;
			height: 42/64rem;
			width: 20%;
			float: left;
		}
		span.active{
			background: green;
			a{
				color: #fff;
			}
		}
	}
	
</style>