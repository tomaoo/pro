<template>
	<div class="app-home">
		<Layout>
			<div class="main">
				<div class="main-left">
					<h3 class="classMode">{{goods.title}}</h3>
					<h3 class="goodsClassTitle" v-if="goods.PC">{{goods.PC.title}}</h3>
					<ul v-if="goods.PC">
						<li v-for="(gd,index) in goods.PC.pcList" v-if="index<4">
							<router-link :to="gd.url">{{gd.title}}</router-link>
							<span v-if="gd.hot" class="pchot">Hot</span>
						</li>
						<router-link :to="goods.PC.more"><span class="more">查看更多&gt;&gt;&gt;</span></router-link>
					</ul>
					<hr v-if="goods.title">
					<h3 class="goodsClassTitle" v-if="goods.APP">{{goods.APP.title}}</h3>
					<ul v-if="goods.APP">
						<li v-for="(ad,index) in goods.APP.appList" v-if="index<4">
							<router-link :to="ad.url">{{ad.title}}</router-link>
							<span v-if="ad.hot" class="apphot">Hot</span>
						</li>
						<router-link :to="goods.APP.more"><span class="more">查看更多&gt;&gt;&gt;</span></router-link>
					</ul>
					<h3 class="classMode">{{news.title}}</h3>
					<ul v-if="news.news">
						<li v-for="(item,index) in news.news" v-if="index<=7"><router-link :to="item.detailurl">{{item.title}}</router-link></li>
						<router-link :to="news.more"><span class="more">查看更多&gt;&gt;&gt;</span></router-link>
					</ul>
				</div>
				<div class="main-right">
					<div class="carousel"><app-carousel :slides="carouseData"></app-carousel></div>
					<div class="products">
						<div class="pros" v-for="pro in products">
							<h3 class="ptitle">{{pro.title}}</h3>
							<div class="pdes">{{pro.des}}</div>
							<router-link :to="pro.url" class="pbtn">立即购买</router-link>
						</div>
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
		created(){
			this.$http.post('api/allDatas').then((data)=>{
				console.log(data.body)
				this.goods=data.body.GoodsList;
				this.news=data.body.NewsList;
				this.products=data.body.productList;
			},(error)=>{
				console.log(error);
			})
		},
		name:"AppHome",
		components:{
			Layout,
			AppCarousel,
		},

		data(){
			return {
				goods:{},
				news:{},
				products:[],
				carouseData:[
					{id:0,href:'/',src:require('../../assets/pic1.jpg'),href:'/detail/analysis'},
					{id:1,href:'/',src:require('../../assets/pic2.jpg'),href:'/detail/count'},
					{id:2,href:'/',src:require('../../assets/pic3.jpg'),href:'/detail/forecast'},
					{id:3,href:'/',src:require('../../assets/pic4.jpg'),href:'/detail/publish'},
				]
			}
		}
	}
</script>
<style>
	.main{
		width:1200px;
		position:relative;
		overflow:hidden;
		margin:8px auto;
	}
	.main-left{
		width:292px;
		margin-right:8px;
		float:left;
		background:#fff;
	}
	.main-right{
		width:900px;
		float:left;
	}
	.classMode{
		height:40px;
		line-height:40px;
		background:#485;
		color:#fff;
		text-align:left;
		padding-left:15px;
		margin:0px 0px 8px 0px;
		font-weight:bold !important;
	}
	.goodsClassTitle{
		text-align:left;
		padding-left:15px;
		height:35px;
		line-height:35px ;
		margin:0;
		color:#666;
		font-weight:bold !important;
		font-size:16px;
	}
	hr{
		border:none;
		height:1px;
		background:#ddd;
	}
	.more{
		padding:5px;
		display:block;
		margin-right:20px;
		text-align:left;
		margin-left:15px;
		/*border-top:1px dashed #ddd;*/
		margin-top:10px;
	}
	.pchot,.apphot{
		padding:1px 5px;
		background:#f40;
		color:#fff;
	}
	.main-left li{
		text-align:left;
		display:block !important;
		height:28px;
		line-height:28px;
		text-overflow:ellipsis;
		overflow:hidden;
		white-space:nowrap;
		padding-left:10px;
	}
	.main-left li a{
		color:#333;
	}
	.main-left li:hover a{
		text-decoration:underline;
		color:#f40;
	}
	.pros{
		width:49.5%;
		background:#fff;
		float:left;
		margin-right:1%;
		margin-bottom:1%;
		padding:20px 0px;
	}
	.pros:nth-of-type(2n){
		margin-right:0;
	}
	.pros:nth-of-type(1){
		background:#fff url(../../assets/1.png) no-repeat 10% center;
	}
	.pros:nth-of-type(2){
		background:#fff url(../../assets/2.png) no-repeat 10% center;
	}
	.pros:nth-of-type(3){
		background:#fff url(../../assets/3.png) no-repeat 10% center;
	}
	.pros:nth-of-type(4){
		background:#fff url(../../assets/4.png) no-repeat 10% center;
	}
	.pros .ptitle{
		width:60%;
		text-align:left;
		font-weight:bold;
		height:30px;
		line-height:30px;
		margin:0 0 0 40%;
	}
	.pros .pdes{
		width:60%;
		text-align:left;
		margin:0 0 0 40%;
		color:#666;
	}
	.pros .pbtn{
		color:#fff;
		display:block;
		width:100px;
		height:35px;
		line-height:35px;
		text-align:center;
		background:#485;
		margin:8px 0 0 40%;
		border-radius:5px;
	}
	.pros:hover .pbtn{
		background:crimson;
	}
	.app-home .carousel{
		width:900px;
		height:506px;
		background:#fff;
		margin-bottom:1%;
		position:relative;
		overflow:hidden;
	}
	.app-home .carousel li.active{
		background:#f40 !important;
	}
	.app-home .carousel-wrap{
		width:900px !important;
		height:506px;
		margin:0px auto;
	}
	.app-home .carousel-wrap .carousel-img{
		width:100% !important;
		height:506px;
	}
</style>