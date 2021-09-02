<template lang="pug">
    div.main
        img(src="../assets/svg/twitter.svg")
        h2 Log in to Twitter
        form(@submit.prevent="logIn")
            div.success_msg
                h3 {{successMsg}}
            input(type="text" placeholder="Email" v-model="user.email")
            div.error_msg {{errors.email}}
            input(type="password" placeholder="Password" v-model="user.password")
            div.error_msg {{errors.password}}
            input(type="submit" value="Log in" class="login-button")
        router-link(to="signup") Sign up for Twitter
</template>

<script>
import { mapState, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapState(['user', 'errors', 'successMsg'])
        },
        methods: {
            ...mapActions(['logIn'])
        }
    }
</script>


<style scoped>
    img{
        height: 28px;
    }
    .success_msg {
        color: green;
    }
    .error_msg{
        color: red;
    }
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