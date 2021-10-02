import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from './modules/auth'
import VueCookie from 'vue-cookie'
import Router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tweets: [],
    post:{
      tweet: null
    },
    user:{
      name: null,
      username: null,
      email: null,
      password: null
    },
    errors: {
      name: '',
      username: '',
      email: '',
      password: ''
    },
    successMsg: ''
   
  },
  mutations: {
    SET_TWEETS(state, data){
      state.tweets = data
    },
    PUSH_TWEET(state, data){
      state.tweets = [...state.tweets, data]
    },
    SET_ERRORS(state, errors){
      state.errors = errors
    },
    SET_SUCCESS_MSG(state, message){
      state.successMsg = message
    }
  },
  actions: {
    // Create account
    signUp({commit}) {
      axios.post('http://localhost:3000/user/signup', this.state.user)
        .then(() => {
          commit('SET_SUCCESS_MSG', 'You registered successfuly, you can login now')
          Router.push({name: 'Login'})
        })
        .catch(err => {
          console.log(err.response.data.errors)
          commit('SET_ERRORS', err.response.data.errors)
        })
    },

    // Login
    logIn({ commit }){

  
        axios.post('http://localhost:3000/user/login', {
          email: this.state.user.email,
          password: this.state.user.password
        })
        .then( response => {
          VueCookie.set('token', response.data.token, 1)
          VueCookie.set('user', JSON.stringify(response.data.user))
          Router.push({name: 'Home'})
        })
        .catch(err => {
          if(err.response){
            commit('SET_ERRORS', err.response.data)
          }
        })
    },

    // Logout
    logout(){
      VueCookie.delete('token')
      VueCookie.delete('user')
      Router.go()
    },

    // Add Tweet
    async postTweet({commit}){
        const user = JSON.parse(VueCookie.get('user'))
        const result = await axios.post('http://localhost:3000/tweet/write/'+user._id, {
            tweet: this.state.post.tweet })
        commit('PUSH_TWEET', result.data)
        this.state.post.tweet = null
      },
    
    // Get all Tweets
    async fetchTweets({ commit }){
      const result = await axios.get('http://localhost:3000/tweet/all')
      const tweets = result.data
      commit('SET_TWEETS', tweets)
    },

  },
  modules: {
    auth
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
})
