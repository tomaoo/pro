<template>
	<div class="app-contact">
		<Layout>
			<div class="main">
				<h3 class="pageTitle">{{msg}}</h3>
				<img src="../../assets/dt.png" class="ditu">
				<div class="info">
					<div class="name">公司名称 ：{{name}}</div>
					<div class="address">公司地址：{{address}}</div>
					<div class="tel">公司电话：{{tel}}</div>
					<div class="email">公司邮箱：{{email}}</div>
					<div class="liuyan">
						<p>给我留言</p>
						<textarea></textarea>
						<button>提交</button>
					</div>
				</div>
			</div>
		</Layout>
	</div>
</template>
<script type="text/javascript">
	import Layout from '@/components/layout'
	export default {
		name:"AppAContact",
		components:{
			Layout,
		},
		data(){
			return {
				msg:"联系我们",
				name:'TOM科技股份有限公司',
				address:'浙江省杭州市西湖区西湖文化广场21世纪大道未来科技大厦',
				tel:'0571-88888-8888',
				email:'tom@163.com'
			}
		}
	}
</script>
<style type="text/css">
	.app-contact .main{
		width:1180px;
		padding:10px;
		background:#fafafa;
		margin:0 auto;
		position:relative;
		overflow:hidden;
	}

	.app-contact .main .pageTitle{
		height:60px;
		background:#f0f0f0;
		line-height:60px;
		border-radius:10px;
		border:1px solid #eee;
		margin-bottom:10px;
	}
	.app-contact .main .ditu{
		display:block;
		width:100%;
		margin-bottom:10px;
	}
	.app-contact .main .info{
		position:relative;
		overflow:hidden;
		text-align:left;
		background:#fafafa;
		
	}
	.app-contact .main .info div{
		line-height:35px;
	}
	.app-contact .main .info p{
		color:#666;
	}
	.app-contact .main .info p:hover{
		color: deepskyblue;
	}
	.app-contact .main .info textarea{
		width:600px;
		height:200px;
		outline:none;
		border:1px solid deepskyblue;
	}
	.app-contact .main .info button{
		width:100px;
		outline:none;
		height:30px;
		display:block;
	}
</style>