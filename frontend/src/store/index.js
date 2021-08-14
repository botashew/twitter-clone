import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tweets: [],
    post:{
      tweet: null
    },
    user:{
      name: null,
      email: null,
      password: null,
      password2: null
    },
    errors: []
   
  },
  mutations: {
    SET_TWEETS(state, data){
      state.tweets = data
    },
    PUSH_TWEET(state, data){
      state.tweets = [...state.tweets, data]
    },
    SET_ERRORS(state, error){
      state.errors = error
    }
  },
  actions: {

    // Sign Up
    signUp({commit}){
      axios.post('http://localhost:3000/user/signup', {
          name: this.state.user.name,
          email: this.state.user.email,
          password: this.state.user.password,
          password2: this.state.user.password2
        })
        .then(user => {
          if(user.data.errors){
            commit('SET_ERRORS', user.data.errors)
          }
        })
        .then(() => {
            if(this.state.errors.length != 0){
              alert(this.state.errors[0].msg)
              this.state.errors = []
            }
          }
        )
    },

    // Login
    logIn(){

    },
    // Create Tweet
    async postTweet({commit}){
        const result = await axios.post('http://localhost:3000/user/60fa4dc8c4ce79701fd80017/write-tweet', {
            tweet: this.state.post.tweet })
        commit('PUSH_TWEET', result.data)
        this.state.post.tweet = null
      },

    
    // Get all Tweets
    async fetchTweets({ commit }){
      const result = await axios.get('http://localhost:3000/tweets/all/json')
      commit('SET_TWEETS', result.data)
    },

    // Delete Tweet

  },
  modules: {
    auth
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
})
