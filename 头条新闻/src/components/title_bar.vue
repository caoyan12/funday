<template>
	<div class="title_bar">
		<ul>
			<router-link to="/follow" tag="li">
				<a href="javascript:;">关注</a>
			</router-link>
			<router-link to="/recommend" tag="li">
				<a href="javascript:;">推荐</a>
			</router-link>
			<router-link to="/hot" tag="li">
				<a href="javascript:;">热点</a>
			</router-link>
			<router-link to="/SH" tag="li">
				<a href="javascript:;">上海</a>
			</router-link>
			<router-link to="/video" tag="li">
				<a href="javascript:;">视频</a>
			</router-link>
			<router-link to="/small_video" tag="li">
				<a href="javascript:;">小视频</a>
			</router-link>
		</ul>

		
	</div>
</template>
<style type="text/css">
	.title_bar{
		height: 40px;width: 600px;background-color: #fff;border-bottom: 1px solid #ddd
	}

	.title_bar ul li{
		height: 40px;width: 70px;display: inline-block;margin-top: 10px;
	}

	.title_bar ul li a{
		color:black
	}
</style>