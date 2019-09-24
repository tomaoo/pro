<template>
	<div class="orderlist">
		<app-layout>
			<div class="main">
				<div class="olist">
					<h3 class="pageTitle">{{pagTitle}}</h3>
					<div class="tiao">
						<span>商品列表</span>
						<select @change="paramsChange('proId',selected)" v-model="selected">
							<option value="default">--请选择---</option>
							<option v-for="(item,index) in dd" :value="item.id">{{item.title}}</option>
						</select>
					</div>
					<div class="tiao">
						<span>开始日期</span>
						<input type="date" name="" v-model="dateStart" @change="paramsChange('startd',dateStart)">
					</div>
					<div class="tiao">
						<span>结束日期</span>
						<input type="date" name="" v-model="dateEnd" @change="paramsChange('endd',dateEnd)">
					</div>
					<div class="tiao">
						<span>关键字</span>
						<input type="search" name="" placeholder="请输入关键字" v-model="msg" @change="paramsChange('keyWords',msg)">
					</div>
				</div>
				<table>
					<th>订单编号</th>
					<th>商品名称</th>
					<th>下单日期</th>
					<th>购买数量</th>
					<th>支付金额</th>
					<th>支付方式</th>
					<tr v-for="(item,index) in dd">
						<td>{{item.bh}}</td>
						<td class="tit"><router-link :to="item.url">{{item.title}}</router-link></td>
						<td>{{item.cdate}}</td>
						<td>{{item.number}}</td>
						<td>{{item.payMoney}}</td>
						<td>{{item.paystyle}}</td>
					</tr>
				</table>
			</div>
		</app-layout>
	</div>
</template>
<script type="text/javascript">
	import AppLayout from "@/components/layout"
	export default {
		name:'AppOrderList',
		components:{
			AppLayout
		},
		data(){
			return {
				pagTitle:'我的订单',
				selected:'default',
				dateStart:'',
				dateEnd:'',
				msg:''
			}
		},
		watch:{
			paramsChange(msg){
				return msg;
			}
		},
		computed:{
			dd(){
				return this.$store.getters.getOrderList;
			}
		},
		methods:{
			paramsChange(attr,value){
				this.$store.commit('uppdateParams',{key:attr,val:value});
				this.$store.dispatch('fetchOrderList');
			}
		},
		mounted(){
			this.paramsChange();
		}
	}
	
</script>
<style type="text/css">
	.orderlist .pageTitle{
		height:80px;
		line-height:80px;
		background:deepskyblue;
		text-align:center;
		border-radius:10px;
		font-weight:bold !important;
		color:#fff;
	}
	.orderlist span{
		width:80px;
		display:inline-block;
		height:30px;
		line-height:30px;
		text-align:center;
	}
	.orderlist input ,.orderlist select {
		outline:none;
		height:30px;
		line-height:30px;
		width:200px;
		text-overflow:ellipsis;
		overflow:hidden;
		white-space:nowrap;
		display:inline-block;
		text-indent:10px;
		box-sizing:border-box;
		vertical-align:middle;
	}
	.orderlist .main{
		width:1180px;
		height:800px;
		margin:0 auto;
		padding:10px;
		background:#fafafa;
		cursor:pointer;
	}
	.orderlist .olist{
		position:relative;
		overflow:hidden;
		text-align:left;
		clear:both;
		margin-bottom:20px;
	}
	.orderlist .olist .tiao{
		width:290px;
		float:left;

	}
	.orderlist table{
		border-collapse:collapse;
		margin:0 auto;
		clear:both;
		cursor:pointer;
	}
	.orderlist table th,.orderlist table td{
		border:1px solid deepskyblue;
		width:200px;
		height:30px;
		line-height:30px;
		color:#333;

	}

	.orderlist table th{
		height:40px;
		line-height:40px;
		background:deepskyblue;
		color:#fff;
		border:1px solid deepskyblue;
	}
	.orderlist table th:hover{
		background:#0a0;
		border:1px solid #0a0;
	}


	.orderlist table td.tit a{
		display:block;
		width:360px;
		height:30px;
		line-height:30px;
		text-align:left;
		text-indent:10px;
		text-overflow:ellipsis;
		overflow:hidden;
		white-space:nowrap;
		color:#333;
	}
	.orderlist table td.tit:hover a{
		color:#f20;
		text-decoration:underline;
	}

	.orderlist .dialog-content{
		width:30%;
		left:35%;
	}
</style>