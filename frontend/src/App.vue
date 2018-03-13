<template>
  <div id="app">
    <title-bar></title-bar>
    <router-view/>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import TitleBar from '@/components/title-bar'
import FooterComp from '@/components/footer'
import Analytics from '@/utils/analytics'

export default {
  name: 'app',
  components: {
    TitleBar,
    FooterComp
  },
  watch: {
    $route() {
      Analytics.init()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
