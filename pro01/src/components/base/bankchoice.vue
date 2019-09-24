<template>
	<div class="app-bankchoice">
		<ul class="bankchoice">
			<li v-for="(item,index) in list" @click="choiceBank(index)" :class="{active:nowIndex==index}">
				<img :src="item.src" v-if="nowIndex==index">
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'AppBankChoice',
		props:{
			list:{
				type:Array,
				default:[],
			}
		},
		data(){
			return {
				nowIndex:16
			}
		},
		methods:{
			choiceBank(index){
				this.nowIndex=index;
				this.$emit('on-change',this.list[index]['id'])
			}
		}
	}
</script>
<style type="text/css">
	.bankchoice{
		margin:0px auto;
		padding:10px;
	}
	.bankchoice li{
		width:120px;
		height:40px;
		float:left;
		margin-right:10px;
		margin-bottom:10px;
		background:url(../../assets/banks.png) no-repeat -120px center;
		cursor:pointer;
		border:1px solid #eee;
	}
	.bankchoice li.active{
		border:1px solid #4a0;
	}
	.bankchoice li:nth-of-type(1){
		background:#fff url('../../assets/banks.png') no-repeat 0px center;
	}
	.bankchoice li:nth-of-type(2){
		background:#fff url('../../assets/banks.png') no-repeat -120px center;
	}
	.bankchoice li:nth-of-type(3){
		background:#fff url('../../assets/banks.png') no-repeat -240px center;
	}
	.bankchoice li:nth-of-type(4){
		background:#fff url('../../assets/banks.png') no-repeat -360px center;
	}
	.bankchoice li:nth-of-type(5){
		background:#fff url('../../assets/banks.png') no-repeat -480px center;
	}
	.bankchoice li:nth-of-type(6){
		background:#fff url('../../assets/banks.png') no-repeat -600px center;
	}
	.bankchoice li:nth-of-type(7){
		background:#fff url('../../assets/banks.png') no-repeat -720px center;
	}
	.bankchoice li:nth-of-type(8){
		background:#fff url('../../assets/banks.png') no-repeat -840px center;
	}
	.bankchoice li:nth-of-type(9){
		background:#fff url('../../assets/banks.png') no-repeat -960px center;
	}
	.bankchoice li:nth-of-type(10){
		background:#fff url('../../assets/banks.png') no-repeat -1080px center;
	}
	.bankchoice li:nth-of-type(11){
		background:#fff url('../../assets/banks.png') no-repeat -1200px center;
	}
	.bankchoice li:nth-of-type(12){
		background:#fff url('../../assets/banks.png') no-repeat -1320px center;
	}
	.bankchoice li:nth-of-type(13){
		background:#fff url('../../assets/banks.png') no-repeat -1440px center;
	}
	.bankchoice li:nth-of-type(14){
		background:#fff url('../../assets/banks.png') no-repeat -1560px center;
	}
	.bankchoice li:nth-of-type(15){
		background:#fff url('../../assets/banks.png') no-repeat -1680px center;
	}
	.bankchoice li:nth-of-type(16){
		background:#fff url('../../assets/banks.png') no-repeat -1800px center;
	}
	.bankchoice li:nth-of-type(17){
		background:#fff url('../../assets/banks.png') no-repeat -1920px center;
	}
	.bankchoice li:nth-of-type(18){
		background:#fff url('../../assets/banks.png') no-repeat -2040px center;
	}
	.bankchoice li:nth-of-type(19){
		background:#fff url('../../assets/banks.png') no-repeat -2160px center;
	}
	.bankchoice li:nth-of-type(20){
		background:#fff url('../../assets/banks.png') no-repeat -2280px center;
	}
	.bankchoice li:nth-of-type(21){
		background:#fff url('../../assets/banks.png') no-repeat -2400px center;
	}
	.bankchoice li:nth-of-type(22){
		background:#fff url('../../assets/banks.png') no-repeat -2520px center;
	}
	.bankchoice li:nth-of-type(23){
		background:#fff url('../../assets/banks.png') no-repeat -2640px center;
	}
	.bankchoice li:nth-of-type(24){
		background:#fff url('../../assets/banks.png') no-repeat -2760px center;
	}
	.bankchoice li:nth-of-type(25){
		background:#fff url('../../assets/banks.png') no-repeat -2880px center;
	}
	.bankchoice li:nth-of-type(26){
		background:#fff url('../../assets/banks.png') no-repeat -3000px center;
	}
	.bankchoice li:nth-of-type(27){
		background:#fff url('../../assets/banks.png') no-repeat -3120px center;
	}
	.bankchoice li:nth-of-type(28){
		background:#fff url('../../assets/banks.png') no-repeat -3240px center;
	}
	.bankchoice li:nth-of-type(29){
		background:#fff url('../../assets/banks.png') no-repeat -3360px center;
	}  
</style>