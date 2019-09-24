<template>
	<div class="app-dynamic">
		<Layout>
			<div class="main">
				<h3 class="pageTitle">{{news.title}}</h3>
				<div class="newsDesc">{{news.newsDesc}}</div>
				<div class="item" v-for="(val,index) in news.news" v-if="index>=pageMin && index<pageMax">
					<router-link :to="val.detailurl"><div class="thumb"><img :src=imgurls(index+1)></div>
					<div class="title">{{val.title}}</div></router-link>
				</div>
				<input type="button" name="" value="上一页" @click="prev('prev')" :disabled="flag1">
				<input type="button" name="" value="下一页" @click="next('next')" :disabled="flag2">
			</div>
		</Layout>
	</div>
</template>
<script type="text/javascript">
	import Layout from '@/components/layout'
	export default {
		name:"AppDynamic",
		components:{
			Layout,
		},
		created(){
			this.$http.get('api/allDatas').then((data)=>{
				this.news=data.body.NewsList;
				console.log(this.news)
			},(error)=>{console.log(error)})
		},
		data(){
			return {
				news:{},
				page:6,
				pageMin:0,
				pageMax:6,
				flag1:false,
				flag2:false
			}
		},

		methods:{
			imgurls(index){
				return require('../../assets/img/'+index+'.jpg')
			},
			prev(attr){
				this.flag2=false;
				this.pageMin-=this.page;
				this.pageMax-=this.page;
				if(this.pageMin<0) {
					this.pageMin=0;
					this.pageMax=this.page;
					this.flag1=true;
				}else{
					this.flag1=false;
				}
				

			},
			next(attr){
				this.flag1=false;
				this.pageMin+=this.page;
				this.pageMax+=this.page;
				if(this.pageMax>this.news.news.length) {
					this.pageMin=this.news.news.length-this.page;
					this.pageMax=this.news.news.length;
					this.flag2=true;
				}else{
					this.flag2=false;
				}
			}
		}
	}
</script>
<style type="text/css">
	.app-dynamic .main{
		width:1180px;
		margin:0 auto;
		text-align:left;
		padding:20px;
		background:#fff;
		min-height:731px;
	}
	.app-dynamic .pageTitle{
		margin:0;
		padding:0;
		height:40px;
		line-height:40px;
		font-weight:bold !important;
		text-indent:10px;
		
	}
	.app-dynamic .newsDesc{
		height:50px;
		line-height:50px;
		color:#aaa;
		margin:10px 0 20px 0px;
		background:#fafafa;
		text-indent:10px;
		border-radius:10px;
		font-size:14px;
	}
	.app-dynamic .item{
		height:80px;
		margin-bottom:10px;
		border-bottom:1px dashed #ddd;
		cursor:pointer;
	}
	.app-dynamic .item:last-of-type{
		border:none;
	}
	.app-dynamic .item:hover .title{
		color:#f40;
	}
	.app-dynamic .item{
		margin-left:10px;
	}
	.app-dynamic .thumb{
		width:80px;
		height:80px;
		position:relative;
		overflow:hidden;
		float:left;
		margin-right:10px;
	}
	.app-dynamic .thumb>img{
		width:100%;
		display:block;
	}
	.app-dynamic .title{
		width:400px;
		height:40px;
		line-height:40px;
		float:left;
	}

</style>