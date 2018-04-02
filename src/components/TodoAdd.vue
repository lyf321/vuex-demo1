<template>
  <div>
    <input type="text" v-model="newTodo" @keyup.enter="addTodo">
    <button @click="addTodo">添加</button>
  </div>
</template>

<script>
  export default {
    name: 'addTodo',
    data: () => ({
      newTodo: ''
    }),
    methods: {
      addTodo() {
        if (this.newTodo) {
          this.$emit('add', this.newTodo)
        } else {
          alert('不能为空')
        }
        this.newTodo = ''
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/sass" scoped>
  $button-color: pink;
  $input-width: 200px;
  input {
    width: $input-width;
    border-color: $button-color;
  }

  button {
    background-color: $button-color;
  }
</style>
