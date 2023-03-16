import { createStore } from 'vuex'
import axios from 'axios';
const URL = 'https://luxus.onrender.com/';

export default createStore({
  state: {
    perfumes: null,
    perfume: null,
    users: null,
    user: null,
    loggedUser: null,
    message: null
  },
  getters: {
    perfumes(state) {
      return state.perfumes;
    },
    perfume(state) {
      return state.perfume;
    },
    users(state) {
      return state.users;
    },
    user(state) {
      return state.user;
    },
    loggedUser(state){
      return state.loggedUser;
    },
  },
  mutations: {
    setPerfumes(state, perfumes){
      state.perfumes = perfumes;
    },
    setPerfume(state, perfume) {
      state.perfume = perfume;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setLoggedUser(state, loggedUser) {
      state.loggedUser = loggedUser;
    },
    setMessage(state, message) {
      state.message = message;
    }

  },
  actions: {
    async signIn(context, payload) {
      let res = await axios.post(`${URL}login`, payload);
      
      let {result, msg, err} = await res.data;
      
      if(result) {
        // console.log('statement reached 1');
        context.commit('setLoggedUser', result);    
        context.commit('setMessage', msg);
        // console.log(result.first_name);
      }else {
        context.commit('setMessage', err);
        console.log(err);
      }
    },

    async signUp(context, payload) {
      let res = await axios.post(`${URL}register`, payload);
      let {result, msg, err} = await res.data;
      if(result){
        context.commit('setUser', result);
        context.commit('setMessage', msg);
      }else {
        context.commit('setMessage', err);
      }
    },

    // async login(context, info){
    //   try {
    //     let res = await fetch(`${URL}login`, {
    //       method: 'POST',
    //       body: info
    //     });
    //     let data = await res.json();
    //     context.commit('setLoggedUser', data.results)
    //   }
    //   catch(err){
    //     console.log(err);
    //   }    
    // },
    
    // fetch vehicles
    async fetchPerfumes(context) {
      try { 
        let res = await fetch(URL + 'perfumes');
        let data = await res.json();
        console.log(data);
        context.commit('setPerfumes', data.results.length !== 0 ? data.results : null);
      } catch(e) {
        console.log(e);
      }
    },

    // delete client
    async deleteUser(context, id){
      let res = await axios.delete(`${URL}user/${id}`, id);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers');
        context.commit('setMessage', msg);
      } 
      else {
        context.commit('setMessage', err);
      }
        
    },

    // edit/update client
    async updateUser(context, id, payload){
      let res = await axios.put(`${URL}user/${id}`, payload);
      let {msg, err} = await res.data;
      msg ? context.commit('setMessage', msg) : context.commit('setMessage', err);
    },
  
    
    async fetchUser(context, id) {
      try { 
        let res = await fetch(`${URL}user/${id}`);
        let data = await res.json();
        console.log(data);
        context.commit('setUser', data.results.length !== 0 ? data.results : null);
      }catch(e) {
        console.log(e);
      }
    },

    async fetchUsers(context) {
      try { 
        let res = await fetch(URL + 'users');
        let data = await res.json();
        console.log(data);
        context.commit('setUsers', data.results.length !== 0 ? data.results : null);
      }catch(e) {
        console.log(e);
      }
    },

    async fetchUser(context, id) {
      try { 
        let res = await fetch(`${URL}user/${id}`);
        let data = await res.json();
        console.log(data);
        context.commit('setUser', data.results.length !== 0 ? data.results : null);
      }catch(e) {
        console.log(e);
      }
    }

    
  },
})
