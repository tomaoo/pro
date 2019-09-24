<template>
	<div class="detail-news">
		<app-layout>
			<div class="main">
				<app-dialog :isShow="infoFirst" @on-close="closeDia('infoFirst')" class="newsInfo"><h3 class="infoTitle">这已经是第一篇了 , 请阅读其他新闻</h3></app-dialog>
				<app-dialog :isShow="infoLast" @on-close="closeDia('infoLast')" class="newsInfo"><h3 class="infoTitle">这已经是最后一篇了 , 请阅读其他新闻</h3></app-dialog>
				<div class="prev" @click="prev(newsId+1)"></div>
				<div class="next" @click="next(newsId+1)"></div>
				<h3 class="pageTitle">新闻情页 / 动态 {{newsId+1}}</h3>
				<div class="article" v-if="newsData[newsId]">
					<h3 class="newsTitle">
						<span class="prev" @click="prev(newsId+1)">上一篇</span>{{newsData[newsId].title}}<span class="next" @click="next(newsId+1)">下一篇</span>
					</h3>
					<div class="sendate">
						<span>动态发布时间 ：{{newsData[newsId].sendDate}}</span>
						<span>作者 ：{{newsData[newsId].author}}</span>
					</div>
					<div class="con" v-if="newsData[newsId]">
						<template v-for="(v,index) in newsData"><img :src="imgurl(index)" v-if="index==newsId" class="img"></template>
						<template v-for="(v,index) in newsData">
							<img :src="imgurl(index)" v-if="index===newsId" class="img">
							<p>
								{{newsData[newsId].title}}
								{{newsData[newsId].title}}
								{{newsData[newsId].title}}
								{{newsData[newsId].title}}
								{{newsData[newsId].title}}
								{{newsData[newsId].title}}
								{{newsData[newsId].title}}
								{{newsData[newsId].title}}
								{{newsData[newsId].title}}
								{{newsData[newsId].title}}
							</p>
						</template>

					</div>
				</div>
			</div>
		</app-layout>
	</div>
</template>
<script type="text/javascript">
	import AppLayout from '@/components/layout'
	import AppDialog from '@/components/dialog'
	export default {
		name:'AppDetailNews',
		components:{
			AppLayout,
			AppDialog
		},
		created(){
			this.$http.get('/api/allDatas').then((data)=>{
				this.newsData=data.body.detailNews.news;
			},(error)=>{
				console.log(error);
			})
		},
		data(){
			return {
				newsData:{},
				newsTitle:'',
				infoFirst:false,
				infoLast:false
			}
		},
		computed:{
			newsId(){
				return parseInt(this.$route.path.replace(/\D+/g,''))-1;
			}
		},
		methods:{
			imgurl(index){
				return require('../../assets/img/'+(index+1)+'.jpg');
			},
			prev(index){
				if(index<=1){
					index=1;
					this.openDial('infoFirst');
					setTimeout(()=>{
						this.infoFirst=false;
					},3000)
				}else{
					index=index-1;
				}
				this.$router.push({path:'/detailnews/'+(index)})
				
			},
			next(index){
				if(index>=this.newsData.length){
					index=this.newsData.length;
					this.openDial('infoLast');
					setTimeout(()=>{
						this.infoLast=false;
					},3000)
				}else{
					index=index+1;
				}
				this.$router.push({path:'/detailnews/'+(index)})
			},
			closeDia(attr){
				this[attr]=false;
			},
			openDial(attr){
				this[attr]=true;
			}
		}
		
	}
</script>
<style type="text/css">
	.detail-news .main{
		width:1180px;
		padding:0 10px 10px 10px;
		margin:0 auto;
		position:relative;
		overflow:hidden;
	}

	.detail-news .main div.prev{
		width:30px;
		height:60px;
		background:#aaa url('../../assets/prev.png') no-repeat left center;
		position:fixed;
		top:400px;
		left:330px;
		z-index:100;
		border-radius:5px 0px 0px 5px;
		cursor:pointer;
	}
	.detail-news .main div.next{
		width:30px;
		height:60px;
		background:#aaa url('../../assets/next.png') no-repeat left center;
		position:fixed;
		top:400px;
		right:330px;
		z-index:100;
		border-radius:0px 5px 5px 0px;
		cursor:pointer;
	}

	.detail-news .main .pageTitle{
		height:60px;
		line-height:60px;
		margin:10px auto !important;
		padding:0;
		background:#fff;
		border-radius:10px;
		text-indent:10px;
		border:1px solid #f0f0f0;
		color:#999;
	}

	.detail-news .main .article{
		background:#fefefe;
		border:1px solid #eee;
		margin-top:20px;
		border-radius:20px;
		position:relative;
		overflow:hidden;
	}

	.detail-news .main .newsTitle{
		height:80px;
		line-height:80px;
		font-weight:bold !important;
		background:#fff;
		border-bottom:1px dotted #eee;
		user-select:none;
	}
	.detail-news .main .newsTitle span{
		display:inline-block !important;
		background:deepskyblue;
		height:30px;
		line-height:30px;
		padding:0 20px;
		color:#fff;
		border-radius:10px;
		cursor:pointer;
		
	}
	.detail-news .main .newsTitle span.prev{
		margin-right:10% !important;
		
	}
	.detail-news .main .newsTitle span.next{
		margin-left:10% !important;
		
	}
	
	.detail-news .main .sendate{
		height:40px;
		display:block;
		position:relative;
		overflow:hidden;
	}
	.detail-news .main .sendate span{
		display:inline-block;
		padding:0px 10px;
		color:#999;
	}
	.detail-news .main .sendate span:first-of-type{
		border-right:1px solid #ccc;
	}
	.detail-news .main .article .con{
		position:relative;
		overflow:hidden;
		padding:20px;
	}
	.detail-news .main .article .con p{
		text-align:left;
		text-indent:32px;
		font-size:16px !important;
		line-height:32px !important;
	}
	.detail-news .main .article .con img{
		display:block;
		margin:10px auto 20px;
		width:640px !important;
	}
	.detail-news .main .article .con img:nth-of-type(2){
		float:left;
		margin-right:10px;
		margin-top:20px;
	}
	.detail-news .main .article .con img:nth-of-type(2) +p{
		margin-top:20px;
	}
	.detail-news .main .article .con img:nth-of-type(2) ~p:nth-of-type(1){
		text-indent:0px;

	}
	.infoTitle{
		height:100px;
		line-height:100px;
	}
	.detail-news .main .newsInfo .dialog-content{
			margin-top:16.5%;
	}
</style>