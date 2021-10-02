<script>
import moment from 'moment'
    export default {
        name: 'Tweets',
        props: ['tweet'],
        created(){

            const date1 = moment(new Date(this.tweet.date).toUTCString())
            const date2 = moment(new Date(Date.now()).toUTCString())

            const diffSecond = date2.diff(date1, 'second')
            const diffMinute = date2.diff(date1, 'minute')
            const diffHour = date2.diff(date1, 'hour')
            const diffDay = date2.diff(date1, 'day')

            if(diffDay >= 1){
                this.tweet.date = diffDay + 'd'
            }
            else if(diffHour >= 1){
                this.tweet.date = diffHour + 'h'
            }
            else if(diffMinute >= 1){
                this.tweet.date = diffMinute + 'm'
            }
            else{
                this.tweet.date = diffSecond + 's'
            }
            
        }
    }
</script>

<template lang="pug">
        //- Tweet
        div.tweet
            img(src="../assets/image/profile-image-1.jpg" class="tweet__author-logo")
            div.tweet__main
                div.tweet__header
                    div.tweet__author-name
                        span {{ tweet.byUser[0].name }}
                    div.tweet__author-slug
                        span @{{ tweet.byUser[0].username }}
                    div.tweet__publish-time
                            span · {{ tweet.date }}
                div.tweet__content
                    span  {{ tweet.tweet }}

</template>


