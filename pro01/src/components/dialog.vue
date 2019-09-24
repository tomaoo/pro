<template>
	<div class="wrap"  v-if="isShow">
		<div class="dialog">
			<div class="dialog-cover"></div>
			<div class="dialog-content">
				<div class="dialog-close" @click="closeDialog">×</div>
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'AppDialog',
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
			}
		},
		methods:{
			closeDialog(){
				this.$emit('on-close');
			}
		}
	}
</script>
<style type="text/css">
	.wrap{
		width:100%;
		height:100%;
		position:absolute;
		left:0;
		top:0;
		right:0;
		bottom:0;
	}
	.dialog{
		position:relative;
		width:100%;
		height:100%;
		overflow:hidden;
	}
	.dialog-cover{
		position:fixed;
		width:100%;
		left:0;
		top:0;
		right:0;
		bottom:0;
		background:rgba(0,0,0,0.5);
		z-index:100000;
	}
	.dialog-content{
		width:50%;
		position:fixed;
		left:25%;
		right:25%;
		top:5%;
		z-index:100002;
		background:#fff;
		border-radius:8px;
	}
	.dialog-close{
		position:absolute;
		right:8px;
		top:8px;
		width:16px;
		height:16px;
		border:1px solid #ccc;
		text-align:center;
		line-height:16px;
		cursor:pointer;
	}
</style>