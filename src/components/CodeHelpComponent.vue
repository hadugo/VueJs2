<!--
=================================================
    파일명 : src\components\CodeHelpComponent.vue
=================================================
-->
<template>
    <input ref="edCode" v-model="iniVal.code">
    <input ref="edName" v-model="iniVal.name">
    <button ref="btnSrch">...</button>
</template>

<script>
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

        mounted() {
            this.iniVal.code = this.args.code
            this.iniVal.name = this.args.name
        }
    }
</script>