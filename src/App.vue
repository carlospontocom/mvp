<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
#app {
  width: 100%;
  max-width: none;
  margin: 0;
  border: none;
  min-height: 100vh;
}
</style>
