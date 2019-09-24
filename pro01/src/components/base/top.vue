<template>
	<div class="apptop" @click="toTop">{{msg}}</div>
</template>
<script type="text/javascript">
	export default {
		name:'AppTop',
		data(){
			return {
				msg:'返回顶部'
			}
		},
		methods:{
		    toTop(){
		　　var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var speed=Math.floor((-scrollTop)/10);
				var timer=setInterval(function(){
					if(document.documentElement.scrollTop!=0 || document.body.scrollTop !=0){
						document.documentElement.scrollTop+=speed;
						document.body.scrollTop+=speed;
					}else{
						clearInterval(timer);
					}
				},30)	
			}
		},
	}
</script>
<style type="text/css">
	.apptop{
		width:80px;
		height:80px;
		line-height:80px;
		background:crimson;
		position:fixed;
		right:0px;
		top:50%;
		margin-top:-40px;
		cursor:pointer;
		border-radius:10px 0 0 10px;
		color:#fff;
	}
</style>