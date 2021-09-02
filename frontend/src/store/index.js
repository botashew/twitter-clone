import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from './modules/auth'
import VueCookie from 'vue-cookie'

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
      password: null
    },
    errors: {
      name: '',
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

    // Create token
    
    // createToken (id) {
    //     const maxAge = 24 * 60 * 60
    //     return jwt.sign({ id }, 'botashew secret', { expiresIn: maxAge})
    // },
    // Sign Up
    // signUp({commit}) {
    //   axios.post('http://localhost:3000/user/signup', this.state.user)
    //     .then(response => {
    //       // Error
    //       if(response.data.errors){
    //         commit('SET_ERRORS', response.data.errors)
    //         console.log(response.data.errors)
    //       }
          
    //     })
    // },

    signUp({commit}) {
      axios.post('http://localhost:3000/user/signup', this.state.user)
        .then(() => {
          commit('SET_SUCCESS_MSG', 'You registered successfuly, you can login now')
          window.$vm.$router.push({name: 'login'})
        })
        .catch(err => {
          commit('SET_ERRORS', err.response.data)
        })
    },

    // Login
    logIn({ commit }){
      axios.post('http://localhost:3000/user/login', {
        email: this.state.user.email,
        password: this.state.user.password
        })
      .then( (response) => {
        VueCookie.set('token', response.data.token, 1)
        VueCookie.set('user', JSON.stringify(response.data.user))
        window.$vm.$router.push({name: 'Home'})
      })
      .catch(err => {
        commit('SET_ERRORS', err.response.data)
      })
      
    },

    // Logout
    logout(){
      VueCookie.delete('token')
      VueCookie.delete('user')
      window.$vm.$router.go()
    },
    // Create Tweet
    async postTweet({commit}){
        const user = JSON.parse(VueCookie.get('user'))
        const result = await axios.post('http://localhost:3000/tweets/'+user._id+'/write-tweet', {
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
