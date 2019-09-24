<template>
	<div class="app-counter">
		<input type="button" name="" value="-" @click="sub">
		<input type="text" name="" v-model="number" @keyup="fixNumber">
		<input type="button" name="" value="+" @click="add">
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'AppCounter',
		props:{
			min:{
				type:Number,
				default:1
			},
			max:{
				type:Number,
				default:10
			},
		},
		data(){
			return {
				number:this.min
			}
		},
		watch:{
			number(){
				this.$emit('on-change',this.number);
			}
		},
		methods:{
			add(){
				if(isNaN(Number(this.number))) return this.min;
				this.number+=1;
				if(Number(this.number)<=this.min) this.number=this.min;
				if(Number(this.number)>=this.max) this.number=this.max;
			},
			sub(){
				if(isNaN(Number(this.number))) return this.min;
				this.number-=1;
				if(Number(this.number)<=this.min) this.number=this.min;
				if(Number(this.number)>=this.max) this.number=this.max;
			},
			fixNumber(){
				this.number=String(this.number).replace(/\D+/g,'');
				if(Number(this.number)<=this.min) this.number=this.min;
				if(Number(this.number)>=this.max) this.number=this.max;
			}
		}
	}
</script>
<style type="text/css" scoped>
	input{
		outline:none;
		display:block;
		float:left;
		border:1px solid #ccc;
		height:26px;
		line-height:35px;
		width:100px;
		text-align:center;
		font-size:16px;

	}
	input[type="button"]{
		background:#f8f8f8;
		height:30px;
		width:30px;
		line-height:30px;
		cursor:pointer;
		font-size:16px;
		color:#666;
	}
	input[type="text"]{
		background:#fff;
		border-left:none;
		border-right:none;
	}
	.app-counter{
		position:relative;
		overflow:hidden;
		width:200px;
		margin-left:10px;
	}
</style>