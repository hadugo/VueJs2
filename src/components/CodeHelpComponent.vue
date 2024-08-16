<!--
=================================================
    파일명 : src\components\CodeHelpComponent.vue
=================================================
-->
<template>
    <div style="display: inline-block;">
        <input ref="edCode" v-model="iniVal.code" @keydown="edCodeKeyDown">
        <input ref="edName" v-model="iniVal.name">
        <button ref="btnSrch">...</button>
        <button @click="btnResultClick">확인</button>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';
    import eventBus from '@/event/eventbus';
    import mittBus from '@/event/mittBus';

    export default {
        props : {
            args : {
                type : Object,
                required : false,
                default : function() {
                    return {
                        type : '',
                        code : '미입력',
                        name : '미입력',
                    }
                }
            }
        },

        data() {
            return {
                iniVal : {
                    type : '',
                    code : '',
                    name : '',
                }
            }
        },

        methods : {
            edCodeKeyDown(){
                console.log(this.getNamedList)
            },
            btnResultClick(){
                const result = {
                    type : this.iniVal.type,
                    code : this.iniVal.code,
                    name : this.iniVal.name,
                }
                this.$emit("selected", result)
                if (eventBus['setResult']) {
                    eventBus['setResult'](result);
                }
                mittBus.emit('showResult', result)
            },
        },

        computed : {
            ...mapGetters(['getNamedList'])
        },
        mounted() {
            this.iniVal.type = this.args.type
            this.iniVal.code = this.args.code
            this.iniVal.name = this.args.name
        },
        
    }
</script>