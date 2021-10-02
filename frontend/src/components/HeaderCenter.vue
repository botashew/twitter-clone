<script>
    import Tweets from './Tweets.vue'
    import {  mapState, mapActions } from 'vuex'

    export default {
        name: 'HeaderCenter',
        components: {
            Tweets
        },
        computed: {
            ...mapState(['tweets', 'post'])
        },
        methods: {
            ...mapActions(['fetchTweets', 'postTweet']),
        },
        async created(){
            this.fetchTweets()
        }
    }
</script>

<template lang="pug">
    //- Tweets
    div.layout-main
        //- Title bar
        div.title-bar
            div.title-content
                span.title-name Home
        div.befor-write-tweet
        div.write-tweet
            div.write-tweet__image
                img(src="../assets/profile-image-1.jpg" class="tweet__author-logo")
            div.write-tweet__content
                //- Form
                form(@submit.prevent="postTweet")
                    div.write-tweet__write
                        input(type="text" class="write-tweet__content-input" placeholder="What's happening?" name="tweet" v-model="post.tweet")
                    div.write-tweet__who-can-reply
                        img(src="../assets/svg/earth.svg" class="write-tweet__who-can-reply-icon")
                        span Everyone can reply
                    div.write-tweet__footer
                        div.write-tweet__footer-icons
                            div.write-weet__footer-icon-div
                                img(src="../assets/svg/write-tweet-1.svg" class="write-tweet__footer-icon")
                            div.write-weet__footer-icon-div
                                img(src="../assets/svg/write-tweet-2.svg" class="write-tweet__footer-icon")
                            div.write-weet__footer-icon-div
                                img(src="../assets/svg/write-tweet-3.svg" class="write-tweet__footer-icon")
                            div.write-weet__footer-icon-div
                                img(src="../assets/svg/write-tweet-4.svg" class="write-tweet__footer-icon")
                            div.write-weet__footer-icon-div
                                img(src="../assets/svg/write-tweet-5.svg" class="write-tweet__footer-icon")
                        //- div.write-tweet__button
                        //-     input(type="submit" value="Tweet")
                        input(type="submit" value="Tweet" class="write-tweet__button")
        div.after-write-tweet
        

        //- Tweets
        Tweets(v-for="(tweet, i) in tweets", :tweet="tweet" :key="i")

</template>

<style scoped>
    
</style>