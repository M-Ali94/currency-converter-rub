<template>
  <div id="app">
    <Hero/>
    <router-view></router-view>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    Hero
  },

  methods: {
    ...mapActions(['setCourses']),
  },

  mounted() {
    this.setCourses()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
