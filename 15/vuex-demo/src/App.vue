<template>
  <div id="app">
      {{$store.getters.myCount}}
      <A />
  </div>
</template>

<script>
import A from './components/A.vue';

export default {
  name: "app",
  components: {
      A
  }
};
</script>

<style>
</style>
