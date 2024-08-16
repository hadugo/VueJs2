/* ================================================= *
 * src\store\index.js
 * ================================================= */

const storeOptions = {

  state: {
    // state : store에서 취급하는 데이터
    codeList : [
      {type : 'DEPT', code : 'D111', name : '관리부'},
      {type : 'DEPT', code : 'D012', name : '영업부'},
      {type : 'DEPT', code : 'D021', name : '개발부'},
      {type : 'DEPT', code : 'D022', name : '생산부'},
      {type : 'TITL', code : 'T111', name : '대표'},
      {type : 'TITL', code : 'T012', name : '부장'},
      {type : 'TITL', code : 'T021', name : '과장'},
      {type : 'TITL', code : 'T022', name : '사원'},
    ],
  },

  getters: {
    getNamedList(state){
      let deptList = []
      let titlList = []
      state.codeList.forEach(
        ele => {
          const newEle = {
            type : ele.type,
            code : ele.code,
            name : ele.name,
            codeName : `[ ${ele.code} ] ${ele.name}`,
          }
          if(ele.type == 'DEPT') {
            deptList.push(newEle)
          }
          if(ele.type == 'TITL') {
            titlList.push(newEle)
          }
        }
      )
      const result = {
        DEPT : deptList,
        TITL : titlList,
      }
      return result
    }
  },

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
