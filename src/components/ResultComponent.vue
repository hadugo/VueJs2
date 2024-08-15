<!--
=================================================
    파일명 : src\components\ResultComponent.vue
=================================================
-->
<template>
    <input ref="edCode" v-model="code">
    <input ref="edName" v-model="name">
</template>

<script>

import eventBus from '@/event/eventbus';

export default {

    data() {
        return {
            code : '',
            name : '',
        }
    },

    methods : {
        getResult(result){
            this.code = result.code
            this.name = result.name
        },
    },

    mounted(){
        eventBus['setResult'] = this.getResult
    },
    beforeUnmount(){
        if (eventBus['setResult']) {
            delete eventBus['setResult']
        }
    },
}
</script>