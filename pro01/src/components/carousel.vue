<template>
	<div class="carousel-wrap" @mouseover="stop" @mouseout="play">
		<div class="carousel-img">
			<router-link :to="slides[currentIndex]['href']">
				<transition name="slide-in"> 
					<img v-if="isShow"  :src="slides[currentIndex]['src']">
				</transition>
				<transition name="slide-off">
					<img v-if="!isShow" :src="slides[currentIndex]['src']">
				</transition>
			</router-link>	
		</div>
		<div class="carousel-info">{{currentIndex+1}}/{{slides.length}}</div>
		<div class="carousel-prev" @click="run(prevIndex)"></div>
		<div class="carousel-next" @click="run(nextIndex)"></div>
		<ul class="carousel-order">
			<li v-for="(item,index) in slides" :class="{active:index==currentIndex}" @mouseover="run(index)"></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'AppCarousel',
		props:{
			slides:{
				type:Array,
				default:[]
			}
		},
		data(){
			return {
				currentIndex:0,
				timer:null,
				isShow:true
			}
		},
		computed:{
			prevIndex(){return (this.currentIndex==0)?(this.slides.length-1):(this.currentIndex-1)},
			nextIndex(){return (this.currentIndex==(this.slides.length-1))?0:(this.currentIndex+1)}
		},
		methods:{
			run(index){
				this.isShow=false;
				setTimeout(()=>{
					this.isShow=true;
					this.currentIndex=index;
				},100)
			},
			play(){
				clearInterval(this.timer);
				this.timer=setInterval(()=>{
					this.run(this.nextIndex);
				},2500)
			},
			stop(){
				clearInterval(this.timer);
			}
		},
		mounted(){
			this.play()
		}
	}
</script>
<style type="text/css">

	.slide-in-enter-active{
		transition:all 0.5s;
	}
	.slide-in-enter{
		transform:translateX(100%));
	}
	.slide-off-leave-active{
		transition:all 0.5s;
		transform:translateX(-100%);
	}
	.carousel-wrap,.carousel-img{
		position:relative;
		width:900px;
		height:506px;
		overflow:hidden;
	}
	.carousel-img>a{
		display:block;
		font-size:0;
		position:relative;
		left:0;
		top:0;
	}
	.carousel-img>a>img{
		display:block;
		width:100%;
		position:absolute;
		left:0;
		top:0;
	}
	.carousel-prev,.carousel-next{
		width:30px;
		height:60px;
		position:absolute;
		top:50%;
		margin-top:-30px;
		opacity:0.3;
		cursor:pointer;
	}
	.carousel-prev{
		background:rgba(255,255,255,0.3) url(../assets/prev.png) no-repeat left center;
		border-radius:0 5px 5px 0;
		left:0;
	}
	.carousel-next{
		background:rgba(255,255,255,0.3) url(../assets/next.png) no-repeat left center;
		border-radius:5px 0px 0px 5px;
		right:0;
	}
	.carousel-wrap:hover .carousel-prev,.carousel-wrap:hover .carousel-next{
		opacity:1;
	}
	.carousel-order,.carousel-info{
		width:100%;
		height:30px;
		position:absolute;
		bottom:0;
		left:0;
		background:rgba(0,0,0,0.4);
		z-index:100000;
	}
	.carousel-order li{
		width:10px;
		height:10px;
		margin-top:10px;
		margin-left:10px;
		float:left;
		background:#fff;
	}
	.carousel-order li:first-of-type{
		margin-left:45%;
	}
	.carousel-order li.active{
		background:#f40;
	}
	.carousel-info{
		width:30px !important;
		background:transparent;
		width:200px;
		left:55%;
		color:#fff;
		font-size:14px;
		line-height:30px;
		z-index:100005;
	}
</style>