import Vue from "vue"
import Vuex from "vuex"
import actions from "./action.js"
import mutations from "./mutation.js"

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		mutations
	},
		
		
	
	actions
})
