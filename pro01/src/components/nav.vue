<template>
	<div class="app-nav">
		<router-link to="/"><img src="../assets/logo.png" class="logo"></router-link>
		<ul class="anav"><li v-for="item in list"><router-link :to="item.url">{{item.title}}</router-link></li></ul>
	</div>
</template>
<script>
	export default{
		name:'AppNav',
		data(){
			return {
				list:[
					{id:0,title:'首页',url:'/'},
					{id:1,title:'产品',url:'/goods'},
					{id:2,title:'动态',url:'/dynamic'},
					{id:3,title:'关于',url:'/about'},
					{id:4,title:'联系',url:'/contact'},
				]
			}
		},
	}
</script>
<style>
	ul{
		position:relative;
		overflow:hidden;
	}
	a{
		color:#666;
	}
	.app-nav{
		width:1200px;
		margin:0 auto;
	}
	.logo{
		width:60px;
		display:block;
		float:left;
		margin:15px 0px;
	}
	.anav{
		height:90px;
		float:left;
	}
	.anav li{
		height:24px;
		line-height:24px;
		text-align:center;
		float:left;
		width:100px;
		margin:33px 0px;
	}
	.router-link-exact-active{
	color:#fff !important;
	font-weight:bold;
	text-decoration:underline;
	}
</style>