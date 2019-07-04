<template>
	<div class="banner">
		<div class="swiper-container" :class="swiperid">
			<!--由于整个项目可能存在多个轮播图，一般会传图一个轮播图唯一id-->
		    <div class="swiper-wrapper">
                <slot name="swiper-con"></slot>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div :class="{'swiper-pagination':paginationshow}"></div>
		</div>
	</div>
</template>

<script>
   import Swiper from 'swiper'
   import 'swiper/dist/css/swiper.min.css'       
	export default{
		//props高级写法
		props:{
			swiperid:{type:String,default:''},//唯一的标识
			paginationshow:{type:Boolean,default:true},  //是否系那是分液器
			paginationtype:{type:String,default:'bullets'}, //分液器的样式
			//切换效果
			autoplay:{type:Boolean,default:false},
			//是否自动播放
			effect:{type:String,default:'fade'},
			
			//循环模式
			hloop:{type:Boolean,default:true},
		},
		mounted:function(){
			console.log(this.paginationtype);
			new Swiper ('.' + this.swiperid, {
			    loop: this.hloop, // 循环模式选项
			    autoplay:this.autoplay,
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			      type:this.paginationtype //分液器样式
			    },
			    effect:this.effect, //切换效果  swiper cube
			  })        
		}
	}
</script>

<style>

.banner{
	width: 100%;
	overflow: hidden;
	position: relative;
}
.banner .swiper-slide img{
	width: 100%;
}
</style>