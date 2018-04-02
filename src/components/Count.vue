<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3 v-if="">{{$store.state.count}}</h3>
  </div>
</template>

<script>
  import store from '../vuex/store';

  export default {
    name: "count",
    store,
    data() {
      return {
        msg: 'hello'
      }
    }
  }
</script>

<style scoped>

</style>
