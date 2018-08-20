
const state={
	nav:true,
	title:true,
	bottom:true

};

const mutations={
	navshow(state){
		state.nav=true
	},
	navhide(state){
		state.nav=false
	},
	titleshow(state){
		state.title=true
	},
	titlehide(state){
		state.title=false
	},
	bottomshow(state){
		state.bottom=true
	},
	bottomhide(state){
		state.bottom=false
	}
	
};
const getters={
	nav(state){
		return state.nav

	},
	title(state){
		return state.title
	},
	bottom(state){
		return state.bottom
	}
};



export default{
	state,
	mutations,
	getters
}