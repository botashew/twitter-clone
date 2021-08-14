<template lang="pug">
    div.background
        SignupForm
</template>


<script>
import SignupForm from '../components/signup-form.vue'

export default {
    components: {
        SignupForm
    }
}
</script>

<style scoped>
    .background {
        width: 100%;
        height: 920px;
        margin: 0;
        background: #999999;
    }
</style>