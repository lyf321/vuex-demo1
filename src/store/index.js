import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var nextId = 3;

const state = {
  todos: [
    {id: 0, text: '学习 JavaScript', isChecked: true},
    {id: 1, text: '学习 Vue', isChecked: false},
    {id: 2, text: '整个牛项目', isChecked: false}
  ]
};

const mutations = {
  add(state, newTodo) {
    state.todos.push({
      id: ++nextId,
      text: newTodo,
      isChecked: false
    })

  },
  reduce(state, index) {
    state.todos.splice(index, 1)
  },
  change(state, index) {
    state.todos[index].isChecked = !state.todos[index].isChecked
  }
};

const actions = {
  addAction({commit}, newTodo) {
    commit('add', newTodo)
  },
  reduceAction({commit}, index) {
    commit('reduce', index)
  },
  changeChecked({commit}, index) {
    commit('change', index)
  }
};


export default new Vuex.Store({
  state,
  actions,
  mutations
})
