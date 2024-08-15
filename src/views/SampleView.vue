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
        />
        </div>
        <div> 
            &nbsp;
        </div>
        <div>
            결과 : 
            <ResultComp/>
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
        ResultComp : ResultComponent
    },

    data() {
        return {
            departValues : {
                code : "D011",
                name : "관리부",
            },
        };
    },
};
</script>

<style>
</style>
