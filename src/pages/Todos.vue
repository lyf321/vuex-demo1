<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="todos">todos</router-link>
    <h1>TODOS</h1>
    <todo-add @add="addTodo"></todo-add>

    <!--<router-link to="/todos" >all</router-link>-->
    <!--<router-link to="/todos/finish">finish</router-link>-->
    <!--<router-link to="/todos/unfinish">unfinish</router-link>-->

    <ol>
      <li v-for="(todo,index) in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.isChecked" @click="changeChecked(index)">
        {{todo.text}}
        <button @click="deleteTodo(index)">X</button>
      </li>
    </ol>
    <todo-foot v-bind:todos="todos"></todo-foot>
  </div>
</template>

<script>
  import store from '@/store/index'
  import {mapState, mapActions} from 'vuex'

  import TodoAdd from '../components/TodoAdd'
  import TodoFoot from '../components/TodoFoot'


  export default {
    name: 'todolist',
    store,
    components: {
      TodoAdd,
      TodoFoot
    },
    computed: {
      ...mapState(['todos']),
    },
    methods: {
      ...mapActions(['addAction', 'reduceAction', 'changeChecked']),
      addTodo(newTodo) {
        this.addAction(newTodo)
      },
      deleteTodo(index) {
        this.reduceAction(index)
      },


      // addTodo(newTodo) {
      //   this.todos.push({
      //     id: this.nextId,
      //     text: newTodo,
      //     isChecked: false
      //   })
      //   this.newTodo = ''
      //   this.nextId = this.nextId + 1
      // },
      // deleteTodo: function (index) {
      //   this.todos.splice(index, 1)
      // }
    }
  }
</script>

<style lang="sass" scoped>

</style>
