<template>
  <div id="app">
    <navheader v-show="nav"></navheader>
    <titlebar v-show="title"></titlebar>
    <transition name="slide-down">
       <keep-alive> 

        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
    
    <bottom v-show="bottom"></bottom>
   
  </div>
</template>

<script>
  import navheader from "./components/nav.vue"
  import titlebar from "./components/title_bar.vue"
  import bottom from "./components/bottom.vue"

  import {mapGetters} from "vuex"
  
export default {
  components:{
    navheader,
    titlebar,
    bottom
  },

  computed:mapGetters([
    "nav",
    "title",
    "bottom"
  ]),
   watch:{
    $route(to,from){
      if(to.path=="/login"){
        this.$store.dispatch("navhide")
        this.$store.dispatch("titlehide")
        this.$store.dispatch("bottomhide")

      }
      else{
        this.$store.dispatch("navshow")
        this.$store.dispatch("titleshow")
        this.$store.dispatch("bottomshow")
      }
      
    }
 },
  
}
</script>

<style >

body{
  background-color: #ddd;

}

#app{

  width: 600px;height: 100%;background-color: #fff;position: absolute;top: 0px;left: 300px;
  }

.slide-down-enter-active, .slide-down-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }
  .slide-down-enter, .slide-down-leave-active {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

 /* .route-view{
    left: 300px;
  }*/

</style>