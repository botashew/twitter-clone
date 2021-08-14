<template lang="pug">
    div.main
        img(src="../assets/svg/twitter.svg")
        h2 Log in to Twitter
        form(@submit.prevent="logIn")
        input(type="text" placeholder="Email")
        input(type="password" placeholder="Password")
        input(type="submit" value="Log in" class="login-button")
        router-link(to="signup") Sign up for Twitter
</template>

<script>
import { mapState, mapActions } from 'vuex'
    export default {
        computed: {

        },
        methods: {
            ...mapActions(['logIn'])
        }
    }
</script>


<style scoped>
    .main{
        border: none;
        margin: 0 auto;
    }
    .login-button{
        background: #4AA1F2;
        color: white;
        font-weight: 700;
        font-size: 15px;
        border-radius: 40px;
        padding: 5px;
        min-width: 63px;
        min-height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
    }
    .login-button:hover{
    background: #4495E0;
}
</style>