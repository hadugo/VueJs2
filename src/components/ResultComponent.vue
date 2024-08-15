<!--
=================================================
    파일명 : src\components\ResultComponent.vue
=================================================
-->
<template>
    <div style="display: inline-block;">
        <input ref="edCode" v-model="code">
        <input ref="edName" v-model="name">
        {{ result }}
    </div>
</template>

<script>

import eventBus from '@/event/eventbus';
import mittBus from '@/event/mittBus';

export default {

    data() {
        return {
            code : '',
            name : '',
            result : '',
        }
    },

    methods : {
        getResult(result){
            this.code = result.code
            this.name = result.name
        },
        showResult(result){
            this.result = `${result.code}-${result.name}`
        },
    },

    mounted(){
        eventBus['setResult'] = this.getResult
        mittBus.on('showResult', this.showResult)
    },
    beforeUnmount(){
        if (eventBus['setResult']) {
            delete eventBus['setResult']
        }
        mittBus.off('showResult')
    },
}
</script>