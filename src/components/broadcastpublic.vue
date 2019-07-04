<template>
	<div class="filmTwo">
		<div class="title">
			<p>{{itTitle}}</p>
			<a href="#">更多</a>
		</div>
		<div class="film">
			<div class="filmitem" v-for="(item,index) in temp" :v-show="fanhui">
				<img :src="item.cover_url" alt="">
				<p>{{item.title}}</p>
				<p class="pingfen">评分:{{item.count}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:["itTitle","fanhui"],
		data(){
			return {
				arr:[]
			}
		},
		methods:{
			getFdata(){
				this.$Axios.get("../../static/data/filmData.json").then(
				res=>{
					console.log("success",res);
					this.arr=res.data.recommend_feeds;
				},
				err=>{
					console.log("err",err);
				}
				)
			}
		},
		mounted(){
			this.getFdata()
		}
	}
	
</script>
<style>
	
	
</style>