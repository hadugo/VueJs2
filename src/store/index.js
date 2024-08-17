/* ================================================= *
 * src\store\index.js
 * ================================================= */
import deptStorage from './deptStore';
import titlStorage from './titlStore';
const storeOptions = {
    modules: {
        deptStorage: deptStorage,
        titlStorage: titlStorage,
    },
    state: {}, // 필요에 따라 초기 상태 정의
    getters: {
        namedList(state, getters) {
            /* ================================================== **
            namedList(state, getters, rootState, rootGetters) {
                // 자식 storage에 접근할때
                console.log(state.deptStorage.codeList);
                console.log(state.titlStorage.codeList);
                console.log(getters['deptStorage/getNamedList']);
                console.log(getters['titlStorage/getNamedList']);
                // 최상위 storage에서 자식 storage에 접근할때
                console.log(rootState.deptStorage.codeList);
                console.log(rootState.titlStorage.codeList);
                console.log(rootGetters['deptStorage/getNamedList']);
                console.log(rootGetters['titlStorage/getNamedList']);
            }
            ** ================================================== */
            const deptNamedList = getters["deptStorage/getNamedList"]
            const titlNamedList = getters["titlStorage/getNamedList"]
            return {
                DEPT: deptNamedList, // dept 모듈의 getNamedList 호출
                TITL: titlNamedList, // titl 모듈의 getNamedList 호출
            };
        },
    },
    mutations: {},
    actions: {},
};
/* ===================================================================== *
 * vuex3에서
 * ===================================================================== *
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store(storeOptions); // Vuex 3.x에서는 이렇게 생성
export default store;
/* ===================================================================== *
 * vuex4에서 
 * ===================================================================== */
import { createStore } from 'vuex';
const store = createStore(storeOptions);
export default store;

