import { createStore } from 'vuex'

const mutations = {
  multi(state) {
    state.multipler = state.multipler*2
  },
  reset(state){
    state.multipler = 2
  }
},
  state = {
    multipler: 2
  }

export default createStore({ mutations, state, strict: true })
