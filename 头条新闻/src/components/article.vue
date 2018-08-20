<template>
	
	<div class="vue">
		<div class="header">
			<ul>
		    	<li class="l-btn" onclick="window.history.go(-1)"></li>
		    </ul>
		</div>
		<!-- <div class="content">
			<div class="content_head ">
				<a><img :src="articleData.author_face" alt=""/></a>
			</div>
		    <div class="cont">
		    	<h3>{{articleData.title}}</h3>
		        <div class="time">
		        	<p>{{articleData.time}} 
		        		<span><img src="../assets/image/zan.png" alt=""/></span>
		        	</p>
		        </div>
		        <div class="text-box" v-html="articleData.content"></div>
		    </div>
		</div> -->
		
	</div>

</template>
<script>
	export default{
		mounted(){
			this.fetchData(this.$route.params.id);


			//发送 隐藏footer的 action
			if(this.$route.path.indexOf('article')>0){
				alert(1)
				  this.$store.dispatch("navhide")
        		  this.$store.dispatch("titlehide")
        		  this.$store.dispatch("bottomhide")

			}
			else{
				alert(2)
			}
		},
		data(){
			return {
				articleData:[]
			}
		},
		watch:{
			$route(to,from){
				var reg=/article\/\d+/;
				if(reg.test(to.path)){
					var articleId=this.$route.params.id||0 ;
					this.fetchData(articleId);
				}
			}
		},
		methods:{
			fetchData(id){
				var _this=this;
				this.$http.get('../src/data/article.data').then(function(res){
					_this.articleData=res.data[id];
					
				}).catch(function(err){
					console.log('文章详细页面:',err);
				})
			}
		}
	}
</script>
<style scoped>
html,body{ overflow-x: hidden; }
	.vue{
		height: 100%;width: 600px;
	}
	.header{width: 600px;height: 50px; position:fixed;top:10px;left:300px; background:#fff; }
	.header ul li{width:600px;height:50px; background:url(../assets/image/history.png) no-repeat 0 0; position:absolute;top: 10px;list-style: none;}
	
	.content{height: 600px;width: 600px;position: absolute;top: 60px;}
	.content .conent_head{ height: 100px;width: 600px;}
	.content_head a img{ height: 120px;width: 150px;margin-left: 30px}
	
	.content .cont{}
	
	
</style>