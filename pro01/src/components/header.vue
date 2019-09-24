<template>
	<div class="app-header">
		<app-nav></app-nav>
		<app-log @openDialog="openDialog"></app-log>
	</div>
</template>
<script>
	import AppNav from '@/components/nav'
	import AppLog from '@/components/logreg'
	export default{
		name:'AppHeader',
		components:{
			AppNav,
			AppLog
		},
		
		data(){
			return {

			}
		},
		methods:{
			openDialog(attr){
				this.$emit('openDialog',attr);
			}
		}
	}
</script>
<style>
	.app-header{
		width:100%;
		height:90px;
		position:relative;
		background:#333;
	}
</style>