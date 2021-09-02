<template lang="pug">
    main
        div.twitter__header
            div.twitter__header-left
                img(src="../assets/svg/twitter.svg" class="twitter__logo-left")
            div.twitter__header-right
                div.twitter__header-right-content
                    img(src="../assets/svg/twitter.svg" class="twitter__logo")
                    h1 Happening now
                    h2 Join Twitter today.
                    router-link(to="signup")
                        div.twitter__signup-button Sign Up
                    router-link(to="login")
                        div.twitter__login-button Log in
        //- Footer
        div.twitter__footer
            div
                span Twitter-Clone by @botashew
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    @import '../assets/style/twitter.css';
</style>