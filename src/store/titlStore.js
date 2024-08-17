/* ================================================= *
 * src\store\titlStorage.js
 * ================================================= */
const storeOptions = {
    namespaced: true, // 네임스페이스 사용

    state: {
        codeList: [
            { type: 'TITL', code: 'T111', name: '대표' },
            { type: 'TITL', code: 'T012', name: '부장' },
            { type: 'TITL', code: 'T021', name: '과장' },
            { type: 'TITL', code: 'T022', name: '사원' },
        ],
    },

    getters: {
        getNamedList(state) {
            // 배열을 반환하는 함수
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
    