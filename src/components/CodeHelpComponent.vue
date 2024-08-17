<!--
/* ================================================= *
 * 파일명 : src\components\CodeHelpComponent.vue
 * ================================================= */
 -->
<template>
    <div></div>
</template>
<script>
import { mapGetters  } from 'vuex';
export default {
    data() {
        return {                
            // Storage로 분리 : namedList : { DEPT : [...], TITL : [...],}
        }
    },
    computed : {
        ...mapGetters(['namedList']),
    },
    mounted() {
        console.log(this.namedList); 
    },
}
</script>
