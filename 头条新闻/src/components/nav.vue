<template>
	<div class="nav">
		<div class="icon">
			<i class="fa fa-user" aria-hidden="true"></i>
			
			<router-link to="/login" >
				<a href="javascript:;">未登录</a>
			</router-link>
			
		</div>
		<form class="search">
			<span class="search_icon">
				<i class="fa fa-search" aria-hidden="true"></i>
				
			</span>
			<span class="input">
				<input type="text" class="c1" value="搜你想搜的">
			</span>
			
		</form>
		<div class="release">
			<i class="fa fa-camera" aria-hidden="true"></i>
			<a>发布</a>
			
		</div>
	
		
		
	</div>
	
</template>

<style type="text/css">
	.nav{
		height: 50px;width: 600px;background-color: #e22b2b
	}
	.nav .icon{
		height: 50px;width: 100px;
	}
 
	.nav .icon .fa-user{

		font-size: 24px;color: #fff; display: block;text-align: center;
		line-height: 25px;	
	}
	.nav  .icon a{
		color: #fff;font-size: 16px;text-align: center;display: block;line-height: 25px;
	}
	
	.search{
		height: 30px;width: 400px;position: absolute;left: 100px;top: 12px; background-color: #fff;border-radius: 6px;
	}

	.search .search_icon{
		height: 30px;width: 50px;display: inline-block;float: left;
	}
	.search .input{
		height: 30px;width: 350px;display: inline-block;;float: left;
	}

	.search input{
		font-size: 14px;height: 30px;width: 300px;border:0px solid #fff;
	}
	.fa-search{
		font-size:16px;color: #ddd;line-height: 30px;margin-left: 20px;
	}

	.nav .release{
		height: 50px;width: 50px;position: absolute;right: 10px;top: 0px;
	}

	.nav .release .fa-camera{
		font-size: 24px;color: #fff; display: block;text-align: center;
		line-height: 25px;
	}
	.nav .release a{
		color: #fff;font-size: 16px;text-align: center;display: block;line-height: 25px;
	}
</style>

