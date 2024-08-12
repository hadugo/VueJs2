<!--
=================================================
    파일명 : src\views\SampleView.vue
=================================================
-->
<template>
    <div>
        <div>
        부서 : <CodeHelpComp ref="cmpDepart"/>
        </div>
        <div>
        직급 : <CodeHelpComp ref="cmpTitle"/>
        </div>
    </div>
</template>

<script>

import CodeHelpComponent from '@/components/CodeHelpComponent.vue';

export default {
    name: 'SampleVuew',

    components: {
        CodeHelpComp : CodeHelpComponent,
    },

    data() {
        return {
        };
    },
};
</script>

<style>
</style>
