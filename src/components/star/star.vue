<template>
  <div class="star">
    <div class="star-item" :class="starType">
      <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item" track-by="$index"></span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
const LENGTH=5;
const CLS_ON='on';
const CLS_HALF='half';
const CLS_OFF='off';
	export default{
		props:{
			size:{
				type:Number
			},
			score:{
				type:Number
			}
		},
		computed: {
			starType(){
				return 'star-'+this.size
			},
			itemClasses(){
			let result=[];
			//向下取0.5整  4.3-->4    4.6-->4.5
			let score=Math.floor(this.score*2)/2;
			//是否有小数
			let hasDecimal=score %1 !== 0;
			//整数部分  向下取整 全星
			let integer=Math.floor(score);
			for(let i=0; i<integer;i++){
				result.push(CLS_ON);
			}
			if(hasDecimal){
				result.push(CLS_HALF);
			}
			//push完
			while(result.length<LENGTH){
				result.push(CLS_OFF)
			}
			//console.log(result);
			return result;
		}
		}
	};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "star.styl";
/* 	@import "../../common/stylus/mixin.styl";
		.star
			font-size 0
			.star-item
				display inline-block
				background-repeat no-repeat
			&.star-48
				.star-item
					width 20px
					height 20px
					margin-right 22px
					background-size 20px 20px
					&:last-child 
						margin-right 0
					&.on
						bg-image('star48_on')
					&.half
						bg-image('star48_half')
					&.off
						bg-image('star48_off')
			&.star-36
				.star-item
					width 15px
					height 15px
					margin-right 6px
					background-size 15px 15px
					&:last-child 
						margin-right 0
					&.on
						bg-image('star36_on')
					&.half
						bg-image('star36_half')
					&.off
						bg-image('star36_off')
			&.star-24
				.star-item
					width 10px
					height 10px
					margin-right 3px
					background-size 10px 10px
					&:last-child 
						margin-right 0
					&.on
						bg-image('star24_on')
					&.half
						bg-image('star24_half')
					&.off
						bg-image('star24_off') */
</style>