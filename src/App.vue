<template>
  <div id="app">
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import {obj} from '../static/js/util'
import Tabbar from './components/tabbar'
export default {
  name: 'App',
  components:{
  	Tabbar
  },
  beforeCreate(){
  	this.$router.push('/home')
  },
  mounted(){
  	obj.setRem()
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
body{
	font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
