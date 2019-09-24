const state={
	orderList:[],
	params:{}
}
const getters={
	getOrderList(state){
		return state.orderList
	}
}
const mutations={
	uppdateOrderList(state,payload){
		state.orderList=payload;
	},
	uppdateParams(state,{key,val}){
		state.params[key]=val;
	}
}
const actions={
	fetchOrderList({commit,state}){
		Vue.http.post('api/orderList',state.params).then((res)=>{
			commit('uppdateOrderList',res.body)
		},(error)=>{
			console.log(error)
		})
	}
}
import Vue from 'vue'
export default {
	state,
	getters,
	mutations,
	actions
}