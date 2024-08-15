<!--
=================================================
    파일명 : src\views\SampleView.vue
=================================================
-->
<template>
    <div>
        <div>
        부서 : 
        <CodeHelpComp 
            ref="cmpDepart" 
            :args="departValues"
            @selected="cmpSelected"
        />
        <div>{{ result }}</div>
        <div>
            결과 : 
            <ResultComp/>
        </div>
        </div>
    </div>
</template>

<script>

import CodeHelpComponent from '@/components/CodeHelpComponent.vue';
import ResultComponent from '@/components/ResultComponent.vue';

export default {
    name: 'SampleVuew',

    components: {
        CodeHelpComp : CodeHelpComponent,
        ResultComp : ResultComponent,
    },
    
    emits: ['selected'], // 이 부분 추가

    data() {
        return {
            departValues : {
                code : "D011",
                name : "관리부",
            },
            result : " ",
        };
    },

    methods : {
        cmpSelected(data){
            this.result = `${data.code} - ${data.name}`
        },
    },
};
</script>

<style>
</style>
