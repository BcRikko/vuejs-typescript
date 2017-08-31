<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view propsMessage="vue-router"></router-view>
    <hello
      propsMessage="hello tag"
      clickEvent="clicked"
      @clicked="showChildMessage">
    </hello>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Hello from './components/Hello.vue'

@Component({
  name: 'app',
  components: { Hello }
})
export default class App extends Vue {
  showChildMessage (val: string) {
    alert(val + ' from child')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
