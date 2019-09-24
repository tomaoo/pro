<template>
	<div class="app-checkorder">
		<app-dialog :isShow="paySu"  @on-close="paySuDia"><h3 class="stateTitle su">支付成功</h3></app-dialog>
		<app-dialog :isShow="buySu"  @on-close="buySuDia"><h3 class="stateTitle bu" >下单成功</h3></app-dialog>
		<app-dialog :isShow="payCa"  @on-close="payCaDia"><h3 class="stateTitle ca">支付取消</h3></app-dialog>	
	</div>
</template>
<script type="text/javascript">
	import AppDialog from '@/components/dialog'
	export default {
		name:'AppCheckOrder',
		components:{AppDialog},
		props:{
			paySu:{
				type:Boolean,
				default:false
			},
			buySu:{
				type:Boolean,
				default:false
			},
			payCa:{
				type:Boolean,
				default:false
			}
		},


		data(){
			return {
			}
		},
		methods:{
			
			paySuDia(){
				this.paySu=false;
				this.$emit('open','paySu')
			},
			buySuDia(){
				this.buySu=false;
				this.$emit('open','buySu')
			},
			payCaDia(){
				this.payCa=false;
				this.$emit('open','payCa')
			}
		}

	}
</script>
<style type="text/css">
	.stateTitle{
		margin:0;
		padding:0;
		height:60px;
		line-height:60px;
		background:#eee;
	}
</style>