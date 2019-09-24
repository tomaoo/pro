<template>
	<div class="app-detail">
		<app-layout>
			<div class="detail-wrap">
				<div class="detail-left">
					<img :src="icon" class="thumb">
					<hr>
					<p v-for="(v,i) in list"><router-link  :to="v.url">{{v.title}}</router-link></p>
				</div>
				<div class="detail-right">
					<router-view></router-view>
				</div>
			</div>
		</app-layout>
	</div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '@/components/layout'
import DetailAnalysis from '@/components/pages/detailAnalysis'
import DetailCount from '@/components/pages/detailCount'
import DetailForecast from '@/components/pages/detailForecast'
import DetailPublish from '@/components/pages/detailPublish'
Vue.use(Router)
export default {
	name:"AppDetail",
	components:{AppLayout},
	data(){
		return {
			list:[
				{id:0,title:'数据分析',url:'analysis'},
				{id:1,title:'数据统计',url:'count'},
				{id:2,title:'数据预测',url:'forecast'},
				{id:3,title:'数据发布',url:'publish'},
			],
			imgMap:{
				'/detail/analysis':require('../../assets/1.png'),
				'/detail/count':require('../../assets/2.png'),
				'/detail/forecast':require('../../assets/3.png'),
				'/detail/publish':require('../../assets/4.png')
			}
		}
	},
	computed:{
		icon(){
			return this.imgMap[this.$route.path]
		}
	},
	methods:{
	}
}
</script>
<style type="text/css">
	hr{
		border:none;
		height:1px;
		background:#eee;
	}
	.detail-right .dialog-content{
		width:80%;
		height:50%;
		background:#fff;
		margin:0 auto;
		margin-left:-20%;
		overflow:hidden;
	}
	.detail-wrap{
		width:1200px;
		position:relative;
		overflow:hidden;
		margin:10px auto;
	}
	.detail-left,.detail-right{
		width:200px;
		background:#fff;
		float:left;
		margin-right:8px;
		padding:8px 0px;
	}
	.detail-right{
		width:992px;
		margin-right:0px;
		position:relative;
	}
	.app-detail .thumb{
		display:block;
		margin:10px auto 20px;
	}
	.detail-left a{
		width:180px;
		height:30px;
		line-height:30px;
		font-size:14px;
		margin:0 auto;
		color:#333;
	}

	.detail-left .router-link-active{
		display:block;
		color:#5a8 !important;
		font-weight:bold;
		cursor:pointer;
	}

	.app-detail p>a{
		display:block;
		color:#333 !important;
	}

	.app-detail .select-single{
		clear:both;
		margin-top:10px !important;
	}
	
	.app-detail .tit>h3{
		margin:0;
		padding:0;
		height:60px;
		line-height:60px;
		background:#fafafa;

	}
	.app-detail .tit>div{
		text-align:left;
		padding:20px 10px;
		border-bottom:1px solid #eee !important;
		margin-bottom:10px;
		margin-top:10px;
		text-indent:32px;
		line-height:30px;

	}

	.detail-analysis{
		position:relative;
		overflow:hidden;
	}
	.select-single{
		clear:both;
		margin-top:10px !important;
	}
	.app-detail .selet-mutiple{
		clear:both;
		margin:10px !important;
	}
	.app-detail .dat{
		position:relative;
		overflow:hidden;
	}
	.dat>h3{
		text-align:left;
		margin-left:10px;
		color:#666;
		margin-bottom:10px;
		font-size:14px;
	}
	.xq{
		margin:10px auto;
		position:relative;
		overflow:hidden;
	}
	.xq>img{
		display:block;
		margin-left:10px;
	}
	.priceTitle,.app-detail .price{
		width:60px;
		float:left;
	}
	.app-detail .price{
		text-align:left;
		margin-top:0px;
		font-size:24px;
		width:200px;
		color:#f40;
	}
	.payTitle,.priceTitle{
		width:60px !important;
		clear:left;
		float:left;
		margin-top:5px;

	}
	.payCount{
		text-align:left;
		margin-top:5px;
		float:left;
		color:#aaa !important;
		font-size:18px;
		width:200px;
		margin-bottom:20px;
	}
	.payCount>span,.price>span{
		font-size:14px;
		font-weight:normal;
		margin-left:10px;

	}
	.payStyle input{
		width:120px;
		margin:10px;
		height:30px;
	}
	.paybtn{
		clear:both;
		position:relative;
		overflow:hidden;
		text-align:left;
		margin:20px 10px 20px 10px;
	}
	.payStyle:nth-of-type(2){
		width:100%;
		position:absolute;
		bottom:0px;
		border-top:1px solid #ddd;
	}
	.paybtn>input[type='button']{
		width:120px;
		height:35px;
		border:1px solid #f40;
		background:#f40;
		color:#fff;
		font-size:16px;
		border-radius:5px;
		cursor:pointer;
		outline:none;
	}
	.payStyle{
		height:60px;
		line-height:60px;
		margin:0;
		padding:0;
		background:#f0f0f0;
		border-bottom:1px solid #ddd;
	}
	.payMehods{
		margin:0 auto;
		padding:10px 0px;
		position:relative;
		overflow:hidden;
	}


	.payDialog .dialog-content{
		width:40%;
		left:50%;
		top:20%;
	}
	
	.app-checkorder .dialog  .dialog-content{
		width:20%;
		height:80px;
		left:60%;
		top:40%;
	}

	.app-checkorder .dialog  .dialog-content .stateTitle{
		background:#fafafa url(../../assets/su.png) no-repeat 20px center;
		height:80px;
		line-height:80px;
		margin:0;
		padding:0;
		color:#4a0;
	}
	.app-checkorder .dialog .dialog-close {
		display:none;
	}
	.app-checkorder .dialog  .dialog-content .ca{
		background:#fafafa url(../../assets/ca.png) no-repeat 50px center;
		color:#f40;
	}

</style>