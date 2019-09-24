<template>
	<div class="app-goods">
		<Layout>
			<div class="carousel"><app-carousel :slides="carouseData"></app-carousel></div>
			<div class="main">
				<!-- <h3 class="pageTitle">{{msg}}</h3> -->
				
				<div class="app" v-if="goods.APP">	
					<h3 class="proTitle">{{goods.APP.title}}</h3>
					<div class="item" v-for="(val,index) in goods.APP.appList">
						<div class="thumb"><img :src="imgUrl(index+1)"></div>	
						<div class="title">{{val.title}}</div>
						<div class="info">
							<span class="price">活动价&nbsp;&yen;<strong>{{val.price}}</strong></span> 
							<span class="oldprice">原价&nbsp;{{val.oldprice}}</span>
						</div>
						
						<div class="btn"><router-link :to="val.url">立即购买</router-link></div>
					</div>	
				</div>
				<div class="pc" v-if="goods.PC">
					<h3 class="proTitle">{{goods.PC.title}}</h3>
					<div class="item" v-for="(val,index) in goods.PC.pcList">
						<div class="thumb"><img :src="imgUrl(index+7)"></div>	
						<div class="title">{{val.title}}</div>
						<div class="info">
							<span class="price">活动价&nbsp;&yen;<strong>{{val.price}}</strong></span> 
							<span class="oldprice">原价&nbsp;{{val.oldprice}}</span>
						</div>
						<div class="btn"><router-link :to="val.url">立即购买</router-link></div>	
					</div>	
				</div>
			</div>	
		</Layout>
	</div>
</template>
<script type="text/javascript">
	import Layout from '@/components/layout'
	import AppCarousel from '@/components/carousel'
	export default {
		name:"AppAGoods",
		components:{
			Layout,
			AppCarousel
		},
		created(){
			this.$http.get('api/allDatas').then((data)=>{
				
				this.goods=data.body.GoodsList;
				console.log(this.goods)
			},(error)=>{console.log(error)})
		},
		data(){
			return {
				msg:"商品列表",
				goods:{},
				carouseData:[
					{id:0,href:'/',src:require('../../assets/p1.jpg'),href:'/detail/analysis'},
					{id:1,href:'/',src:require('../../assets/p2.jpg'),href:'/detail/count'},
					{id:2,href:'/',src:require('../../assets/p3.jpg'),href:'/detail/forecast'},
					{id:3,href:'/',src:require('../../assets/p4.jpg'),href:'/detail/publish'},
				]
			}
		},
		methods:{
			imgUrl(index){
				return require('../../assets/img/'+index+'.jpg')
			}
		}
	}
</script>
<style type="text/css">
	input{
		outline:none;
	}
	.app-goods .main{
		width:1180px;
		background:#eee;
		margin:0px  auto 10px;
		position:relative;
		overflow:hidden;
	}
	.app-goods .pageTitle{
		height:50px;
		margin:0;
		padding:0;
		line-height:50px;
		background:#fafafa;
		border-bottom:1px solid #eee;
		clear:both;
	}
	.app-goods .proTitle{
		clear:both;
		height:50px;
		line-height:50px;
		margin:0 0 10px 0;
		padding:0;
		background:crimson;
		color:#fff;
	}
	.app-goods .item{
		width:386.65px;
		height:400px;
		background:#fff;
		float:left;
		margin-right:10px;
		margin-bottom:10px;
		position:relative;
		overflow:hidden;
		cursor:pointer;
		text-align:left;
	}
	.app-goods .item:nth-of-type(3n){
		margin-right:0px;
	}
	.app-goods .item .title{
		height:35px;
		line-height:35px;
		background:#fff;
		color:#666;
		text-align:left;
		text-indent:10px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.app-goods .item:hover .title{
		color:#333;
		text-decoration:underline;
	}
	
	.app-goods .item .info{
		height:30px;
		line-height:30px;
	}
	.app-goods .item .info span{
		margin-left:10px;
		display:inline-block;
	}
	.app-goods .item .info span.oldprice{
		color:#aaa;
		text-decoration:line-through;
	}
	.app-goods .item .info span.price{
		color:#f40;
		font-size:16px;
	}
	.app-goods .item .info span.price strong{
		font-size:18px;
		margin-left:5px;
	}
	
	.app-goods .item>.thumb{
		width:100%;
		position:relative;
		overflow:hidden;
	}
	.app-goods .item:hover .btn{
		background: crimson;
	}
	.app-goods .item .btn{
		width:100px;
		height:30px;
		margin-left:10px;
		border:none;
		background:#6a5;
		color:#fff;
		cursor:pointer;
		position:relative;
		overflow: hidden;
		border-radius:5px;
	}
	.app-goods .item>.thumb>img{
		width:100%;
	}
	.app-goods .carousel-wrap{
		width:1180px !important;
		height:600px;
		margin:0px auto;
	}
	.app-goods .carousel-wrap .carousel-img{
		width:100% !important;
		height:600px;
	}
	.app-goods .item a{
		width:100px;
		display:block;
		color:#fff;
		font-size:16px;
		height:30px;
		line-height:30px;
		text-align:center;
	}
</style>