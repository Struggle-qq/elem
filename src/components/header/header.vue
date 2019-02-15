<template>
  <div class="header">
    <div class="content-wrapper">
      <!-- 上方简介 -->
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <!-- 右侧详情 -->
      <div class="content"> 
        <!-- 标题 -->
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <!-- 描述 -->
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<!-- 商家活动 -->
				<div v-if="seller.supports" class="support" >
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
      
			</div>
			<div v-if="seller.supports" class="support-count" @click="showDetail">
				<span class="count">{{seller.supports.length}}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
    </div>
		<!-- 公告区 -->
    <div class="bulletin-wrapper" @click="showDetail">
			<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" width="100%" height="100%" alt="">
		</div>
		<div v-show="detailShow" class="detail" transition="fade">
			<!-- 内容容器  清除浮动 -->
			<div class="detail-wrapper clearfix">
				<!-- 内容 -->
				<div class="detail-main">
					<h1 class="name">{{seller.name}}</h1>
					<div class="star-wrapper">
					<star :size="48" :score="seller.score"></star>
					</div>
					<!-- 小标签 -->
					<div class="title">
						<div class="line"></div>
						<div class="text">优惠信息</div>
						<div class="line"></div>
					</div>
					<ul v-if="seller.supports" class="supports">
						<li class="support-item" v-for="item in seller.supports">
							<span class="icon" :class="classMap[seller.supports[$index].type]"></span>
							<span class="text">{{seller.supports[$index].description}}</span>
						</li>
					</ul>
					<!-- 商家公告 -->
					<div class="title">
						<div class="line"></div>
						<div class="text">商家公告</div>
						<div class="line"></div>
					</div>
					<!-- 文字 -->
					<div class="bulletin">
						<p class="content">{{seller.bulletin}}</p>
					</div>
				</div>
			</div>
			<!-- 关闭 -->
			<div class="detail-close" @click="hideDetail">
				<i class="icon-close"></i>
			</div>
		</div>
  </div>
</template>
<script type="text/ecmascript-6">
/* 引入star组件 */
import star from "components/star/star"
export default {
  props: {
    seller: {
      type: Object
    }
	},
	data(){
		return{
			detailShow:false  //控制浮层的显示和隐藏
		};
	},
	methods:{ 
		showDetail(){
			this.detailShow=true;
		},
		hideDetail(){
			this.detailShow=false;
		}
	},
	created(){
		this.classMap=['decrease','discount','special','invoice','guarantee'];
	},
	/* 注册这个组件  */
	components:{
		star
	}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixin";
	.header
		position relative
		overflow hidden
		color #fff
		background rgba(7,17,27,0.5)
		.content-wrapper
			position relative
			padding 24px 12px	18px	24px
			font-size 0
			.avatar
				display inline-block
				vertical-align top
				img 
					border-radius 2px
			.content 
				display inline-block
				margin-left 16px
				font-size 14px
				.title	
					margin 2px 0 8px 0
					.brand
						display inline-block
						vertical-align top
						width 30px
						height 18px
						bg-image("brand")
						background-size 30px 18px
						background-repeat no-repeat
					.name
						margin-left 6px 
						font-size 16px
						line-height 18px
						font-weight bold
				.description
					margin-bottom 10px
					line-height 12px
					font-size 12px
				.support
					.icon
						display inline-block
						vartical-align bottom
						width 12px
						height 12px
						margin-right 4px
						//margin-top 0px
						background-size 12px 12px 
						background-repeat no-repeat
						&.decrease
							bg-image('decrease_1')
						&.discount
							bg-image('discount_1')
						&.guarantee
							bg-image('guarantee_1')
						&.invoice
							bg-image('invoice_1')
						&.special
							bg-image('special_1')
					.text
						line-height 12px
						font-size 10px
			.support-count
				position absolute
				right 12px
				bottom 14px
				padding 0 8px
				height 24px
				line-height 24px
				border-radius 14px
				background rgba(0,0,0,0.2)
				text-align center
				.count
					vertical-align top
					font-size 10px
				.icon-keyboard_arrow_right
					margin-left 2px
					line-height 24px
					font-size 10px
		.bulletin-wrapper
			position relative
			height 28px
			line-height 28px
			padding  0 22px 0 12px
			white-space nowrap
			overflow hidden
			text-overflow ellipsis
			background rgba(7,17,27,0.2)
			 //font-size 0
			.bulletin-title   //背景图标  
				display inline-block
				vertical-align top
				margin-top 8px
				width  22px
				height 12px
				bg-image('bulletin')
				background-size 22px 12px
				background-repeat no-repeat
			.bulletin-text
				vertical-align top
				margin 0 4px
				font-size 10px
			.icon-keyboard_arrow_right
				position absolute
				font-size 10px
				right 12px
				top 9px
		.background
			position:absolute
			top 0
			left 0
			width 100%
			height 100%
			z-index -1
			filter blur(10px)
		/* sticky footers */
		.detail
			position fixed
			top 0
			left 0
			z-index 100
			width 100%
			height 100%
			overflow auto 
			transition all 0.5s
			background-filter blur(10px)
			&.fade-transition
				opacity 1
				background rgba(7,17,27,0.8)
			&.fade-enter,&.fade-leave 
				opacity 0
				background rgba(7,17,27,0) 
			.detail-wrapper //最小高度100% 撑满屏幕
				width 100%
				min-height 100%
				.detail-main
					margin-top 64px
					padding-bottom 64px //顶部提留一定空间
					.name
						line-height 16px
						text-align center
						font-size 16px
						font-weight 700
					.star-wrapper
						margin-top 18px
						padding 2px 0
						text-align center
					.title
						display flex
						width 80%
						margin 28px auto 24px auto
						.line
							flex 1
							position relative
							top -6px
							border-bottom 1px solid rgba(255,255,255,0.2)
						.text
							padding 0 12px
							font-size 14px
							font-weight 700
					.supports
						width 80%
						margin 0 auto
						.support-item
							padding 0px 12px
							margin-bottom 12px
							font-size 0
							&:last-child
								margin-bottom 0
							.icon
								display inline-block
								width 16px
								height 16px
								vertical-align top
								margin-right 6px
								background-size 16px 16px
								background-repeat no-repeat
								&.decrease
									bg-image('decrease_2')
								&.discount
									bg-image('discount_2')
								&.guarantee
									bg-image('guarantee_2')
								&.invoice
									bg-image('invoice_2')
								&.special
									bg-image('special_2')
							.text
								line-height 16px
								font-size 12px
					.bulletin
						width 80%
						margin 0 auto 
						.content
							padding 0 12px
							line-height 24px
							font-size 12px
			.detail-close
				position relative
				width 32px
				height 32px
				margin -64px auto 0 auto 		//相对定位 内容向上提
				clear both					//清除浮动
				font-size 32px
</style>

