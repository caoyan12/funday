<template>
	<div class="content ">
		<div class="content_1">

			<div class="child_content ">
				<div class="content_left">
					<a class="a1" >寻觅夏朝之初都——陶寺晚期百余年到底发生了什么?</a>
					<br>
					<a class="a2">新华网</a>
					<a class="a2">511评论</a>
				</div>
				<div class="content_right">
					<img src="src/assets/image/寻.jpg">
				</div>
				
			</div>
			<div class="child_content">
				<div class="content_left">
					<a class="a1" >大国主场外交，习近平提出中国主张</a>
					<br>
					<a class="a2">央视新闻网</a>
					<a class="a2">11评论</a>
				</div>
				<div class="content_right">
					<img src="src/assets/image/习近平.jpg">
				</div>
			</div>
			<div class="child_content">
				<div class="content_left">
					<a class="a1" >公开分裂！G7意外发表联合公报，特朗普公开拒签并羞辱特鲁多</a>
					<br>
					<a class="a2">环球网</a>
					<a class="a2">55555评论</a>
				</div>
				<div class="content_right">
					<img src="src/assets/image/G7.jpg">
				</div>
			</div>
			<div class="child_content">
				<div class="content_left">
					<a class="a1" >物联网企业推广平台怎么选择才能抓住商机？</a>
					<br>
					<a class="a2">阿里云</a>
					<a class="a2">1356评论</a>
				</div>
				<div class="content_right">
					<img src="src/assets/image/互联网.jpg">
				</div>
				
			</div>
			<div class="_content">
				<div class="content_header">
					<a >千年难遇！贵州一楼房拆迁拆出隐藏177年清代牌坊</a>
				</div>
				<div class="image">
					<img src="src/assets/image/1.jpg">
					<img src="src/assets/image/2.jpg">
					<img src="src/assets/image/3.jpg">
					<img src="src/assets/image/4.jpg">
					
				</div>
				<div class="content_bottom">
					<a >光明视野</a>
					<a >2389评论</a>
				</div>
			</div>
			<div class="_content">
					<div class="content_header">
					<a >安徽池州：96岁老人长寿有妙招，身体硬朗吃肉喝酒下地干活全不误</a>
				</div>
				<div class="image">
					<img src="src/assets/image/5.jpg">
					<img src="src/assets/image/6.jpg">
					<img src="src/assets/image/7.jpg">
					<img src="src/assets/image/8.jpg">
				</div>
				<div class="content_bottom">
					<a >光明视野</a>
					<a >2345评论</a>
				</div>
			</div>
		

		</div>

	</div>
</template>
<style scoped="scoped">
	.content{
		position: absolute;top: 90px;bottom: 50px;width: 600px;overflow: hidden;

	}

	
	.content_1{
		width: 600px;overflow:auto;
	}

	.child_content{
		height: 100px;width: 600px;border-bottom: 1px solid #ddd;
	}

	.content_left{
		display: inline-block;float: left;height: 100px;width: 400px;
	}
	.content_right{
		display: inline-block;float: right;height: 100px;width: 200px;
	}
	.content_left .a1{
		font-size: 20px;color: black

		}
	.content_left .a2{
		font-size: 16px;color: #818488;margin-left: 30px;margin-top: 10px;

	}
	.content_right img{
		height: 80px;width: 150px;line-height: 80px;margin-top: 10px;
	}
	._content{
		height: 180px;width: 600px;border-bottom: 1px solid #ddd;
	}
	.content_header{
		height: 30px;width: 600px;
	}

	.content_header a{
		font-size: 18px;
	}

	.image{
		height: 120px;width: 600px;
	}

	.image img{
		height: 100px;width: 130px;
	}

	.content_bottom{
		height: 30px;width: 600px;
	}

	.content_bottom{
		font-size:16px;
	}

</style>
<script type="text/javascript">
	export default{
		data(){
				return{
					datalist:[]
			}
		},
		components:{
			
		},

		mounted(){
			this.getdata()
			

		},
		methods:{
			getdata(){
				var _this=this
				this.$http.get('src/data/follow.data').then(function(res){
						console.log(res.data)
						_this.datalist=res.data;

					
				}).catch(function(err){
					console.log(err);
				});
				

				
			}
		}
	
	}
</script>