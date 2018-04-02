<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="todos">todos</router-link>
    <h1>HOME</h1>
    <span>{{author}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: 'welcome to home!'
    }
  }
}
</script>

<style>

</style>
