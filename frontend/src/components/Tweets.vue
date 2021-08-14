<script>
    export default {
        name: 'Tweets',
        props: ['tweet'],
    }
</script>

<template lang="pug">
        //- Tweet
        div.tweet
            img(src="../assets/image/profile-image-1.jpg" class="tweet__author-logo")
            div.tweet__main
                div.tweet__header
                    div.tweet__author-name
                        span {{ tweet.byUser[0].name}}
                    div.tweet__author-slug
                        span @botashevakbar
                    div.tweet__publish-time
                        span 38m
                div.tweet__content
                    span  {{ tweet.tweet }} 
                    a(href="#") Kremlin.ru
                    //- img(src="../assets/image/image-for-tweet.jpg" class="tweet__image")

</template>


