<script>
import { ref } from "vue";

export default {
  async setup() {
    const result = ref("");

    const response = await fetch("/.netlify/functions/hello").then((response) =>
      response.json()
    );

    result.value = response.message;

    return { result };
  },
};
</script>

<template>{{ result }}</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
