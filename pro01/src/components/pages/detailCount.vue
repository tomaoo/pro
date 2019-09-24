<template>
	<div class="detail-count">
		<div class="tit">
			<h3>{{title}}</h3>
			<div>{{info}}</div>
		</div>
		<div class="dat">
		
				<h3>购买数量</h3>
				<app-counter :min="minNum" :max="maxNum" @on-change="params('ByNumber',$event)"></app-counter>
			
		
				<h3>购买版本</h3>
				<app-selections :list="byVersion" @on-change="params('ByVersion',$event)"></app-selections>
		
				<h3>购买内容</h3>
				<app-selectionm :list="byContent" @on-change="params('ByContent',$event)"></app-selectionm>

				<h3 class="priceTitle">商品价格</h3>
				<div class="price"><span>￥</span>{{price}}</div>
				<h3 class="payTitle">实际付款</h3>
				<div class="payCount"><span>￥</span>{{price*ByNumber}}</div>
				<div class="paybtn"><input type="button" name="" value="立即付款" @click="payDialog"></div>

		</div>
		<div class="xq">
			<img :src="xqimg">
		</div>
		<app-dialog :isShow="showPay" @on-close="closeDialog" class="payDialog">
			<h3 class="payStyle">请选择支付方式</h3>
			<app-bank-choice :list="pays" @on-change="params('payId',$event)">
			</app-bank-choice>
			<h3 class="payStyle">
				<input type="button" name="" value="确认" @click="createOrder">
				<input type="button" name="" value="取消" @click="closeDialog">
			</h3>
		</app-dialog>
		<app-check-order :paySu="paySuDia" :buySu="buySuDia" :payCa="payCaDia"></app-check-order>
	</div>
</template>
<script type="text/javascript">
	import AppCounter from '@/components/base/counter'
	import AppSelections from '@/components/base/choice'
	import AppSelectionm from '@/components/base/mutiple'
	import AppBankChoice from '@/components/base/bankchoice'
	import AppDialog from '@/components/dialog'
	import AppCheckOrder from '@/components/base/checkorder'

	export default {
		name:"DetailCount",
		components:{
			AppCounter,
			AppSelections,
			AppSelectionm,
			AppBankChoice,
			AppDialog,
			AppCheckOrder
		},
		data(){
			return {
				title:'数据统计',
				info:'网易公司一直秉持“匠心”和“创新”的理念，为用户提供各类优质服务。目前，网易业务涵盖游戏、电商、新闻门户、邮箱、文化娱乐、在线教育、企业服务、工具应用等，是目前中国最大的互联网公司之一, 覆盖超过9亿的用户。',
				minNum:1,
				maxNum:5,
				showPay:false,
				price:0,
				ByNumber:1,
				ByVersion:0,
				ByContent:0,
				payId:16,
				xqimg:require('../../assets/pic2.jpg'),
				orderId:null,
				code:null,
				paySuDia:false,
				buySuDia:false,
				payCaDia:false,
				pfa:false,
				pca:false,
				byVersion:[
					{val:0,label:'试用版'},
					{val:1,label:'标准版'},
					{val:2,label:'旗舰版'},
					{val:3,label:'至尊版'}
				],

				byContent:[
					{val:0,label:'HTML'},
					{val:1,label:'CSS'},
					{val:2,label:'JAVASCRIPT'},
					{val:3,label:'VUE'},
					{val:4,label:'PHP'},
					{val:5,label:'JAVA'}
				],
				pays:[
					{id:0,src:require('../../assets/bankchoice.png')},
					{id:1,src:require('../../assets/bankchoice.png')},
					{id:2,src:require('../../assets/bankchoice.png')},
					{id:3,src:require('../../assets/bankchoice.png')},
					{id:4,src:require('../../assets/bankchoice.png')},
					{id:5,src:require('../../assets/bankchoice.png')},
					{id:6,src:require('../../assets/bankchoice.png')},
					{id:7,src:require('../../assets/bankchoice.png')},
					{id:8,src:require('../../assets/bankchoice.png')},
					{id:9,src:require('../../assets/bankchoice.png')},
					{id:10,src:require('../../assets/bankchoice.png')},
					{id:11,src:require('../../assets/bankchoice.png')},
					{id:12,src:require('../../assets/bankchoice.png')},
					{id:13,src:require('../../assets/bankchoice.png')},
					{id:14,src:require('../../assets/bankchoice.png')},
					{id:15,src:require('../../assets/bankchoice.png')},
					{id:16,src:require('../../assets/bankchoice.png')},
					{id:17,src:require('../../assets/bankchoice.png')},
					{id:18,src:require('../../assets/bankchoice.png')},
					{id:19,src:require('../../assets/bankchoice.png')},
					{id:20,src:require('../../assets/bankchoice.png')},
					{id:21,src:require('../../assets/bankchoice.png')},
					{id:22,src:require('../../assets/bankchoice.png')},
					{id:23,src:require('../../assets/bankchoice.png')},
					{id:24,src:require('../../assets/bankchoice.png')},
					{id:25,src:require('../../assets/bankchoice.png')},
					{id:26,src:require('../../assets/bankchoice.png')},
					{id:27,src:require('../../assets/bankchoice.png')},
					{id:28,src:require('../../assets/bankchoice.png')},
				]
			}
		},
		methods:{
			payDialog(){
				this.showPay=true;
				this.payId=16;
				this.getPrice();

			},
			closeDialog(){
				this.showPay=false;
			},
			params(attr,val){
				this[attr]=val;
				this.getPrice();
			},
			getPrice(){
				var paramsData={
					ByNumber:this.ByNumber,
					ByVersions:this.ByVersion,
					ByContents:this.ByContent,
					payBank:this.payId
				}
				this.$http.post('../api/price2',paramsData).then((res)=>{
					this.price=res.body
				},(error)=>{console.log(error)})
			},
			createOrder(){
				var paramsData={
					ByNumber:this.ByNumber,
					ByVersions:this.ByVersion,
					ByContents:this.ByContent,
					payBank:this.payId
				}
				this.$http.post('../api/createOrder',paramsData).then((res)=>{
					this.orderId=res.body.orderId;
					// this.code=res.body.code;
					//前端技术随机模拟支付状态
					this.code=Math.floor(Math.random()*3);
					console.log(this.orderId);
					if(this.orderId && this.code==2) {
						this.showPay=false;
						this.paySuDia=true;
						setTimeout(()=>{
							this.paySuDia=false;
						},3000)
					}else if(this.orderId && this.code==1){
						this.showPay=false;
						this.buySuDia=true;
						setTimeout(()=>{
							this.buySuDia=false;
						},3000)
					}else if(this.orderId && this.code==0){
						this.showPay=false;
						this.payCaDia=true;
						setTimeout(()=>{
							this.payCaDia=false;
						},3000)
					}
				},(error)=>{console.log(error)})
			}
		},

		mounted(){
			this.ByNumber=1
			this.ByVersions=this.byVersion
			this.ByContents=this.byContent
			this.payBank=this.payId
			this.getPrice();
		}

	}
</script>
<style type="text/css">


</style>