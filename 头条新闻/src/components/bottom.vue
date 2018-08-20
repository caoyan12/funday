<template>
	<div class="bottom">
		<ul>
			<router-link to="/home" tag="li">
				<i class="fa fa-home" aria-hidden="true"></i>
				<a href="javascript:;">首页</a>
			</router-link>
			<router-link to="/xigua" tag="li">
				<i class="fa fa-video-camera" aria-hidden="true"></i>
				<a href="javascript:;">西瓜视频</a>
			</router-link>
			<router-link to="/topline" tag="li">
				<i class="fa fa-comment" aria-hidden="true"></i>
				<a href="javascript:;">微头条</a>
			</router-link>
			<router-link to="/shotvideo" tag="li">
				<i class="fa fa-file-video-o" aria-hidden="true"></i>
				<a href="javascript:;">小视频</a>
			</router-link>
		</ul>
	</div>
	
</template>
<style type="text/css">
.bottom{
	height: 50px;width: 600px;background-color: #fff;border-top: 1px solid #ddd;position: absolute;bottom:0px;
}

.bottom ul li{
	height: 35px;width: 120px;display: inline-block;line-height: 25px;
	text-align: center;font-size: 20px;
}

.bottom ul a{
	height: 15px;width: 120px;display: inline-block;line-height: 25px;
	font-size: 12px;text-align: center;color: black;
}
</style>
