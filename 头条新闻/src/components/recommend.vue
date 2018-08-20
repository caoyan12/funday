<template>
	<div class="content">
		<div class="content_1">
			<div class="child_content" v-for=" item in datalist">
			 	<!-- <router-link :to="'/article/'+item.id"> -->

				 	<div class="content_left">
						<a class="a1" >{{item.title}}</a>
						<br>
						<a class="a2">{{item.network}}</a>
						<a class="a2">{{item.comment}}</a>
					</div>
					<div class="content_right">
						<img :src="item.img">
					</div>
			<!-- 	</router-link> -->
			</div> 
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				datalist:[]
			}
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
<style scoped="scoped">
		.content{
		position: absolute;top: 90px;bottom: 50px;width: 600px;overflow: hidden;
	}

	.content_1{
		width: 600px;overflow: auto;
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