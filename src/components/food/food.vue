<template>
		<div v-show="showFlag" class="food" transition="move">
			<div CLASS="food-content">
				<div class="image-header">
					<img :src="food.image" alt=""/>
					<div class="back" @click="hide">
						<i class="icon-arrow_lift"></i>
					</div>
				<div class="content">
					<div class="title">{{food.name}}</div>
					<div class="detail">
						<span class="sell-count">月售{{food.sellCount}}
						<span class="rating">好评率{{food.rating}}</span>
						</span>
					</div>
					<div class="price">
						<span class="now">￥{{food.price}}</span>
						<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
							</div>
				</div>
				</div>
			</div>
		</div>
</template>
<script type="text/ecamscript-6">
		export default{
		props:{
			food:{
				type:Object
			}
		},
		data(){
			return{
				showFlag:false
			};
		},
		methods:{
			show(){
				this.showFlag=true
			},
			hide(){
				this.showFlag=false
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.food
		position fixed
		left 0
		top 0
		bottom 48px
		z-index 30
		width 100%
		background #fff
		&.move-transition
			transition all 0.2s linear 
			transform translate3d(0,0,0)
		&.move-enter,&.move-leave
			transform translate3d(100%,0,0)			
		.image-header
			position relative
			width 100%
			height 0
			padding-top 100%  //和宽一样，保证是宽高先等等的容器
			img 
				position absolute
				top 0
				left 0
				width 100%
				height 100%
			.back
				position absolute
				top 10px
				left 0
				.icon-arrow_lift
					display block
					padding 10px
					font-size 20px
					color #fff

</style>