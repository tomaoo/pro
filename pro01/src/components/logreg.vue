<template>
	<div class="app-logreg">
		<ul class="logreg">
			<li @click="logClick">登陆</li>
			<li @click="regClick">注册</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'AppLog',
		data(){
			return {
			}
		},
		methods:{
			logClick(){
				this.$emit('openDialog','logDialog')
			},
			regClick(){
				this.$emit('openDialog','regDialog')
			},
		}
			
	}
</script>
<style>
	.logreg{
		height:90px;
		float:right;
		margin-right:100px;
	}
	.logreg li{
		width:80px;
		height:24px;
		line-height:24px;
		text-align:center;
		float:left;
		width:100px;
		margin:33px 0px;
		color:#666;
		border-right:1px solid #444;
		cursor:pointer;
	}
	.logreg li:last-of-type{
		border-right:none;
	}
</style>