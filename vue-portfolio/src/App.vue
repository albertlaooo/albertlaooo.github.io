<script setup>
  import Header from './components/Header.vue'
  import Home from './components/Home.vue'
  import Portfolio from './components/Portfolio.vue'
  import Skills from './components/Skills.vue'
  import Contact from './components/Contact.vue'
</script>

<template>
  <div id="app">
    <Header />
    <Home />
    <Portfolio />
    <Skills />
    <Contact />
  </div>
</template>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    height: auto;
    overflow-y: auto;
    scroll-behavior: smooth;
  }
</style>
