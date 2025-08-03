<script setup>
  import { ref, watch} from 'vue'

  import Menu from './components/Menu.vue'
  import Header from './components/Header.vue'
  import Home from './components/Home.vue'
  import About from './components/About.vue'
  import Portfolio from './components/Portfolio.vue'
  import Skills from './components/Skills.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'
  import ViewImage from './components/ViewImage.vue'



</script>

<template>
  <div id="app">
    <Menu />
    <Header />
    <Home />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
    <Footer />
    <ViewImage />
  </div>
</template>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    height: auto;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
</style>
