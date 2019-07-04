<template>
	<div class="item" @click='fn' :class="{active:flag}">
		<span v-show='!flag'><slot name="normalImg"></slot></span>
		<span v-show='flag'><slot name="activeImg"></slot></span>
		<span>{{txt}}</span>
	</div>
</template>
<script>
	export default{
		name:'item',
		props:['txt',"mark",'selected'],
		methods:{
			fn(){
				this.$emit('change',this.mark);
				this.$router.push('/'+this.mark);//杠前面千万不能加点，出现逗号就不能从从二级菜单跳转
			}
		},
		computed:{
			flag(){
			   if(this.mark==this.selected) {
			   	
			   	return true
			   }
			   return false
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.item{
		width: 20%;
		text-align: center;
	}
	.item img{
		width: 42/64rem;
	}
	.item span{
		display: block;
	}
	.active{
		color: #48BD5A;
	}
</style>