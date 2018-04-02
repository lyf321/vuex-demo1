<template>
  <div>
    <p v-show="todos.length===0">还没有添加任何任务</p>
    <p v-show="todos.length!==0">
      {{todos.length}}个代办事项
      {{completed}}个已完成
      {{unComputed}}未完成
    </p>
  </div>
</template>

<script>
  export default {
    name: 'todo-foot',
    props: ['todos'],
    computed: {
      completed () {
        return this.todos.filter((todo) => {
          return todo.isChecked
        }).length
      },
      unComputed () {
        return this.todos.filter((todo) => {
          return !todo.isChecked
        }).length
      }

    }
  }
</script>

<style scoped>

</style>
