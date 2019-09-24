<template>
	<div class="selet-mutiple">
		<div v-for="(value,idx) in list" :class="{active:checkedClass.indexOf(idx)!=-1}" @click="toggle(idx)">{{value.label}}</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'AppSelectionm',
		props:{
			list:{
				type:Array,
				default:[{val:0,label:'PHP'}]
			}
		},
		data(){
			return {
				nowIndex:0,
				checkedClass:[0]
			}
		},
		methods:{
			toggle(index){
				if(this.checkedClass.indexOf(index)==-1) {
					this.checkedClass.push(index);
				}else{
					this.checkedClass=this.checkedClass.filter((x)=>{
						return x!=index;
					})
				}
				this.$emit('on-change',this.checkedClass.join(''))
			}
		}
	}
</script>
<style type="text/css" scoped>
	.selet-mutiple{
		width:100%;
		position:relative;
		overflow:hidden;
		margin-left:10px;
		cursor:pointer;
	}
	.selet-mutiple>div{
		min-width:120px;
		height:30px;
		line-height:30px;
		background:#eee;
		margin-right:10px;
		float:left;
		border:1px solid #ddd;
	}
	.selet-mutiple>div.active{
		background:#6a5;
		color:#fff;
	}

</style>