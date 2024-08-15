
const storeOptions = {

  state: {
    // state : store에서 취급하는 데이터

  },

  getters: {
    // getters : Computed와 동일한 기능, 계산된 상태(Computed)의 데이터

  },
  
  mutations: {
    // mutations와 actions는 methods와 동일한 기능
    // state에서 선언된 데이터는 오직 mutations에서만 변형이 가능
  },
  
  actions: {
    // mutations와 actions는 methods와 동일한 기능
    // state에서 선언된 데이터를 직접 불러올 수 없고 context객체를 총하여 불러올 수 있다.
    // context에서는 state, getters, mutations를 활용할 수  있는 정보가 들어 있다.
    // [ 예 ]
    // context.mutations --- ( x )
    // context.commit('mutations 이름', payload) --- ( o )


  },
  
  modules: {
    // 여러개로 나뉘어져 있는 vuex모듈을 하나로 묶을때 사용
  }

}

/* ===================================================================== *
 * vuex3에서 
 * ===================================================================== *
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store(storeOptions); // Vuex 3.x에서는 이렇게 생성
*/

/* ===================================================================== *
 * vuex4에서 
 * ===================================================================== */
import { createStore } from 'vuex'
const store = createStore(storeOptions)

export default store
