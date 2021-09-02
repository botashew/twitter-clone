<template lang="pug">
    header.header
        div.layout__left-sidebar
            div.sidebar-menu
                div.logo
                    img(src="../assets/svg/twitter.svg", class="brand")
                div
                    div.sidebar-menu__item.sidebar-menu__item--active
                        img(src="../assets/svg/home.svg", class="sidebar-menu__item-icon")
                        span Home
                    div.sidebar-menu__item
                        img(src="../assets/svg/explore.svg", class="sidebar-menu__item-icon")
                        span Explore
                    div.sidebar-menu__item
                        img(src="../assets/svg/notifications.svg", class="sidebar-menu__item-icon")
                        span Notifications
                    div.sidebar-menu__item
                        img(src="../assets/svg/messages.svg", class="sidebar-menu__item-icon")
                        span Message
                    div.sidebar-menu__item
                        img(src="../assets/svg/profile.svg", class="sidebar-menu__item-icon")
                        span Profile
                    div.sidebar-menu__item
                        img(src="../assets/svg/more.svg", class="sidebar-menu__item-icon")
                        span More
                    div
                        p {{currentUser.name}}
                        p {{currentUser.email}}
                    div
                        button(@click="logout") Logout
</template>

<script>
import { mapActions } from 'vuex'
import VueCookie from 'vue-cookie'
    export default {
        computed: {
            currentUser(){
                return JSON.parse(VueCookie.get('user'))
            }
        },
        methods: {
            ...mapActions(['logout'])
        }
    }
</script>