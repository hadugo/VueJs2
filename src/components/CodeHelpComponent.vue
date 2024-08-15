<!--
=================================================
    파일명 : src\components\CodeHelpComponent.vue
=================================================
-->
<template>
    <input ref="edCode" v-model="iniVal.code">
    <input ref="edName" v-model="iniVal.name">
    <button ref="btnSrch">...</button>
    <button @click="btnClick">확인</button>
</template>

<script>

    import eventBus from '@/event/eventbus';

    export default {
        props : {
            args : {
                type : Object,
                required : false,
                default : function() {
                    return {
                        code : '미입력',
                        name : '미입력',
                    }
                }
            }
        },

        data() {
            return {
                iniVal : {
                    code : '',
                    name : '',
                }
            }
        },

        methods : {
            btnClick(){
                const result = {
                    code : this.iniVal.code,
                    name : this.iniVal.name,
                }
//                this.$emit("selected", result)
                if (eventBus['setResult']) {
                    eventBus['setResult'](result);
                }
            },
        },

        mounted() {
            this.iniVal.code = this.args.code
            this.iniVal.name = this.args.name
        },
        
    }
</script>