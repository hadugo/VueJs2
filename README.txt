//////////////////////////////////////////////////////////////////////////////////
//
// 1. Create Project
//
//////////////////////////////////////////////////////////////////////////////////

    // ///////////////////////////////////////////////////////////////////////////
    // 1-1. Create Project
    // ///////////////////////////////////////////////////////////////////////////

        // vue.config.js
        npm install @vue/cli

        node_modules\.bin\vue create .

    // ///////////////////////////////////////////////////////////////////////////
    // 1-2. launcher.json
    // ///////////////////////////////////////////////////////////////////////////
        /*
        =============================================
	== .vscode/launch.json
        =============================================
        {
            "configurations": [
                
                {
                    "type": "node-terminal",
                    "name": "1-1. 서버",
                    "request": "launch",
                    "command": "npm run serve",
                    "cwd": "${workspaceFolder}"
                },
                {
                    "name": "1-2. 크롬",
                    "request": "launch",
                    "type": "chrome",
                    "url": "http://localhost:8080",
                    "webRoot": "${workspaceFolder}"
                },
            ],
            "compounds": [
                {
                    "name": "1. 서버&크롬",
                    "configurations": ["1-1. 서버", "1-2. 크롬"]
                }
            ]
        }
	*/
    // ///////////////////////////////////////////////////////////////////////////
    // 1-3. Debug Setup
    // ///////////////////////////////////////////////////////////////////////////
        /*
        =============================================
        == vue.config.js
        =============================================
        */
        const { defineConfig } = require('@vue/cli-service')
        module.exports = defineConfig({
        transpileDependencies: true,
        // ---------- BreakPoint 설정 시작 ----------
        configureWebpack: {
            devtool: 'source-map'
        }
        // ----------- BreakPoint 설정 끝 -----------
        })









//////////////////////////////////////////////////////////////////////////////////
//
// 2. Router
//
//////////////////////////////////////////////////////////////////////////////////

    // ///////////////////////////////////////////////////////////////////////////
    // 2-1. Create View
    // ///////////////////////////////////////////////////////////////////////////

    component : src/views/Employee/EmployeeFormComponent.vue
    view : src/views/Employee/EmployeeView.vue


    // ///////////////////////////////////////////////////////////////////////////
    // 2-2. Add Router
    // ///////////////////////////////////////////////////////////////////////////

        // ===============================================================================
        // src/router/index.js
        // ===============================================================================
        ...................................... 생략 ......................................
        const routes = [
            ...................................... 생략 ..................................
            {
                path: '/employee',
                name: 'employee',
                component: () => import('@/views/Employee/EmployeeView.vue')
            }
        ]
        ...................................... 생략 ......................................

    // ///////////////////////////////////////////////////////////////////////////
    // 2-3. Add Link
    // ///////////////////////////////////////////////////////////////////////////
        <!--
        // ===============================================================================
        // src/App.vue
        // ===============================================================================
        -->
        <template>
        <nav>
            ...................................... 생략 ..................................
            <router-link to="/employee">Employee</router-link>
            ...................................... 생략 ..................................
        </nav>
        </template>
        ...................................... 생략 ......................................




        








    
    
//////////////////////////////////////////////////////////////////////////////////
//
// 3. Setup - defineComponent
//
//////////////////////////////////////////////////////////////////////////////////
    <template>
        .................................... 생략 ....................................
    </template>
    <script>
    import { defineComponent } from 'vue';

    export default defineComponent( {
        .................................... 생략 ....................................
    });
    </script>













//////////////////////////////////////////////////////////////////////////////////
//
// 4. Setup
//
//////////////////////////////////////////////////////////////////////////////////

    <!--
    //////////////////////////////////////////////////////////////////////////////////
    // src/views/Employee/EmployeeFormComponent.vue
    //////////////////////////////////////////////////////////////////////////////////
    -->
    ........................................ 생략 ....................................
    <template>
        ...................................... 생략 ..................................
        <input type="text" id="edEmpCode" v-model="empCode" placeholder="사원코드">
        ...................................... 생략 ..................................
        <input type="text" id="edEmpName" v-model="empName" placeholder="사원명">
        ...................................... 생략 ..................................
        <input type="text" id="edDptCode" v-model="dptCode" placeholder="부서코드">
        ...................................... 생략 ..................................
        <input type="text" id="edEmpAaddr" v-model="empAddr" placeholder="주소">
        ...................................... 생략 ..................................
        <input type="text" id="edEmpTel" v-model="empTel" placeholder="전화">
        ...................................... 생략 ..................................
        <button @click="save">저장</button>
        <button @click="remove">삭제</button>
        <button @click="cancel">취소</button>
        </div>
    </div>
    </template>

    <script>
    
    import { defineComponent, ref } from 'vue'

    export default defineComponent( {
        setup() {

            let empCode = ref('')
            let empName = ref('')
            let dptCode = ref('')
            let empAddr = ref('')
            let empTel  = ref('')

            const save = () => {
            // 저장 로직 구현
            }

            const remove = () => {
            // 삭제 로직 구현
            }
            
            const cancel = () => {
            // 취소 로직 구현
            }

            return {
                empCode,
                empName,
                dptCode,
                empAddr,
                empTel,
                save,
                remove,
                cancel,
            };
        },
    })
    </script>

    ........................................ 생략 ....................................




    


//////////////////////////////////////////////////////////////////////////////////
//
// 5. Setup - reactive
//
//////////////////////////////////////////////////////////////////////////////////

    <!--
    //////////////////////////////////////////////////////////////////////////////////
    // src/views/Employee/EmployeeFormComponent.vue
    //////////////////////////////////////////////////////////////////////////////////
    -->
    ........................................ 생략 ....................................
    <template>
        ...................................... 생략 ..................................
        <input type="text" id="edEmpCode" v-model="employee.empCode" placeholder="사원코드">
        ...................................... 생략 ..................................
        <input type="text" id="edEmpName" v-model="employee.empName" placeholder="사원명">
        ...................................... 생략 ..................................
        <input type="text" id="edDptCode" v-model="employee.dptCode" placeholder="부서코드">
        ...................................... 생략 ..................................
        <input type="text" id="edEmpAaddr" v-model="employee.empAddr" placeholder="주소">
        ...................................... 생략 ..................................
        <input type="text" id="edEmpTel" v-model="employee.empTel" placeholder="전화">
        ...................................... 생략 ..................................
        <button @click="save">저장</button>
        <button @click="remove">삭제</button>
        <button @click="cancel">취소</button>
        </div>
    </div>
    </template>

    <script>
    
    import { defineComponent, reactive } from 'vue'

    export default defineComponent({
        setup() {

            let employee = reactive({})

            const save = () => {
            // 저장 로직 구현
            }

            const remove = () => {
            // 삭제 로직 구현
            }
            
            const cancel = () => {
            // 취소 로직 구현
            }

            return {
                employee,
                save,
                remove,
                cancel,
            };
        },
    })
    </script>

    ........................................ 생략 ....................................











    
//////////////////////////////////////////////////////////////////////////////////
//
// 6. Setup - reference Component
//
//////////////////////////////////////////////////////////////////////////////////

    <!--
    //////////////////////////////////////////////////////////////////////////////////
    // src/components/CodeHelpComponent.vue
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        <div>
            ...................................... 생략 ..............................
            <input type="text" id="edCode" v-model="data.code" placeholder="코드">
            <input type="text" v-model="data.name" placeholder="코드명">
            ...................................... 생략 ..............................
        </div>
    </template>
    <script>
    import { defineComponent, reactive } from 'vue';
    export default defineComponent({
        setup() {
            const data = reactive({
                code: '',
                name: ''
            });
            ...................................... 생략 ..............................
            const getData = () => {
                return data
            }
            return {
                data, 
                getData,
                .................................. 생략 ..............................
            };
        }
    })
    </script>

    ........................................ 생략 ....................................

    <!--
    //////////////////////////////////////////////////////////////////////////////////
    // src/views/Employee/EmployeeSearchComponent.vue
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        .................................... 생략 ....................................
        <EmpCodeHelpComponent ref="empCodeHelpInstance" /> <!-- 인스턴스 지정 //-->
        <button class="btnSearch" @click="btnClick">찾기</button>
        .................................... 생략 ....................................
    </template>
    <script>
        import { defineComponent, ref } from 'vue'
        import EmpCodeHelpComponent from '@/components/CodeHelpComponent.vue'
        export default defineComponent({
            components : {
                EmpCodeHelpComponent,
            },
            setup(){
                let empCodeHelpInstance = ref({}) // <== ref로 인스턴스 선언
                const btnClick = () => {
                    const data = empCodeHelpInstance.value.getData() // <== .value로 인스턴스 내부 함수 접근
                }
                return {
                    empCodeHelpInstance,
                    btnClick,
                }
            },
        })
    </script>











    
//////////////////////////////////////////////////////////////////////////////////
//
// 7. setup - props
//
//////////////////////////////////////////////////////////////////////////////////
    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/views/Employee/EmployeeView.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        <div>
            ...................................... 생략 ..............................
            <EmployeeListComponent :args="employeeListArg" />
            <EmployeeFormComponent :args="employeeFormArg" />
            ...................................... 생략 ..............................
        </div>
    </template>
    <script>
    ........................................ 생략 ....................................
    export default defineComponent({
        ...................................... 생략 ..................................
        setup() {
            // Argument 선언
            const employeeListArg = reactive({
                employeeList,
                departData
            });

            // Argument 선언
            const employeeFormArg = reactive({
                empCode: '',
                empName: '',
                dptCode: '',
                empAddr: '',
                empTel: '',
            });

            const test = () => {
                // test()함수가 실행될때 
                // 선언된 Argument에 새로운 값을 대입
                // Argument가 바뀌면 Chile컴포넌트의 파라미터가 바뀌고
                // 바뀌면 Child컴포넌트에서 새로운 값이 적용
                employeeFormArg.empCode = 'e001';
                employeeFormArg.empName = '사원 이름';
                employeeFormArg.dptCode = '부서 코드';
                employeeFormArg.empAddr = '사원 주소';
                employeeFormArg.empTel = '사원 전화번호';
                // 객체 내부의 값을 수정할때는 값만 바뀌어야 하므로
                // 값을 대입하는 것이 아니고 필요ㅕ한 값만 교체해야 한다.
                employeeListArg.employeeList.splice(0, employeeListArg.employeeList.length, 
                    { empCode: 'e001', empName: 'aaaa', dptCode: 'dddd', empAddr: 'ssss', empTel: 'zzzzz' }
                )
            }
            .................................... 생략 ................................
        }
    })
    </script>


    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/views/Employee/EmployeeFormComponent.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        <div>
            .................................... 생략 ................................
                <input type="text" id="edEmpCode" v-model="employee.empCode" placeholder="사원코드">
            .................................... 생략 ................................
    </template>
    <script>
    ........................................ 생략 ....................................
    export default defineComponent({
        props: {
            args : {
                type : Object,
                required : false,
                default : () => ({
                    empCode : '',
                    empName : '',
                    dptCode : '',
                    empAddr : '',
                    empTel  : '',
                })
            }
        },
        setup(props) {
            // 부모컴포넌트의 Argument값이 바뀌면 props의 값이 바뀌고
            // props의 값이 바뀌면 employee의 값이 바뀌고
            // employee의 값이 바뀌면 employee를 사용한 화면의 내용이 바뀐다.
            const employee = reactive(props.args);
            .................................... 생략 ................................
        },
    })
    </script>



    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/views/Employee/EmployeeListComponnt.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        <ag-grid-vue
            :rowData="employeeList"
            :columnDefs="colDefs"
            class="ag-theme-quartz grid"
        />
    </template>

    <script>
    ........................................ 생략 ....................................
    import { ref , reactive } from 'vue';
    import "ag-grid-community/styles/ag-grid.css"; 
    import "ag-grid-community/styles/ag-theme-quartz.css"; 
    import { AgGridVue } from "ag-grid-vue3"; 
    export default {
        name: "EmployeeListComponnt",
        props: {
            args : {
                type : Object,
                required : true,
                default : function(){
                    return {
                        employeeList : [], 
                        departData   : {},
                    }
                }
            }
        },
    ........................................ 생략 ....................................
        setup(props) {
            .................................... 생략 ................................
            const employeeList = reactive(props.args.employeeList);
            const departData = reactive(props.args.departData);
            .................................... 생략 ................................
        },
    }











    
//////////////////////////////////////////////////////////////////////////////////
//
// 8. setup - emit
//
//////////////////////////////////////////////////////////////////////////////////
    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/views/Employee/EmployeeListComponnt.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        <ag-grid-vue
            .................................... 생략 ................................
            @selection-changed="onSelectionChanged"
        />
    </template>

    <script>
    ........................................ 생략 ....................................
        setup(props, {emit}) {
            .................................... 생략 ................................
            const onSelectionChanged = ()=>{
                var selectedRows = gridApi.value.getSelectedRows();
                .................................. 생략 ..............................
                const selectedRow = selectedRows[0]
                emit('rowSelect', selectedRow)
            }
            .................................... 생략 ................................
        },
    ........................................ 생략 ....................................
    </script>



    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/views/Employee/EmployeeView.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        <div>
            .................................... 생략 ................................
            <EmployeeListComponent :args="employeeListArg" @rowSelect="employeeListRowSelect" />
            .................................... 생략 ................................
        </div>
    </template>

    <script>
    ........................................ 생략 ....................................
    export default defineComponent({
        ...................................... 생략 ..................................
        setup() {
            .................................... 생략 ................................
            const employeeListRowSelect = (data)=>{
                employeeFormArg.empCode = data.empCode
                employeeFormArg.empName = data.empName
                employeeFormArg.dptCode = data.dptCode
                employeeFormArg.empAddr = data.empAddr
                employeeFormArg.empTel  = data.empTel 
            }

            .................................... 생략 ................................
        }
    })
    </script>
    











    
//////////////////////////////////////////////////////////////////////////////////
//
// 9. eventbus
//
//////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/event/eventbus.js
    //
    //////////////////////////////////////////////////////////////////////////////////
    const eventbus = {

        eventFn : {},

        on : function(event, callback) {
            if(!this.eventFn[event.id]) {
                this.eventFn[event.id] = {}
            }
            if(this.eventFn[event.id][event.listener]) return
            
            this.eventFn[event.id][event.listener] = callback
        },

        emit : function(event, ...args){
            if(!this.eventFn[event.id][event.listener]) return
            this.eventFn[event.id][event.listener](...args)
        },

        off : function(event){
            if(this.eventFn[event.id][event.listener]) {
                delete this.eventFn[event.id][event.listener]
            }
        },

        // E,ployeeView의 eventbus들 정의
        employeeView : {
            // EmployeeSearchComponent 에서 EmployeeListComponnt로 보내는 eventBus
            employeeList_search : {
                    id       : 'employeeView',
                    listener : 'employeeList_search'
            }

        }
    };

    export default eventbus;


    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/views/Employee/EmployeeSearchComponent.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        <div class="divSearch">
        <EmpCodeHelpComponent 
            ref="empCodeHelpInstance" 
        />
        ...................................... 생략 ..................................
        </div>
    </template>

    <script>
    ........................................ 생략 ....................................
    import eventbus from '@/event/eventbus.js'
    export default defineComponent({
        ...................................... 생략 ..................................
        props : {
            eventbusInfo : {
                type : Object,
                required : false,
                default : function(){
                    return {
                        id       : '',
                        listener : ''
                    }
                },
            },
        },
        
        setup(props){
            .................................... 생략 ................................
            const btnClick = () => {
                .................................. 생략 ..............................
                eventbus.emit(props.eventbusInfo, data)
            }
            .................................... 생략 ................................
        },

    })

    </script>

    

    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/views/Employee/EmployeeListComponnt.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        ...................................... 생략 ..................................
    </template>

    <script>
    ........................................ 생략 ....................................
    import eventbus from '@/event/eventbus.js'
    export default {
        props: {
            eventbusInfo : {
                type : Object,
                required : false,
                default : function(){
                    return {
                        id       : '',
                        listener : ''
                    }
                },
            },
        },
        setup(props, {emit}) {
            .................................... 생략 .................................
            eventbus.on(props.eventbusInfo, employeeListSearchCallback)
            .................................... 생략 .................................
        },
    };
    </script>








    
//////////////////////////////////////////////////////////////////////////////////
//
// 10. mitt
//
//////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/event/eventbus.js
    //
    //////////////////////////////////////////////////////////////////////////////////

    import Mitt from 'mitt'

    const eventbus = new Mitt()

    eventbus.employeeView = {
        // EmployeeSearchComponent 에서 EmployeeListComponnt로 보내는 eventBus
        employeeList_search : {
                id       : 'employeeView',
                listener : 'employeeList_search'
        }

    }

    export default eventbus;









    
//////////////////////////////////////////////////////////////////////////////////
//
// 11. vuex - single store
//
//////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/store/index.js
    //
    //////////////////////////////////////////////////////////////////////////////////
    import { createStore } from 'vuex'

    const store = createStore({

    // namespaced
    namespaced : true,

    // state : store에서 취급하는 데이터
    state: {
        appName : "VueJs3 Vuex"
    },

    // getters : Computed와 동일한 기능, 계산된 상태(Computed)의 데이터
    getters: {},

    // mutations와 actions는 methods와 동일한 기능
    // state에서 선언된 데이터는 오직 mutations에서만 변형이 가능
    mutations: {},
    
    // mutations와 actions는 methods와 동일한 기능
    // state에서 선언된 데이터를 직접 불러올 수 없고 context객체를 총하여 불러올 수 있다.
    // context에서는 state, getters, mutations를 활용할 수  있는 정보가 들어 있다.
    // [ 예 ]
    // context.mutations --- ( x )
    // context.commit('mutations 이름', payload) --- ( o )
    actions: {},
    modules: {}
    })

    export default store





    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/main.js
    //
    //////////////////////////////////////////////////////////////////////////////////

    import store from './store'
    // createApp(App).use(store).use(router).mount('#app')
    app.use(router)



    


    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/App.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
    <P><H1>{{ $store.state.appName }}</H1></P> <!-- sttore에 직접 접근 -->
    <P><H1>{{ appName }}</H1></P>
    </template>
    <script>
    import { defineComponent } from 'vue'
    import { useStore } from 'vuex'
    export default defineComponent(
        {
            setup(){
                const store = useStore()
                const appName = store.state.appName
                return { 
                    appName,
                }
            }
        }
    )
    </script>






    

    
//////////////////////////////////////////////////////////////////////////////////
//
// 12. vuex - multiple store
//
//////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/store/StoreA.js
    //
    //////////////////////////////////////////////////////////////////////////////////

    const store = {
        // state : store에서 취급하는 데이터
        state: {
            appName : "VueJs3 Vuex"
        },
    }
    export default store

    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/store/StoreB.js
    //
    //////////////////////////////////////////////////////////////////////////////////

    import data from '@/data/data.js'
    import { reactive } from 'vue'
    const store = {
        // 데이터
        state: {
            baseData : reactive(data)
        },
    }
    export default store

    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/store/index.js
    //
    //////////////////////////////////////////////////////////////////////////////////
    import { createStore } from 'vuex'
    import storeA from '@/store/StoreA.js'
    import storeB from '@/store/StoreB.js'
    export default createStore({
    modules: { storeA, storeB }
    })

    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/App.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
    <P><H1>{{ $store.state.storeA.appName }}</H1></P> <!-- sttore에 직접 접근 -->
    <P><H1>{{ appName }}</H1></P>
    </template>
    <script>
    // 를 @/main.js에서 @/store/index.js를  import하였으므로 import할 필요 없음
    // import store from './store'
    import { useStore } from 'vuex'
        export default defineComponent(
            {
                setup(){
                    // storreA에서 데이터를 가져온다.
                const store = useStore()
                const appName = store.state.storeA.appName

                return { 
                    appName,
                }
            }
        }
    )
    </script>

    </script>


    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/views/Employee/EmployeeListComponnt.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        <ag-grid-vue
            :rowData="employeeList"
            .................................... 생략 ................................
        />
    </template>

    <script>
    ........................................ 생략 ....................................
    import { useStore } from 'vuex'
    export default {
        setup(props) {
            const store = useStore()
            const employeeList = reactive(store.state.storeB.baseData.employeeList)
            const departData = reactive(store.state.storeB.departData);
            .................................... 생략 ................................
            return {
                employeeList,
                departData,
            };
        },
    };
    </script>


    
    
//////////////////////////////////////////////////////////////////////////////////
//
// 13. vuex - mutation - 동기작업
//
//////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/store/StoreB.js
    //
    //////////////////////////////////////////////////////////////////////////////////

    import data from '@/data/data.js'
    import { reactive } from 'vue'
    const store = {
        // state : store에서 취급하는 데이터
        state: {
            baseData: {
                employeeList: reactive(data.employeeList),
                departData: reactive(data.departData)
            },
            empDptList: [],
        },
        mutations: {
            empDptMutation : (state, payload) => {
                // state의 데이터에 한 행을 추가한다.
                state.baseData.employeeList.push(payload)
                
                // state의 모든 행에 dptName속성을 추가한다.
                state.empDptList = state.baseData.employeeList.map((ele) => ({
                ...ele,
                dptName : state.baseData.departData[ele.dptCode]
                }))
            }
        },
    }
    export default store

    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/views/Employee/EmployeeListComponnt.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        .................................... 생략 ....................................
    </template>
    <script>
    ...................................... 생략 ......................................
    import { useStore } from 'vuex'
    export default {
        .................................... 생략 ....................................
        setup(props) {
            const store = useStore()
            const employeeList = reactive(store.state.storeB.empDptList)
            const departData = reactive(store.state.storeB.departData);
            let gridApi = reactive();
            const onGridReady = async (params) => {
                gridApi = params.api;
                const payload = {
                        empCode: 'e006',
                        empName: '최종인',
                        dptCode: 'd001',
                        empAddr: '동해시', 
                        empTel: '010-2222-0000'
                    }
                store.commit('storeB/empDptMutation', payload)
                gridApi.setRowData(store.state.storeB.empDptList)
            }
            return {
                ................................ 생략 ................................
                employeeList,
                departData,
            };
        },
    };
    </script>










    
    
//////////////////////////////////////////////////////////////////////////////////
//
// 14. vuex - actions - mutation을 비동기로 호출
//
//////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/store/StoreB.js
    //
    //////////////////////////////////////////////////////////////////////////////////

    import data from '@/data/data.js'
    import { reactive } from 'vue'
    const store = {
        // state : store에서 취급하는 데이터
        state: {
            baseData: {
                employeeList: reactive(data.employeeList),
                departData: reactive(data.departData)
            },
            empDptList: [],
        },
        mutations: {
            empDptMutation : (state, payload) => {
                state.baseData.employeeList.push(payload)
                
                // state의 모든 행에 dptName속성을 추가한다.
                state.empDptList = state.baseData.employeeList.map((ele) => ({
                ...ele,
                dptName : state.baseData.departData[ele.dptCode]
                }))
            }
        },
        actions: {
            empDptAction : (conteext, payload) => {
                // mutation을 3초 후에 실행하게 하면 
                // 실행 즉시 함수는 종료되고
                // 3초 후에 mutation이 실행된다.
                setTimeout(
                    (payload)=>{
                        context.commit('empDptMutation', payload.empData)
                        payload.callback()
                    }
                , 3000)
            }
        },
    }
    export default store

    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // src/views/Employee/EmployeeListComponnt.vue
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
    <template>
        .................................... 생략 ....................................
    </template>
    <script>
    ...................................... 생략 ......................................
    import { useStore } from 'vuex'
    export default {
        .................................... 생략 ....................................
        setup(props) {
            const store = useStore()
            const employeeList = reactive(store.state.storeB.empDptList)
            const departData = reactive(store.state.storeB.departData);
            let gridApi = reactive();
            const onGridReady = async (params) => {
                gridApi = params.api;
                const payload = {
                    empData : {
                        empCode: 'e006',
                        empName: '최종인',
                        dptCode: 'd001',
                        empAddr: '동해시', 
                        empTel: '010-2222-0000'
                    }, 
                    callback : () => { 
                        gridApi.setRowData(store.state.storeB.empDptList) 
                    }
                }
                // dispatch로 actions의 storB/empEmpDpt를 호출하면
                // actions의 storB/empEmpDpt에서 multation의 storB/empEmpDpt를 호출한다.
                store.dispatch('storeB/empDptAction', payload) 
                
            }
            return {
                ................................ 생략 ................................
                employeeList,
                departData,
            };
        },
    };
    </script>
    




















    
//////////////////////////////////////////////////////////////////////////////////
//
// 15. CommonUtils
//
//////////////////////////////////////////////////////////////////////////////////
    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // "\src\utls\CommonUtil.js"
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->
export function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    <!--
    //////////////////////////////////////////////////////////////////////////////////
    //
    // \src\views\TestView.vue"
    //
    //////////////////////////////////////////////////////////////////////////////////
    -->

<script>
import { formatDate, capitalizeFirstLetter } from '@/utls/CommonUtil.js';


    setup(){

            console.log(formatDate(new Date))
            console.log(capitalizeFirstLetter('sample'))
}
