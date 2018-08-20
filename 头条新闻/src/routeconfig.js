import follow from "./components/follow.vue"
import recommend from "./components/recommend.vue"
import hot from "./components/hot.vue"
import SH from "./components/SH.vue"
import video from "./components/video.vue"
import smallvideo from "./components/small_video.vue"

import home from "./components/home.vue"
import xigua from "./components/xigua_video.vue"
import topline from "./components/small_topline.vue"
import shotvideo from "./components/shotvideo.vue"
import login from "./components/login.vue"
import article from "./components/article.vue"

export default[
{
	path:"/follow",
	component:follow
},
{
	path:"/recommend",
	component:recommend

},
{
	path:"/hot",
	component:hot
},
{
	path:"/video",
	component:video
},
{
	path:"/smallvideo",
	component:smallvideo
},
{
	path:"/home",
	component:home
},
{
	path:"/xigua",
	component:xigua
},
{
	path:"/topline",
	component:topline
},
{
	path:"/shotvideo",
	component:shotvideo
},
{
	path:"/login",
	component:login
},{
	path:"/SH",
	component:SH
},{
	path:"/article/:id",
	component:article
}

]