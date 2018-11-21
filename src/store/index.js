/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:10:22 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-11-20 20:58:37
 */
import Vue from 'vue'
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations'
import state from './state'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    actions,
    mutations
})