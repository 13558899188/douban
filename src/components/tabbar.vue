<template>
	<div class="tabbar">
		<Item txt="首页" mark='Home' :selected='selected' @change='getVal'>
			<img src="../assets/images/ic_tab_home_normal.png" slot="normalImg"/>
			<img src="../assets/images/ic_tab_home_active.png" slot="activeImg"/>
		</Item>
		<Item txt="书影音" mark='Broadcast' :selected='selected' @change='getVal'>
			<img src="../assets/images/ic_tab_subject_normal.png" slot="normalImg"/>
			<img src="../assets/images/ic_tab_subject_active.png" slot="activeImg"/>
		</Item>
		<Item txt="广播" mark='Radio' :selected='selected' @change='getVal'>
			<img src="../assets/images/ic_tab_status_normal.png" slot="normalImg"/>
			<img src="../assets/images/ic_tab_status_active.png" slot="activeImg"/>
		</Item>
		<Item txt="小组" mark='Group' :selected='selected' @change='getVal'>
			<img src="../assets/images/ic_tab_group_normal.png" slot="normalImg"/>
			<img src="../assets/images/ic_tab_group_active.png" slot="activeImg"/>
		</Item>
		<Item txt="我的" mark='Mine' :selected='selected' @change='getVal'>
			<img src="../assets/images/ic_tab_profile_normal.png" slot="normalImg"/>
			<img src="../assets/images/ic_tab_profile_active.png" slot="activeImg"/>
		</Item>
	</div>
</template>

<script>
 import Item from './item'
 export default{
 	name:'tabbar',
 	components:{
 		Item
 	},
 	data(){
 		return{
 			selected:"Home"
 		}
 	},
 	methods:{
 		getVal(val){
 			this.selected=val;
 		}
 	}
 	
 }

</script>

<style lang="less">
	.tabbar {
		max-width: 640px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;
		border-top: 1px solid #ccc;
		padding-bottom: 4/64rem;
		background: #fff;
	}
</style>