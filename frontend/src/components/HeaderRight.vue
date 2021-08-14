<template lang="pug">
    //- Right sidebar
    div.right-header
        div.layout__right-sidebar-container
            div.layout_right_sidebar
                
                //- Search
                div.search
                    div.search-input
                        img(src="../assets/svg/search.svg" class="search-icon")
                        input(type="text" class="search-name" placeholder="Search Twitter")
                
                
                //- Trends for you
                div.trends-for-you
                    //- Block-head
                    div.trends-for-you__block
                        div.trends-for-you__heading
                            span Trends for you
                    //- Block
                    div.trends-for-you__block
                        div.trends-for-you__meta-information
                            span Trending in Russia
                        div.trends-for-you__trend-name
                            span #Putin
                    //- Block
                    div.trends-for-you__block
                        div.trends-for-you__meta-information
                            span Politics · Tranding
                        div.trends-for-you__trend-name
                            span #Jurnalism
                        div.trends-for-you__meta-information
                            span 1,987 Tweets
                    //- Block
                    div.trends-for-you__block
                        div.trends-for-you__meta-information
                            span Trending in Kyrgyzstan
                        div.trends-for-you__trend-name
                            span #Выборы
                        div.trends-for-you__meta-information
                            span 198k Tweets
                
                
                //- Who to follow
                div.who-to-follow
                    //- Heading block
                    div.who-to-follow__block
                        div.who-to-follow__heading
                            span Who to follow
                    //- Block
                    div.who-to-follow__block
                        img(src="../assets/image/profile-image-2.jpg" class="who-to-follow__author-logo")
                        //- Block content
                        div.who-to-follow__content
                            div
                                div.who-to-follow__author-name
                                    span Tatyana Inkova
                                div.who-to-follow__author-slug
                                    span @Inkova
                            div.who-to-follow__button
                                span Follow
                    //- Block
                    div.who-to-follow__block
                        img(src="../assets/image/profile-image-3.jpg" class="who-to-follow__author-logo")
                        //- Block content
                        div.who-to-follow__content
                            div
                                div.who-to-follow__author-name
                                    span Diana Inkova
                                div.who-to-follow__author-slug
                                    span @DianaInkova
                            div.who-to-follow__button
                                span Follow
                

</template>