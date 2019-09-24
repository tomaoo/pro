<template>
	<div class="app-about">
		<Layout>
			<div class="main">
				<h3 class="pageTitle">{{msg}}</h3>
				<div class="im">
					<div class="left"><img src="../../assets/img/12.jpg"></div>
					<div class="right">
						<h3 class="conTitle">坚守正道成功，以为社会创造价值为己任</h3>
						<p>京东坚守“正道成功”的价值取向，坚定地践行用合法方式获得商业成功，致力于成为一家为社会创造最大价值的公司。自创立之初，京东就秉持诚信经营的核心理念，坚守正品行货、倡导品质经济，成为中国备受消费者信赖的零售平台；京东坚定“客户为先”的服务理念，大力发展自建物流，保障用户体验，成为领先全球的新标杆；依托于所有京东人的拼搏和激情，京东持续十五年保持接近140%的年均复合增长率。京东以丰富的应用场景和精准的大数据为根基，创新性地在数字科技等领域大胆探索，一次又一次地创造了发展奇迹！</p>
						<p>与此同时，京东不忘初心，积极履行企业社会责任，在促进就业、提升社会效率、带动高质量消费、助力实体经济数字化转型、支持新农村建设、推动供给侧结构性改革等方面不断为社会做出贡献。截至目前，京东集团拥有超过17.8万名正式员工，间接带动就业人数上千万。2016年始，京东全面推进落实电商精准扶贫工作，通过品牌打造、自营直采、地方特产、众筹扶贫等模式，在全国各地贫困地区开展扶贫工作，上线贫困地区商品超过300万个，实现扶贫农产品销售额超过500亿元。依托强大的物流基础设施网络和供应链整合能力，京东大幅提升了行业运营效率，降低了社会成本。通过打造高质量消费，京东以商品和服务为抓手、以技术</p>
					</div>
				</div>
				<div class="wid">
					<p>创新为依托，带动实体经济数字化转型，进一步助力供给侧结构性改革，推动中国经济高质量发展。京东充分发挥自身优势，整合内外资源，与政府、媒体和公益组织协同创新，为用户、合作伙伴、员工、环境、社会创造价值。京东奉行正道成功、客户为先、只做第一的价值观，目标是成为全球最值得信赖的企业。</p>
					<h3 class="conTitle">多项业务全面发展，深化布局“零售+零售基础设施服务”</h3>
					<p class="indent">2017年，京东对零售未来趋势做出终极判断——无界零售，在“场景无限、货物无边、人企无间”的无界零售图景中，京东将自身大量资源、技术和服务能力模块化，通过这些积木模块对外服务，以开放、共生、互生、再生的理念开展产业布局，积极向“零售+零售基础设施服务商”转型，致力于与合作伙伴一起，在“知人”、“知场”、“知货”的基础上重新定义成本、效率、体验。未来，京东将从“一体化”走向“一体化的开放”，全面服务合作伙伴，在无界零售的场景下共同创造新的价值。</p>
					<p>目前，京东集团业务已涉及零售、数字科技、物流、保险、物流地产、云计算、AI和海外等领域，其中核心业务为零售、数字科技、物流三大板块。</p>
					<h3 class="conTitle">京东零售集团：备受用户信赖的零售平台</h3>
					<p class="indent">京东零售集团主要构架于京东商城。过去15年，京东商城通过持续创新，创造全球最佳客户体验和最优成本效率，赢得了客户的信任，目前拥有3亿多活跃用户。京东商城将始终坚持“以信赖为基础、以客户为中心的价值创造”这一经营理念，在不同的消费场景和连接终端上，通过强大的供应链、数据、技术以及营销能力，在正确的时间、正确的地点为客户提供最适合他们的产品和服务。</p>
				</div>
			</div>
		</Layout>
	</div>
</template>
<script type="text/javascript">
	import Layout from '@/components/layout'
	export default {
		name:"AppAbout",
		components:{
			Layout,
		},
		data(){
			return {
				msg:"关于我们"
			}
		}
	}
</script>
<style type="text/css">
	.app-about .main{
		height:800px;
		width:1180px;
		padding:10px;
		background:#fafafa;
		margin:0 auto;
	}
	.app-about .main .pageTitle{
		height:60px;
		background:#f0f0f0;
		line-height:60px;
		border-radius:10px;
		border:1px solid #eee;
		margin-bottom:10px;
	}
	.app-about .main .im{
		position:relative;
		overflow:hidden;
		text-align:left;
	}
	.app-about .main .im .left,.app-about .main .im .right{
		width:500px;
		position:relative;
		overflow:hidden;
		float:left;
		margin-right:10px;
	}
	.app-about .main .im .left img{
		width:100%;
	}
	.app-about .main .im .right{
		width:660px;
	}
	.app-about .main  h3.conTitle{
		text-indent:32px;
		font-weight:bold;
		margin:0;
		padding:0;
		height:40px;
		line-height:40px;
		border-bottom:1px dashed #ddd;
		margin-bottom:10px;
	}
	.main .wid h3.conTitle{
		margin-top:20px !important;
	}
	.app-about .main .im .right p{
		line-height:25px;
		text-indent:32px;
		margin:0;
		padding:0;
		text-align:justify-all;
	}
	.app-about .main .wid{
		clear:both;
		text-align:left;
	}
	.app-about .main .wid p.indent{
		text-indent:32px;
	}
</style>