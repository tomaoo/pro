<template>
	<div class="select-single">
		<div v-for="(val,index) in list" :class="{active:index==nowIndex}" @click="toggle(index)">{{val.label}}</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'AppSelections',
		props:{
			list:{
				type:Array,
				default:[{val:0,label:'HTML'}]
			}
		},
		data(){
			return {
				nowIndex:0
			}
		},
		methods:{
			toggle(index){
				this.nowIndex=index;
				this.$emit('on-change',this.list[index]['val'])
			}
		}
	}
</script>
<style type="text/css">
	.select-single{
		width:100%;
		margin-left:10px;
		position:relative;
		overflow:hidden;
	}
	.select-single>div{
		width:100px;
		height:30px;
		line-height:30px;
		text-align:center;
		background:#fff;
		border:1px solid #ddd;
		margin-right:10px;
		float:left;
		cursor:pointer;
	}
	.select-single>div.active{
		background:#6a5;
		color:#fff;
	}
</style>