/* ================================================= *
 * src\store\deptStorage.js
 * ================================================= */
const storeOptions = {
    namespaced: true, // 네임스페이스 사용

    state: {
        codeList: [
            { type: 'DEPT', code: 'D111', name: '관리부' },
            { type: 'DEPT', code: 'D012', name: '영업부' },
            { type: 'DEPT', code: 'D021', name: '개발부' },
            { type: 'DEPT', code: 'D022', name: '생산부' },
        ],
    },

    getters: {
        getNamedList(state){
            /* ================================================== **
            namedList(state, getters, rootState, rootGetters) {
            console.log('=================== deptStorage - state ======================');
            console.log(state.codeList);
            console.log('=================== deptStorage - getters ======================');
            console.log('deptStorage - getters는 현제 자신이므로 볼 수 없다.');
            // console.log(getters['getNamedList']);
            // console.log(getters.getNamedList);
            console.log('=================== deptStorage - rootState ======================');
            console.log('자식Storage에서 부모Storage의 state를 참조할때는 rootState로 접근')
            console.log(rootState.deptStorage.codeList);
            console.log(rootState.titlStorage.codeList);
            console.log('=================== deptStorage - rootGetters ======================');
            console.log('자식Storage에서 부모Storage의 getters를 참조할때는 rootGetters로 접근')
            console.log('====================================================================');
            console.log(rootGetters['deptStorage/getNamedList']);
            console.log(rootGetters['titlStorage/getNamedList']);
            ** ================================================== */
            return state.codeList.map(ele => ({
                type: ele.type,
                code: ele.code,
                name: ele.name,
                codeName: `[ ${ele.code} ] ${ele.name}`,
            }));
        },
    },
};

export default storeOptions;
