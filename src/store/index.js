import Vue from 'vue'
import Vuex from 'vuex'
import admin from './modules/admin'

import model from './modules/model'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    admin,
    model
  }
})

export default store